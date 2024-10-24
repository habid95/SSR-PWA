import Image from 'next/image'
import React from 'react'

export const HowUse = () => {

  return (
    <section className='bg-[#192733] text-white  min-h-40 font-medium flex flex-col justify-center items-center px-6 py-8 md:px-36 md:py-14'>
        <h2 className='md:px-28 text-4xl font-semibold pb-6 md:pb-9 text-left md:text-center'>
            How to Use HubSpot&apos;s Free Online Invoice Generator
        </h2>

        <p className='md:px-28 pb-5 text-lg md:text-1xl  leading-8'>
            Use this free online invoice generator to create your very own professional invoice. Once you&apos;re done, upload the invoice to HubSpot to effectively manage it and distribute it to customers. 
        </p>

        
        <p className='md:px-28 pb-5 w-full text-lg md:text-1xl  leading-8'>
            1. Create your professional invoice by filling out each field in the template above.
        </p>

        
        <p className='md:px-28 pb-5 w-full text-lg md:text-1xl text-left  leading-8'>
            2. Download the PDF or upload your invoice to HubSpot&apos;s revenue tools.
        </p>

        
        <p className='md:px-28 pb-5 text-lg md:text-1xl  leading-8'>
            3. Manage this invoice and any future invoices with the HubSpot invoice integration. You can send it to customers, process payments, and analyze your revenue – all within the CRM.&nbsp;
        </p>

        <p className=' md:px-28 text-lg md:text-1xl leading-8 pb-8'>
            Make full use of HubSpot&apos;s Commerce Hub to streamline your business billing. Unlock other easy-to-use features such as quotes, billing automation, and revenue reporting, and more.&nbsp;
        </p>

        <Image
            src="/Hero3.webp"
            alt="Hero Image"
            width={710} 
            height={343}
        />
        
    </section>
  )
}
