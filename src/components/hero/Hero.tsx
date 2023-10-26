import "./Hero.css";
import heroImg from "../../assets/Internet Day (3).gif";
import { Reveal } from "../../Reveal";
const Hero = () => {
  return (
    <section id="hero" className="mt-lg-5 mt-sm-2 box-shadow">
      <Reveal>
        <div className="blur hero-blur"></div>
      </Reveal>
      <div className="container hero-container">
        <div className="hero-text">
          <Reveal>
            <h4 className="mt-lg-3">Strating at Ksh.1500/month</h4>
          </Reveal>
          <Reveal>
            <h2 className="text-gradient mt-lg-4 mt-sm-2">
              Ultra-Fast Internet With 24/7 Quick Support
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4">
              We provide the fastest and reliable internet service with vary
              much affordable prices.
            </p>
          </Reveal>
          <div className="hero-btns mt-lg-4 mt-sm-2 mb-3">
            <Reveal>
              <a href="#pricing">
                <button className="btn">See our plans</button>
              </a>
            </Reveal>
            <Reveal>
              <a href="https://fast.com/" target="_blank">
                <button className="btn-2">Test Speed</button>
              </a>
            </Reveal>
          </div>
        </div>
        <div className="">
          <Reveal>
            <img src={heroImg} alt="image" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
