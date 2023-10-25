import "./testimonials.css";
import IMG from "../../assets/bachtechlogo.png";
import IMG2 from "../../assets/OPTIVUM WEB DEV LOGO..png";
import IMG3 from "../../assets/portrait-african-girl-with-braids.jpg";
import IMG4 from "../../assets/casual-young-african-man-smiling-isolated-white.jpg";
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
      rating: "4.7",
    },
    {
      id: 2,
      avatar: IMG2,
      name: "Optivum Web Developers",
      review:
        "We've been a loyal customer of this company for years, and they never disappoint. The internet is reliable, and the CCTV installations are flawless. Highly recommended!",
      rating: "4.5",
    },
    {
      id: 3,
      avatar: IMG3,
      name: "Susan Kerubo",
      review:
        "A fantastic experience with this company. The internet is blazing fast, and the CCTV system keeps my home secure. Their professionalism shines through.",
      rating: "4.6",
    },
    {
      id: 4,
      avatar: IMG4,
      name: "Daniel Mwangi",
      review:
        "A five-star experience all around. The digital locks are a revelation, and the internet is super fast. The support team is fantastic too!",
      rating: "4.8",
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
            delay: 3500,
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
              <Reveal key={id}>
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
