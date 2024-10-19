// TotalsTable.js
import React from 'react';

const TotalsTable = ({ subtotal, discountPercentage, setDiscountPercentage, total }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-right">Totales</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full mt-2 text-right">
          <tbody>
            <tr>
              <td className="p-2">Subtotal:</td>
              <td className="p-2">{subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="p-2">Descuento (%):</td>
              <td className="p-2">
                <input
                  type="number"
                  value={discountPercentage}
                  onChange={(e) => setDiscountPercentage(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                  className="p-1 w-full text-right"
                  min="0"
                  max="100"
                />
              </td>
            </tr>
            <tr className="font-bold">
              <td className="p-2">Total:</td>
              <td className="p-2">{total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalsTable;
