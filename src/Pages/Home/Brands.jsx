import React from 'react';
import Marquee from 'react-fast-marquee';
import brands from '../../assets/brands/brands'


const Brands = () => {
    return (
        <div className='space-y-8'>
            <div>
                <h1 className='text-[28px] font-extrabold text-secondary text-center'>We've helped thousands of sales teams</h1>
            </div>
            <div className='flex justify-center items-center'>
                <Marquee
                    speed={100}
                    pauseOnHover={true}
                >
                    {
                        brands.map(brand => <div className='p-6 ml-6 rounded-2xl'>
                            <img height={200} width={150} src={brand} alt="" />
                        </div>)
                    }
                </Marquee>
            </div>
        </div>
    );
    


};

export default Brands;