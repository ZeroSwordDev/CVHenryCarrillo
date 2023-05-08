import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { BiMap, BiPhone, BiMailSend } from "react-icons/bi";
import {
  GrFacebookOption,
  GrInstagram,
  GrGithub,
  GrLinkedinOption,
} from "react-icons/gr";

const Contact = () => {
  const [resetform, setResetform] = useState(null);
  const [disable, setIsDisable] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsDisable(true)
    emailjs
      .sendForm(
        "service_6lvkt0m",
        "template_zoqmxdt",
        form.current,
        "Rn5tbOqpiIC4kzOq5"
      )
      .then(
        (result) => {
          console.log(result.text)
          setIsDisable(false)
        },
        (error) => {
          console.log(error.text);
        }
      ).finally(setResetform(''));
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contactTitle">
        <p className="contactTitle-2">Contact</p>
        <h1>
          Let’s Discuss Your <strong>Project. </strong>
        </h1>
        <p>
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="container_row">
        <div className="izqContact">
          <div className="callme">
            <div className="icon">
              <BiPhone color="white" size={"30px"} />
            </div>
            <div className="textContact">
              <h4>Call me</h4>
              <p>+56 937102605</p>
            </div>
          </div>
          <div className="emailme">
            <div className="icon">
              <BiMailSend color="white" size={"30px"} />
            </div>
            <div className="textContact">
              <h4>Email</h4>
              <p>MiguelWorking1@gmail.com</p>
            </div>
          </div>
          <div className="address">
            <div className="icon">
              <BiMap color="white" size={"30px"} />
            </div>
            <div className="textContact">
              <h4>Address</h4>
              <p>Santiago, Chile</p>
            </div>
          </div>
        </div>
        <div className="derContact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input_container">
              <div className="name">
                <input
                  type="text"
                  value={resetform}
                  name="user_name"
                  placeholder="Name"
                />
              </div>

              <div className="email">
                <input
                  type="email"
                  value={resetform}
                  name="user_email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="desc">
              <textarea
                id="story"
                value={resetform}
                name="message"
                rows="15"
                cols="110"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" disabled={disable ? true : false} className="absolute">
              Submit Message
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="left">
          <p> @ 2023. All Rights Reserved</p>
        </div>
        <div className="center">
          <p>Designed by Henry Carrillo</p>
        </div>
        <div className="right">
          <div className="iconFooter">
            <a href="https://github.com/ZeroSwordDev" target="_blank">
              <GrGithub color="white" size={"24px"} />
            </a>
          </div>
          <div className="iconFooter">
            <a
              href="https://www.linkedin.com/in/henry-carrillo-b89838212/"
              target="_blank"
            >
              <GrLinkedinOption color="white" size={"24px"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
