import Image from 'next/image'
import React from 'react'

export const CustomInvoice = () => {
  return (
    <div className='pb-7 pt-8 flex flex-col items-center'>
        <section className='flex flex-col md:flex-row px-10 items-center'>

            <div className="p-4 m-2 flex-grow md:w-1/2 flex justify-center md:justify-end">
                <Image
                    src="/image.png"
                    alt="Hero Image"
                    width={380} 
                    height={399}
                />
            </div>

            <div className="p-4 m-2  flex-grow md:w-1/2">
                <h4 className='text-2xl pb-4'>
                    A custom invoice for your business
                </h4>

                <p className='pb-7 text-lg text-[#5c6f80]'>
                Customize your invoice by adding your business details, logo, and changing the colors to fit your business branding. Stand out from the competition with tailored invoices that reflect your professional identity. 
                </p>

                <p className='text-lg text-[#5c6f80]'>
                Whether you're a small business owner or an enterprise, Invoice Generator allows you to effortlessly generate professional invoices to impress your clients. 
                <span>Focus on what you do best and leave the invoicing design to us.</span>
                </p>

            </div>

        </section>

        <button
            className="bg-[#ff5c35] font-semibold m-5 px-2 py-3 text-white rounded-md"
        >
            Create my invoice
        </button>
        <div className='bg-[#192733] w-full py-7'>
            <h3 className='text-3xl font-semibold text-center text-white'>
                Manage your invoice with Commerce Hub
            </h3>
        </div>

        <span className='pt-7 text-lg'>
            Explore additional features for managing your invoice in HubSpot:
        </span>
    </div>
  )
}
