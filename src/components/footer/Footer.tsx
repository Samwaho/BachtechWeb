import { Reveal } from "../../Reveal";
import "./footer.css";
import { Link, links } from "../../data";
import { BsWhatsapp } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
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
    <section id="footer">
      <div id="footer-items" className="">
        <div className="socials">
          {socials.map(({ id, icon, href }) => {
            return (
              <Reveal key={id}>
                <a href={href} target="_blank">
                  <i className="box-shadow">{icon}</i>
                </a>
              </Reveal>
            );
          })}
        </div>
        <div className="footer-menu">
          <ul>
            {links.map((link: Link) => {
              return (
                <Reveal key={link.id}>
                  <li>
                    <a href={link.href}>{link.text}</a>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
      <Reveal>
        <p className="text-center mx-3">
          Copyright &copy; BachtechSolutions.{year}. All rights reserved
        </p>
      </Reveal>
    </section>
  );
};

export default Footer;
