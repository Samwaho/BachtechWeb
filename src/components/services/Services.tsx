import "./services.css";
import { BsBuildings } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { BsRouter } from "react-icons/bs";
import { BiCctv } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { Reveal } from "../../Reveal";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <BsBuildings />,
      tittle: "Corporate Internet",
      text: "We provide cutting-edge corporate internet provision services, tailored to meet the demands of businesses and institutions. Our corporate internet is fast, reliable, and secure, ensuring uninterrupted connectivity for your organization's success.",
    },
    {
      id: 2,
      icon: <BsHouse />,
      tittle: "Home Internet",
      text: "We offer premium home internet provision services tailored to your family's online needs. Our home internet is fast, reliable, and secure, providing a seamless online experience for your household.",
    },
    {
      id: 3,
      icon: <BsRouter />,
      tittle: "Wifi Hotspot",
      text: "We offer exceptional WiFi hotspot services tailored to meet your on-the-go connectivity demands. Our hotspots provide fast, dependable, and secure internet access, keeping you connected wherever you are.",
    },
    {
      id: 4,
      icon: <BiCctv />,
      tittle: "Video Surveillance",
      text: "We provide state-of-the-art video surveillance services to enhance your security and monitoring needs. Our surveillance solutions are advanced, dependable, and secure, offering unparalleled video coverage for your peace of mind.",
    },
    {
      id: 5,
      icon: <BsShieldLock />,
      tittle: "Security Automation",
      text: "We specialize in cutting-edge security automation solutions, designed to safeguard your assets and peace of mind. Our security systems are advanced, reliable, and secure, ensuring comprehensive protection for your home or business.",
    },
    {
      id: 6,
      icon: <BiSolidNetworkChart />,
      tittle: "Network Management",
      text: "We excel in network management solutions, designed to optimize your digital infrastructure. Our network management services are efficient, reliable, and secure, ensuring seamless connectivity and streamlined operations for your organization.",
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
