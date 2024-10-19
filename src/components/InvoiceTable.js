import React, { useState } from 'react';// Asegúrate de ajustar la ruta según sea necesario
import TotalsTable from './TotalsTable ';
import { AiFillDelete } from "react-icons/ai";

const InvoiceTable = ({ invoices, register, errors }) => {
  const [products, setProducts] = useState([{ id: '', description: '', quantity: '', price: '' }]);
  const [discountPercentage, setDiscountPercentage] = useState('');

  const handleAddRow = (event) => {
    event.preventDefault();
    setProducts([...products, { id: '', description: '', quantity: '', price: '' }]);
  };

  const handleInputChange = (rowIndex, fieldName, value) => {
    const updatedProducts = products.map((record, index) =>
      index === rowIndex ? { ...record, [fieldName]: value } : record
    );
    setProducts(updatedProducts);
  };

  const handleDeleteRow = (rowIndex) => {
    const updatedProducts = products.filter((_, index) => index !== rowIndex);
    setProducts(updatedProducts);
  };

  const calculateSubtotal = () => {
    return products.reduce((acc, product) => {
      const quantity = parseFloat(product.quantity) || 0;
      const price = parseFloat(product.price) || 0;
      return acc + (quantity * price);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const discountAmount = (subtotal * (parseFloat(discountPercentage) / 100)) || 0;
  const total = subtotal - discountAmount;

  return (<>
    <div className='group pt-10'>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            {invoices.map((invoice, index) => (
              <th key={index} className="p-2 text-left">
                {invoice.placeholder}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((record, rowIndex) => (
            <tr key={rowIndex} className="group/edit relative">
              {invoices.map((invoice, index) => (
                <td key={index} className="p-2">
                  <input
                    {...register(`${rowIndex + invoice.name}`, { required: invoice.isRequired })}
                    type={invoice.type}
                    placeholder={invoice.placeholder}
                    className={`group w-full bg-transparent focus:ring-0 focus:outline-none  ${
                      errors[`${rowIndex +invoice.name}`] ? 'border  border-red-500' : 'border-gray-300'
                    } `}
                    value={record[invoice.name] || ''}
                    onChange={(e) => handleInputChange(rowIndex, invoice.name, e.target.value)}
                  />
                </td>
              ))}
              <td className="absolute right-0 p-1">
                <button
                  onClick={() => handleDeleteRow(rowIndex)}
                  className="absolute right-0 p-1 rounded-full bg-[#ff5c35] text-white opacity-0 group-hover/edit:opacity-100 transition-opacity duration-300"
                >
                  <AiFillDelete />
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleAddRow}
        className="bg-[#ff5c35] font-semibold  w-full p-2 hidden group-hover:block opacity-0 translate-y-5 duration-1000 group-hover:opacity-100 group-hover:translate-y-0"
      >
        Agregar nuevo registro
      </button>


      
    </div>
    <TotalsTable 
      subtotal={subtotal} 
      discountPercentage={discountPercentage} 
      setDiscountPercentage={setDiscountPercentage} 
      total={total} 
    />
  </>
    
  );
};

export default InvoiceTable;
