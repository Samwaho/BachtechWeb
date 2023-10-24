import React, { useState } from "react";
import "./pricing.css";
import { BiSolidFlagAlt } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Reveal } from "../../Reveal";

const Pricing = () => {
  const packages_home = [
    {
      id: 1,
      icon: <BiSolidFlagAlt />,
      tittle: "Starter",
      price: "1500",
      speed: "3",
      devices: "2",
    },
    {
      id: 2,
      icon: <BsBookmarkStarFill />,
      tittle: "Basic",
      price: "2000",
      speed: "5",
      devices: "7",
    },
    {
      id: 3,
      icon: <BsFillCloudArrowDownFill />,
      tittle: "Professional",
      price: "2500",
      speed: "7",
      devices: "10",
    },
    {
      id: 4,
      icon: <BsFillRocketTakeoffFill />,
      tittle: "Streaming",
      price: "3000",
      speed: "10",
      devices: "Unlimitted",
    },
  ];
  const packages_corporate = [
    {
      id: 1,
      icon: <BiSolidFlagAlt />,
      tittle: "Starter",
      price: "2000",
      speed: "3",
      devices: "2",
    },
    {
      id: 2,
      icon: <BsBookmarkStarFill />,
      tittle: "Basic",
      price: "2500",
      speed: "5",
      devices: "7",
    },
    {
      id: 3,
      icon: <BsFillCloudArrowDownFill />,
      tittle: "Professional",
      price: "3000",
      speed: "7",
      devices: "10",
    },
    {
      id: 4,
      icon: <BsFillRocketTakeoffFill />,
      tittle: "Streaming",
      price: "4000",
      speed: "10",
      devices: "Unlimitted",
    },
  ];

  const [activeDiv, setActiveDiv] = useState("home");

  const toggleDiv = (div: React.SetStateAction<string>) => {
    setActiveDiv(div);
  };

  return (
    <section id="pricing" className="container">
      <div className="blur pricing-blur"></div>
      <Reveal>
        <h3 className="text-center mt-5">
          Pricing Plans <hr />
        </h3>
      </Reveal>
      <div className="category mt-4">
        <Reveal>
          <button
            className={activeDiv === "home" ? "btn" : "btn-2"}
            onClick={() => toggleDiv("home")}
          >
            Home
          </button>
        </Reveal>
        <Reveal>
          <button
            className={activeDiv === "corporate" ? "btn" : "btn-2"}
            onClick={() => toggleDiv("corporate")}
          >
            Corporate
          </button>
        </Reveal>
      </div>
      <div className="content mt-4">
        {activeDiv === "home" && (
          <div className="packages">
            {packages_home.map(
              ({ id, icon, tittle, speed, devices, price }) => {
                return (
                  <Reveal key={id}>
                    <div className="package box-shadow">
                      <i>{icon}</i>
                      <h5>{tittle}</h5>
                      <p className="mt-4">
                        <span>Ksh.{price}</span>/mo
                      </p>
                      <p>{speed} mbps</p>
                      <p>{devices} Devices</p>
                      <button className="btn btn-3">Get Started</button>
                    </div>
                  </Reveal>
                );
              }
            )}
          </div>
        )}
        {activeDiv === "corporate" && (
          <div className="packages">
            {packages_corporate.map(
              ({ id, icon, tittle, speed, devices, price }) => {
                return (
                  <Reveal key={id}>
                    <div className="package box-shadow">
                      <i>{icon}</i>
                      <h5>{tittle}</h5>
                      <p className="mt-4">
                        <span>Ksh.{price}</span>/mo
                      </p>
                      <p>{speed} mbps</p>
                      <p>{devices} Devices</p>
                      <button className="btn-2 btn-3">Get Started</button>
                    </div>
                  </Reveal>
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
