import { Reveal } from "../../Reveal";
import "./footer.css";
import { Link, links } from "../../data";
import { BsWhatsapp } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../assets/bachtechlogo.png";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  const socials = [
    {
      id: 1,
      icon: <BsFillTelephoneFill />,
      href: "tel:+254752449990",
    },
    {
      id: 2,
      icon: <BsWhatsapp />,
      href: "https://wa.me/+254752449990",
    },
    {
      id: 3,
      icon: <MdEmail />,
      href: "mailto:bachemsolutions@gmail.com",
    },
    {
      id: 4,
      icon: <BsInstagram />,
      href: "https://instagram.com/bachtechsolofficial?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      id: 5,
      icon: <BsTiktok />,
      href: "http://tiktok.com/@bachtech_solutions",
    },
    {
      id: 6,
      icon: <BsYoutube />,
      href: "https://youtube.com/@BACHEMSOLUTIONS?si=h8xIcXQMZH4JBHOE",
    },
  ];
  return (
    <section id="Footer">
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <Reveal>
                  <div className="widget subscribe no-box">
                    <h5 className="widget-title">
                      Bachtech Solutions<span></span>
                    </h5>
                    <img src={logo} alt="image" />
                    <p className="mt-2">Headquaters: Highpoint, Juja </p>
                  </div>
                </Reveal>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <Reveal>
                  <div className="widget no-box">
                    <h5 className="widget-title">
                      Quick Links<span></span>
                    </h5>
                    <ul className="thumbnail-widget">
                      {links.map((links: Link) => {
                        return (
                          <Reveal key={links.id}>
                            <li key={links.id}>
                              <div className="thumb-content">
                                <a href={links.href}>{links.text}</a>
                              </div>
                            </li>
                          </Reveal>
                        );
                      })}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <Reveal>
                  <div className="widget no-box">
                    <h5 className="widget-title">
                      Get Connected<span></span>
                    </h5>
                    <p>Contact us to get any of our services.</p>
                    <a className="btn" href="#contacts">
                      Contact Us
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <Reveal>
                  <div className="widget no-box">
                    <h5 className="widget-title">
                      Social Links<span></span>
                    </h5>
                    <p>
                      <a href="bachemsolutions@gmail.com" title="Bachtexh">
                        bachemsolutions@gmail.com
                      </a>
                    </p>
                    <ul className="social-footer2">
                      {socials.map(({ id, icon, href }) => {
                        return (
                          <li key={id}>
                            <a href={href} target="_blank">
                              {icon}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright pb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="mt-2">
                  Copyright © Bachtech Solutions {year}. All rights reserved.
                </p>
                <p className="mt-2 powered">
                  Made By :{" "}
                  <a
                    className="powered-a"
                    href="https://optivumwebdevelopers.co.ke"
                    target="_blank"
                  >
                    optivumwebdevelopers.co.ke
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
