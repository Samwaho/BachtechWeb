import "./services.css";
import { BsBuildings } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { BsRouter } from "react-icons/bs";
import { BiCctv } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { Reveal } from "../../Reveal";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <BsBuildings />,
      tittle: "Corporate Internet",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
    {
      id: 2,
      icon: <BsHouse />,
      tittle: "Home Internet",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
    {
      id: 3,
      icon: <BsRouter />,
      tittle: "Wifi Hotspot",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
    {
      id: 4,
      icon: <BiCctv />,
      tittle: "Video Surveillance",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
    {
      id: 5,
      icon: <BsShieldLock />,
      tittle: "Digital Security",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
    {
      id: 6,
      icon: <BsBuildings />,
      tittle: "Corporate Internet",
      text: "We provide the best internet services for businesses and corporate institutions. Our internet is fast, reliable, and secure.",
    },
  ];
  return (
    <section id="services" className="container">
      <Reveal>
        <div className="blur services-blur"></div>
      </Reveal>
      <Reveal>
        <h3 className="text-center">
          Our Services <hr />
        </h3>
      </Reveal>
      <div className="services mt-3">
        {services.map(({ id, icon, tittle, text }) => {
          return (
            <Reveal key={id}>
              <div className="service mt-3 box-shadow">
                <i>{icon}</i>
                <h4 className="mt-3">{tittle}</h4>
                <p className="mt-3">{text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
