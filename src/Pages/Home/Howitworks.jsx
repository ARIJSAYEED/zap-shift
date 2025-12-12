import React from 'react';
import bookingicon from '../../assets/bookingicon.png'

const Howitworks = () => {
    return (
        <div className='space-y-8 mx-[110px]'>
            <div>
                <h1 className='text-[32px] font-extrabold text-secondary'>How it Works</h1>
            </div>
            {/* cards  */}
            <div className='grid grid-cols-3 gap-6'>
                <div className='p-8 space-y-6 rounded-3xl bg-white hover:bg-primary'>
                    <img src={bookingicon} alt="" />
                    <h1 className='text-[20px] font-bold text-secondary'>booking pick & drop</h1>
                    <p className='text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-8 space-y-6 rounded-3xl bg-white hover:bg-primary'>
                    <img src={bookingicon} alt="" />
                    <h1 className='text-[20px] font-bold text-secondary'>booking pick & drop</h1>
                    <p className='text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-8 space-y-6 rounded-3xl bg-white hover:bg-primary'>
                    <img src={bookingicon} alt="" />
                    <h1 className='text-[20px] font-bold text-secondary'>booking pick & drop</h1>
                    <p className='text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Howitworks;