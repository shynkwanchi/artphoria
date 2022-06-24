import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MemberItem from "../items/member-item";

const MemberCarousel = () => {
    return (
        <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                }
            }}
            className="member-carousel">
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
            <SwiperSlide><MemberItem /></SwiperSlide>
        </Swiper>
    );
};

export default MemberCarousel