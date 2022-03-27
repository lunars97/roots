import React, { useEffect } from "react";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer";
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="main_map">
                <div className="info-contact">
                    <p style={{ textAlign: "center" }}>
                        Isanov 105/3 Bishkek, 720017
                    </p>
                    <span style={{ fontSize: "20px" }}>+996705700752</span>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.789193395009!2d74.58995091540379!3d42.87729341027241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec98281e85c63%3A0x305e5b2a69cb4fcb!2sMakers%20Studio!5e0!3m2!1sru!2skg!4v1620747597763!5m2!1sru!2skg"
                        style={{ border: "0", width: "640px", height: "450px" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
