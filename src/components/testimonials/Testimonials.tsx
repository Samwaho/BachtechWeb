import "./testimonials.css";
import IMG from "../../assets/bachtechlogo.png";
import { FaThumbsUp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Reveal } from "../../Reveal";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: IMG,
      name: "BachTech",
      review:
        "I recently had the pleasure of working with Bachtech Solutions for both internet provision and CCTV installation, and I couldn't be more satisfied with the results.",
      rating: "4.5",
    },
    {
      id: 2,
      avatar: IMG,
      name: "BachTech",
      review:
        "I recently had the pleasure of working with Bachtech Solutions for both internet provision and CCTV installation, and I couldn't be more satisfied with the results.",
      rating: "4.5",
    },
    {
      id: 3,
      avatar: IMG,
      name: "BachTech",
      review:
        "I recently had the pleasure of working with Bachtech Solutions for both internet provision and CCTV installation, and I couldn't be more satisfied with the results.",
      rating: "4.5",
    },
  ];
  return (
    <>
      <section id="testimonials">
        <div className="blur testimonials-blur"></div>
        <Reveal>
          <h3 className="text-center">
            Reviews <hr />
          </h3>
        </Reveal>

        <Swiper
          className="container testimonials__container mySwiper mt-5"
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {data.map(({ id, avatar, name, review, rating }) => {
            return (
              <Reveal>
                <SwiperSlide key={id} className="testimonial box-shadow">
                  <div className="client__avatar">
                    <Reveal>
                      <img src={avatar} alt="image" />
                    </Reveal>
                  </div>
                  <Reveal>
                    <h5 className="client__name">{name}</h5>
                  </Reveal>
                  <Reveal>
                    <p className="client__review">{review}</p>
                  </Reveal>
                  <div className="rating">
                    <Reveal>
                      <i>
                        <FaThumbsUp />
                      </i>
                    </Reveal>
                    <Reveal>
                      <p className="mt-3 box-shadow">{rating}</p>
                    </Reveal>
                  </div>
                </SwiperSlide>
              </Reveal>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
