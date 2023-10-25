import "./about.css";
import aboutImg from "../../assets/Company.gif";
import { Reveal } from "../../Reveal";
const About = () => {
  return (
    <section id="about" className="container">
      <div className="blur about-blur"></div>
      <Reveal>
        <h3 className="text-center">
          About Us <hr />
        </h3>
      </Reveal>
      <div className="row mt-4">
        <div className="col-lg-6 col-sm-12">
          <Reveal>
            <img src={aboutImg} alt="image" />
          </Reveal>
        </div>
        <div className="about-txt col-lg-6 col-sm-12 mt-lg-5 ps-4">
          <Reveal>
            <h3 className="text-gradient mt-3">
              BachTech Solutions. <br /> Advancing Through Technology.
            </h3>
          </Reveal>
          <Reveal>
            <p className="mt-4">
              Bachtech Solutions is a leading technology company that
              specializes in delivering cutting-edge solutions for businesses
              across various industries. With a team of passionate experts, we
              combine creativity and technical expertise to develop solutions
              that address the unique challenges faced by our clients.
            </p>
          </Reveal>
          <Reveal>
            <a href="#contacts">
              <button className="btn mt-lg-4 mt-sm-3">Contact Us</button>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
