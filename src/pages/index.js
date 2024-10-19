import Head from 'next/head';
import InvoiceForm from '@/components/InvoiceForm';

const Home = () => {

  
  return (
    <>
      <Head>
        <title>Generador de Facturas - PWA SSR</title>
        <meta name="description" content="Genera facturas de manera rápida y eficiente." />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="w-4/5 md:w-3/5 mx-auto p-5 m-4 rounded-lg shadow-lg mt-10 bg-white">
        <h1 className="text-xl text-center font-bold">Factura</h1>
        
        <InvoiceForm />
      </div>
    </>
  );
};



export default Home;
