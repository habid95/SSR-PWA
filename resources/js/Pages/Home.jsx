import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomForm } from '../components/CustomForm';
import { clientFields, companyFields, InvoiceFields, invoicesData } from '../const';
import InvoiceTable from '../components/InvoiceTable';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Home = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [companyLogo, setCompanyLogo] = useState(null);

    const onSubmit = () => {
        setTimeout(() => {
            exportToPDF();
        }, 1000);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setCompanyLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const exportToPDF = () => {
        const elemet = document.getElementById('invoice');
        html2canvas(elemet, { useCORS: true }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          const imgWidth = 190;
          const pageHeight = pdf.internal.pageSize.height;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;
    
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
    
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          pdf.save('invoice.pdf');
        });
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='px-14 my-5 mx-5 md:mx-20 p-5 xl:max-w-4xl cl:mx-auto bg-white rounded shadow-2xl'>
            
            <div id="invoice" className="invoice-template">
                <h2 className='font-medium text-sm md:text-2xl pb-4'>Factura</h2>
                <div className='flex justify-between w-full'>
                    <div className=''>
                        <CustomForm
                            aling="text-left"
                            formData={companyFields}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className=' w-[110px] h-[100px] md:w-[150px]  md:h-[130px]'>
                        <label className="cursor-pointer  text-left">
                            {companyLogo ? (
                                <img 
                                    className=" w-full"
                                    src={companyLogo}
                                    alt="logo-empresa"
                                    layout="intrinsic"
                                />
                            ) : (
                                <p>Logo</p>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                {
                                ...register('companyLogo', {
                                    required: 'La imagen es requerida.',
                                    onChange: (e) => handleImageChange(e),
                                })
                                }
                                className="hidden"
                            />
                        </label>
                        {errors['companyLogo'] && <p className="text-red-500">{errors['companyLogo'].message}</p>} 
                    </div>
                </div>

                <div className='pt-4 md:pt-11 flex justify-between w-full'>
                    <CustomForm
                        aling="text-left"
                        formData={clientFields}
                        register={register}
                        errors={errors}
                        />

                    <CustomForm
                        aling="text-left"
                        formData={InvoiceFields}
                        register={register}
                        errors={errors}
                        alingLabel="text-right"
                    />

                </div>

                <InvoiceTable invoices={invoicesData} register={register} errors={errors} />
            </div>

            <button type="submit" className="bg-[#ff5c35] font-semibold text-black p-2 mt-4">
                Descargar
            </button>
        </form>
    );
   
};

export default Home;