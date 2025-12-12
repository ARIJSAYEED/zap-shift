import React from 'react';
import serviceimg from '../../assets/service.png'
const Ourservices = () => {
    return (
        <div className='bg-secondary p-[100px] rounded-4xl space-y-8'>
            <div className='text-center space-y-6'>
                <h1 className='text-[40px] font-extrabold text-white capitalize'>our services</h1>
                <p className='text-[16px] font-thin text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br />business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {/* cards  */}
                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Express  & Standard Delivery</h1>
                    <p className='text-[16px]'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                </div>


                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Nationwide Delivery</h1>
                    <p className='text-[16px]'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
                </div>


                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Fulfillment Solution</h1>
                    <p className='text-[16px]'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>


                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Cash on Home Delivery</h1>
                    <p className='text-[16px]'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>


                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Corporate Service / Contract In Logistics</h1>
                    <p className='text-[16px]'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-6 p-8 bg-white hover:bg-primary rounded-3xl text-center'>
                    <div className='p-6 rounded-full bg-linear-to-b from-white'>
                        <img src={serviceimg} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-secondary'>Parcel Return</h1>
                    <p className='text-[16px]'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default Ourservices;