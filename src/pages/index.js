import Head from 'next/head';
import InvoiceForm from '@/components/InvoiceForm';
import { Header } from '@/components/Header';
import { Invoice } from '@/components/Invoice';
import { HowUse } from '@/components/HowUse';
import { CustomInvoice } from '@/components/CustomInvoice';
import { Carrusel } from '@/components/Carrusel';

const Home = () => {

  
  return (
    <>
      <Head>
        <title>Generador de Facturas - PWA SSR</title>
        <meta name="description" content="Genera facturas de manera rápida y eficiente." />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className='bg-[#f6f9fc]'>
        {/* <Header /> */}
        <Invoice/>
        <InvoiceForm />
        <HowUse />
        <CustomInvoice />
        <Carrusel/>

      </main>
    </>
  );
};



export default Home;
