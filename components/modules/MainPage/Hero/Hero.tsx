'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCoverflow } from "swiper/modules";

import { useLang } from "@/hooks/useLang";
import HeroSlide from "./HeroSlide";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from "@/styles/main-page/index.module.scss";


import img1 from '@/public/img/black-t.png'
import img2 from '@/public/img/orange-t.png'
import img3 from '@/public/img/gray-t.png'

const Hero = () => {
    const { lang, translations } = useLang();
    const descriptionSlicePosition = lang === 'ua' ? 4 : 2;

    const slides = [
        {
            id: 1,
            title: `${translations[lang].main_page.tShirt} «Petro Schur» ${translations[lang].main_page.orange}`,
            image: img2,
        },
        {
            id: 2,
            title: `${translations[lang].main_page.tShirt} «Petro Schur» ${translations[lang].main_page.black}`,
            image: img1,
        },
        {
            id: 3,
            title: `${translations[lang].main_page.tShirt} «Petro Schur» ${translations[lang].main_page.gray}`,
            image: img3,
        },
    ];

    const handleSlideClick = (e: SwiperType) => e.slideTo(e.clickedIndex);
 
    return (
        <section className={styles.hero}>
            <h1 className="visually-hidden">{translations[lang].main_page.hero_hidden_title}</h1>
            <div className={`container ${styles.hero__container}`}>
                <span className={styles.ad}>{translations[lang].common.ad}</span>
                <Swiper
                    className={styles.hero__slider}
                    effect='coverflow'
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    slidesPerView='auto'
                    initialSlide={2}
                    autoplay
                    loop
                    onClick={handleSlideClick}
                    modules={[EffectCoverflow]}
                    grabCursor
                    centeredSlides
                    >
                    {slides.map((slide) => (
                        <SwiperSlide className={styles.hero__slider__slide} key={slide.id}>
                            <HeroSlide slide={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.hero__subtitle}>
                    <div className={styles.hero__subtitle__rect} />
                    <span>{translations[lang].main_page.hero_description.slice(0, descriptionSlicePosition)}</span>
                    <br/>
                    <span>{translations[lang].main_page.hero_description.slice(descriptionSlicePosition)}</span>
                </div>
                <h2 className={styles.hero__title}>
                    <span className={`${styles.hero__title__subtitle} ${lang === 'ua' ? '' : styles.hero__title__subtitle__lang}`}>
                        [ {translations[lang].main_page.hero_subtitle} ]
                    </span>
                    <span className={styles.hero__title__text}>{translations[lang].main_page.hero_title}</span>
                </h2>
            </div>
        </section>
    );
};

export default Hero;