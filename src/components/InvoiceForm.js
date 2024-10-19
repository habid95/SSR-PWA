import { useState, Suspense, lazy } from 'react';
import { useForm } from 'react-hook-form';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Image from 'next/image';
import { companyFields, invoicesData, clientFields, InvoiceFields } from '@/const';

// Carga perezosa de componentes
const CustomForm = lazy(() => import('./CustomForm'));
const InvoiceTable = lazy(() => import('./InvoiceTable'));

const InvoiceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [companyLogo, setCompanyLogo] = useState(null);

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

  const onSubmit = () => {
    setTimeout(() => {
      exportToPDF();
    }, 1000);
  };

  const exportToPDF = () => {
    const input = document.getElementById('invoice');
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Ajusta según sea necesario
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div id="invoice" className="invoice-template pt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="flex flex-col pl-4 items-center md:items-start">
            <label className="cursor-pointer text-center">
              {companyLogo ? (
                <Image src={companyLogo} alt="logo-empresa" height={150} width={150} layout="intrinsic" />
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
            {errors['companyLogo'] && <p className="text-red-500">{errors['companyLogo'].message}</p>} {/* Mensaje de error */}
          </div>

          <Suspense fallback={<div>Cargando...</div>}>
            <CustomForm aling="md:text-right" formData={companyFields} register={register} errors={errors} />
          </Suspense>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8">
          <Suspense fallback={<div>Cargando...</div>}>
            <CustomForm title="Datos Cliente: " aling="md:text-left" formData={clientFields} register={register} errors={errors} />
          </Suspense>
          
          <Suspense fallback={<div>Cargando...</div>}>
            <CustomForm aling="md:text-left" formData={InvoiceFields} register={register} errors={errors} />
          </Suspense>
        </div>

        <Suspense fallback={<div>Cargando...</div>}>
          <InvoiceTable invoices={invoicesData} register={register} errors={errors} />
        </Suspense>
      
      </div>

      <button type="submit" className="bg-[#ff5c35] font-semibold text-black p-2 mt-4">
        Descargar
      </button>
    </form>
  );
};

export default InvoiceForm;
