import "./Hero.css";
import heroImg from "../../assets/Internet Day (3).gif";
import { Reveal } from "../../Reveal";
import { useEffect, useState } from "react";

const Hero = () => {
  useEffect(() => {
    const calculateSpeed = () => {
      const imgLink =
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tokyo_Sky_Tree_2012_%E2%85%A5.JPG";
      const downloadSize = 10373740;
      let timeStart: number, timeEnd, totalSpeed: string;

      document.querySelector(".loader-content")?.classList.add("hide");
      document.querySelector(".loader")?.classList.remove("hide");
      timeStart = new Date().getTime();
      const cacheImg = `?nn=${timeStart}`;
      const downloadSrc = new Image();

      downloadSrc.src = imgLink + cacheImg;
      downloadSrc.onload = () => {
        timeEnd = new Date().getTime();
        const timeDuration = (timeEnd - timeStart) / 1000;
        const loadedBytes = downloadSize * 8;
        totalSpeed = (loadedBytes / timeDuration / 1024 / 1024).toFixed(2);

        let i = 0;
        const animate = () => {
          if (i < parseFloat(totalSpeed)) {
            document.querySelector(".content")!.innerHTML =
              i.toFixed(2) + " <small>Mbps</small>";
            setTimeout(animate, 20);
            i += 1.02;
          } else {
            document.querySelector(".content")!.innerHTML =
              totalSpeed + " <small>Mbps</small>";
          }
        };
        animate();

        document.querySelector(".loader-content")?.classList.remove("hide");
        document.querySelector(".loader-content")?.classList.add("result");
        document.querySelector(".loader")?.classList.add("hide");
        document.querySelector(".content")?.classList.remove("hide");
        const button = document.querySelector(".check") as HTMLButtonElement;
        button.innerText = "CHECK AGAIN";
      };
    };

    const button = document.querySelector(".check");

    if (button) {
      button.addEventListener("click", calculateSpeed);
    }
  }, []);
  const speedTestDiv = document.querySelector(".speed-test");
  const [isBackBlurVisible, setIsBackBlurVisible] = useState(false);
  const hideSpeedTest = () => {
    if (speedTestDiv) {
      speedTestDiv.classList.add("hide");
      setIsBackBlurVisible(false);
    }
  };
  const showSpeedTest = () => {
    const speedTestDiv = document.querySelector(".speed-test");
    if (speedTestDiv) {
      speedTestDiv.classList.remove("hide");
      setIsBackBlurVisible(true);
    }
  };

  return (
    <section id="hero" className="mt-lg-5 mt-sm-2 box-shadow">
      <Reveal>
        <div className="blur hero-blur"></div>
      </Reveal>
      <div className="speed-test hide">
        <div className="speed-container box-shadow">
          <div className="loader-widget">
            <h3>Check Your Internet Speed</h3>
            <span className="loader hide"></span>
            <div className="loader-content">
              <div className="content hide">
                24 <small>Mbps</small>
              </div>
              <button className="check">CHECK</button>
            </div>
          </div>
          <button className="btn w-50 mt-3" onClick={hideSpeedTest}>
            Close
          </button>
        </div>
      </div>
      <div
        className={`container hero-container ${
          isBackBlurVisible ? "back-blur" : ""
        }`}
      >
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
              <button className="btn-2" onClick={showSpeedTest}>
                Test Speed
              </button>
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
