import "./testimonials.css";
import IMG from "../../assets/PCEA.png";
import IMG2 from "../../assets/OPTIVUM WEB DEV LOGO..png";
import IMG3 from "../../assets/portrait-african-girl-with-braids.jpg";
import IMG4 from "../../assets/casual-young-african-man-smiling-isolated-white.jpg";
import IMG5 from "../../assets/N SQUARED.png";
import IMG6 from "../../assets/INSTANBUL.png";
import IMG7 from "../../assets/GYJAVILLE.png";
import IMG8 from "../../assets/ENEZA  HOUSING.png";
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
      name: "PCEA-Juja",
      review:
        "We recently had the pleasure of working with Bachtech Solutions for both internet provision and CCTV installation, and we couldn't be more satisfied with the results.",
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
        "I can't praise this company enough. The internet is top-tier, and their automated security are impeccable. I feel safer and more connected than ever.",
      rating: "4.8",
    },
    {
      id: 5,
      avatar: IMG5,
      name: "N Squared",
      review:
        "A five-star experience all around. The digital locks are a revelation, and the internet is super fast. The support team is fantastic too!",
      rating: "4.2",
    },
    {
      id: 6,
      avatar: IMG6,
      name: "Instanbul",
      review:
        "I'm thrilled with the services offered by this company. The internet is superb, and the CCTV installations are top-notch. Truly a class act!",
      rating: "4.6",
    },
    {
      id: 7,
      avatar: IMG7,
      name: "Gyjaville Homes",
      review:
        "We've never had such a seamless experience with an internet provider. The CCTV system is an added bonus. This company truly understands security and connectivity.",
      rating: "4.8",
    },
    {
      id: 8,
      avatar: IMG8,
      name: "Eneza Housing",
      review:
        "Outstanding! The digital locks are a game-changer. They've made access control a breeze, and the internet is speedy. A winning combination.",
      rating: "4.3",
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
