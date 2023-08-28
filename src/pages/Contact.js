import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import {motion} from "framer-motion"

const Contact = () => {

  const pageTransition = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  };

  return (
    <main>
      <Mouse />
      <motion.div className="contact" initial="initial" animate="visible" exit="exit" variants={pageTransition} transition={{duration: 2}}>
        <Navigation />
        <Logo />
        
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adress</h4>
              <p>12 rue Lapace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard
                text="0642844284"
                className="hover"
              >
                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => alert('téléphone copié')}>06 42 84 42 84</p>
              </CopyToClipboard>
            </div>
          </div>

                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard
                text="fsagency@gmail.com"
                className="hover"
              >
                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => alert('mail copié')}>fsagency@gmail.com</p>
              </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                <div className="credits">
                    <p>From Nicolas - 2023</p>
                </div>
        </div>
        <Buttons left={'/projet-4'} />
      </motion.div>
    </main>
  );
};

export default Contact;
