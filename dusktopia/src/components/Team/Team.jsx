import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Info } from '../App/App';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination,} from 'swiper/modules';

function Team() {
    const [active, setActive] = useState(false);
    let data = useContext(Info);
    return (
        <section id="team" className="team">
            <div className="content-wrapper">
                <h2 className="team__title">MEET OUR TEAM</h2>
                <div className="team__cards">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {data.map((item) => {
                            return (
                                <SwiperSlide key={item.name + 'key'}>
                                    <div onClick={() => {setActive(!active);}} className={active ? 'team__card team__card-active' : 'team__card'}>
                                        <img
                                            src={item.background}
                                            alt="icon"
                                            className="team__card-img"
                                        />
                                        <p className="team__card-suptitle">{item.supname}</p>
                                        <p className="team__card-title">{item.name}</p>
                                        {active ? (
                                            <p className="team__card-text">{item.textcontent}</p>) : ('')}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Team;

// <Swiper spaceBetween={0} slidesPerView={4} grabCursor={true}>
//                         {data.map((item) => {
//                             return (
//                                 <SwiperSlide key={item.name+'key'}>
//                                     <div onClick={() => {setActive(!active);}}
//                                         className={active ? 'team__card team__card-active' : 'team__card'}>
//                                         <img
//                                             src={item.background}
//                                             alt="icon"
//                                             className="team__card-img"
//                                         />
//                                         <p className="team__card-suptitle">
//                                             {item.supname}
//                                         </p>
//                                         <p className="team__card-title">{item.name}</p>
//                                         {active ? (<p className="team__card-text">{item.textcontent}</p>) : ('')}
//                                     </div>
//                                 </SwiperSlide>
//                             );
//                         })}
//                     </Swiper>
