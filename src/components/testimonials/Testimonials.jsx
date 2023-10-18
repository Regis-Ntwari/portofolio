import React from "react";

import { Pagination, Scrollbar} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import "./testimonials.css";
import avatar from "../../assets/avatar-boy.jpg";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Tiana Teta',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eveniet amet explicabo quam eos aperiam error beatae accusamus totam ratione incidunt voluptas deserunt aliquid porro saepe,nesciunt cumque, tempore aut.'
    },
    {
      id: 2,
      name: 'Leo Ngabo',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eveniet amet explicabo quam eos aperiam error beatae accusamus totam ratione incidunt voluptas deserunt aliquid porro saepe,nesciunt cumque, tempore aut.'
    },
    {
      id: 3,
      name: 'Regis Ntwari',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eveniet amet explicabo quam eos aperiam error beatae accusamus totam ratione incidunt voluptas deserunt aliquid porro saepe,nesciunt cumque, tempore aut.'
    }
  ];
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
        modules={[Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar image" />
          </div>
          <h5 className="client__name">{review.name}</h5>
            <small className="client__review">
              {review.review}
            </small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
