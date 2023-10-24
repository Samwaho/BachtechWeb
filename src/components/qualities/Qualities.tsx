import "./qualities.css";
import qualitiesImg from "../../assets/Questions (1).gif";
import Img1 from "../../assets/Fast loading-amico.png";
import Img2 from "../../assets/Secure data-bro.png";
import Img3 from "../../assets/Service 24_7-pana.png";
import Img4 from "../../assets/Pricing plans-rafiki.png";
import { Reveal } from "../../Reveal";
const Qualities = () => {
  const quality = [
    {
      id: 1,
      img: Img1,
      tittle: "Fast",
      text: "Surf the internet with ultra fast speeds with us",
    },
    {
      id: 2,
      img: Img2,
      tittle: "Secure",
      text: "Experience digital security at its finest with us.",
    },
    {
      id: 3,
      img: Img3,
      tittle: "Quick Support",
      text: "Receive swift and efficient customer support with us.",
    },
    {
      id: 4,
      img: Img4,
      tittle: "Affordable",
      text: "Discover budget-friendly options with us.",
    },
  ];
  return (
    <section id="qualities" className="container">
      <Reveal>
        <div className="blur qualities-blur"></div>
      </Reveal>
      <Reveal>
        <h3 className="text-center">
          Why Choose Us <hr />
        </h3>
      </Reveal>
      <div className="row mt-3">
        <div className="col-lg-5 col-sm-12">
          <Reveal>
            <img className="main-img" src={qualitiesImg} alt="image" />
          </Reveal>
        </div>
        <div className="col-lg-6 col-sm-12 mt-lg-3 ms-lg-5">
          <div id="qualities-cont">
            {quality.map(({ id, img, tittle, text }) => {
              return (
                <Reveal key={id}>
                  <div className="quality">
                    <img src={img} alt="image" />
                    <div className="quality-text">
                      <h5>{tittle}</h5>
                      <p>{text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
