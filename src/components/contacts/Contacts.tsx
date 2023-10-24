import "./contacts.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/Contact us.gif";
import { Reveal } from "../../Reveal";
const Contacts = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    // Specify the type
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_2wkqfbk",
          "template_rxtg1vl",
          form.current,
          "KJqf_U2PXoPbaSL7N"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message Sent Successfully");
          },
          (error) => {
            console.log(error.text);
            alert("Error. Message not sent");
          }
        );

      form.current.reset();
    }
  };

  return (
    <>
      <section id="contacts">
        <div className="blur contacts-blur"></div>
        <Reveal>
          <h3 className="mb-5">
            Contact Us <hr />
          </h3>
        </Reveal>
        <div className="container contact__container">
          <div className="contact__options">
            <Reveal>
              <img src={contactImg} alt="image" />
            </Reveal>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <Reveal>
              <input
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                required
              />
            </Reveal>

            <Reveal>
              <input
                type="email"
                name="email_id"
                placeholder="Your Email"
                required
              />
            </Reveal>

            <Reveal>
              <input
                type="text"
                name="phone_number"
                placeholder="Your Phone Number"
                required
              />
            </Reveal>

            <Reveal>
              <textarea
                name="message"
                placeholder="Write a message"
                required
              ></textarea>
            </Reveal>

            <Reveal>
              <button type="submit" className="btn">
                Send Message
              </button>
            </Reveal>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacts;
