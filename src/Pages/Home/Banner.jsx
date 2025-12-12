import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/banner/banner1.png'
import image2 from '../../assets/banner/banner2.png'
import image3 from '../../assets/banner/banner3.png'

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay:2500,
        }}
        loop={true}
        >
            <SwiperSlide>
                <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;