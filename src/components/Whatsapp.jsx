import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/whatsapp.css";
import { IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";

const Whatsapp = () => {
  const [modall, setModall] = useState(false);

  const toggleModall = () => {
    setModall(!modall);
  };
  return (
    <div>
      <div className="modall">
        <button onClick={toggleModall} className="btn-modal">
          <FaWhatsapp />
        </button>

        {modall && (
          <div className="modalle">
            <div onClick={toggleModall} className="overlay"></div>
            <div className="modall-content">
              <p>
                <IoIosCall />{" "}
                <a href="https://wa.me/message/4OAX5LZZIWQEH1" target="_blanck">
                  +2348107171280
                </a>
              </p>
              <hr className="line" />
              <p>
                <GoMail /> <a href="/contact">qrestcompany@gmail.com</a>
              </p>
              {/* <h2 onClick={toggleModall} className="close-modall">
                Get in touch with us.
              </h2> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whatsapp;
