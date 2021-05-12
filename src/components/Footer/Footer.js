import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import youtube from "../image/youtube.png";
import twitter from "../image/twitter.png";
import insta from "../image/insta.png";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to receive our latest news
                </p>
                <p className="footer-subscription-text">
                    Stay in Touch with us
                    <i className="fa fa-leaf" aria-hidden="true" />
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            className="footer-input"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                        <button className="btn">Follow us</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <ul>
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            <li>Contact</li>
                        </Link>

                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li>Support</li>
                        </Link>

                        <Link
                            to="/community"
                            style={{ textDecoration: "none" }}
                        >
                            <li>Community</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link to="/" target="_blank" aria-label="Youtube">
                            <img
                                src={youtube}
                                className="youtube"
                                alt="youtube-icon"
                            />
                        </Link>
                        <Link to="/" target="_blank">
                            <img src={twitter} alt="twitter-icon" />
                        </Link>
                        <Link to="/" target="_blank">
                            <img src={insta} alt="instagram-icon" />
                        </Link>
                    </div>
                </div>
                <small className="website-rights">
                    Ro
                    <i className="fa fa-leaf" aria-hidden="true" />
                    ots © 2021
                </small>
            </section>
        </div>
    );
}

export default Footer;
