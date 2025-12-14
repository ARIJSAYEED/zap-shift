import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const AboutUs = () => {
    return (
        <div className='py-20 px-28 bg-white rounded-2xl space-y-24'>
            <div>
                <h1 className='text-[56px] font-extrabold text-[#03373D]'>About Us</h1>
                <p className='text-[16px] font-normal'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* tabs  */}
            <div>
                <Tabs className='space-y-12'>
                    <TabList className='flex gap-12 *:text-3xl'>
                        <Tab>Story</Tab>
                        <Tab>Mission</Tab>
                        <Tab>Success</Tab>
                        <Tab>Team & Others</Tab>
                    </TabList>

                    <TabPanel>
                        <p>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Our mission is to simplify and accelerate everyday deliveries by providing a reliable, transparent, and user-centric platform. We aim to connect customers, delivery partners, and businesses through efficient logistics, real-time tracking, and secure transactions. By leveraging modern technology and data-driven operations, we strive to make every delivery timely, affordable, and hassle-free.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Our success is measured by consistent on-time deliveries, customer satisfaction, and operational excellence. Through optimized routing, performance monitoring, and continuous improvement, we ensure high delivery accuracy and reduced turnaround times. As our network grows, we remain focused on scalability, service quality, and long-term trust with our users and partners.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Our team is composed of dedicated engineers, operations specialists, and support professionals working collaboratively to maintain system reliability and service quality. We value strong partnerships with delivery personnel, merchants, and third-party service providers who contribute to seamless operations. Together, we foster a culture of accountability, innovation, and mutual growth to deliver exceptional outcomes for all stakeholders.
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AboutUs;