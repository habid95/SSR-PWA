import Image from 'next/image'
import React from 'react'

export const Carrusel = () => {
  return (
    <section className='bg-white'>
        
        <div class="grid md:px-20 lg:px-28 pt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-28">
            <div class=" p-4">
                <Image
                    src="/invoice.webp"
                    alt="Hero Image"
                    width={150} 
                    height={150}
                />
                <div>
                    <h3 className='font-bold py-3 text-xl'>Invoices</h3>
                    <span className='text-[#5c6f80] text-lg'>
                        Create, send, and monitor professional invoices within the HubSpot invoice integration. Consolidate invoicing, payments, and quoting in one place. 
                    </span>
                </div>
            </div>
            <div class=" p-4">
                <Image
                    src="/payment.webp"
                    alt="Hero Image"
                    width={150} 
                    height={150}
                />
                <div>
                    <h3 className='font-bold py-3 text-xl'>Payments</h3>
                    <span className='text-[#5c6f80] text-lg'>
                        Expedite payments by easily generating and distributing payment links. Share links across customer touchpoints like emails, websites, forms, and meetings. 
                    </span>
                </div>

            </div>
            <div class=" p-4">
                <Image
                    src="/Quotes.webp"
                    alt="Hero Image"
                    width={150} 
                    height={150}
                />
                <div>
                    <h3 className='font-bold py-3 text-xl'>Quotes</h3>
                    <span className='text-[#5c6f80] text-lg'>
                        Generate branded sales quotes, collect payments and electronic signatures within quotes, and automatically populate quotes with information from HubSpot’s Smart CRM. 
                    </span>
                </div>
            </div>
            <div class=" p-4">
                <Image
                    src="/report.webp"
                    alt="Hero Image"
                    width={150} 
                    height={150}
                />
                <div>
                    <h3 className='font-bold py-3 text-xl'>Revenue Reporting</h3>
                    <span className='text-[#5c6f80] text-lg'>
                        Analyze total gross revenue, top products, and top-performing sales reps with comprehensive revenue reporting. Customize your reports for additional insights. 
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}
