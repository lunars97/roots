import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../PaymentCard/PaymentCard.css";

const PaymentCard = () => {
    const history = useHistory();
    const clickSubmit = (e) => {
        alert("Thank you for your purchase!");
        history.push("/");
    };

    return (
        <div className="main_pay-wrap">
            <div className="payment-wrapper">
                <form className="main-formed">
                    <div className="form-containers">
                        <div className="personal-information">
                            <h1 className="header_font">Payment</h1>
                        </div>
                        <input
                            id="column-left"
                            type="text"
                            className="name-card"
                            name="first-name"
                            placeholder="Имя"
                        />
                        <input
                            id="column-right"
                            type="text"
                            className="name-card"
                            name="last-name"
                            placeholder="Фамилия"
                        />
                        <input
                            id="input-field"
                            type="text"
                            name="number"
                            className="name-card"
                            maxLength="16"
                            placeholder="Номер карты"
                            pattern="[0-9]*"
                        />
                        <input
                            id="column-left"
                            type="text"
                            name="expiry"
                            className="name-card"
                            placeholder="MM / YY"
                            maxLength="4"
                            pattern="[0-9]*"
                        />
                        <input
                            id="column-right"
                            type="text"
                            name="cvc"
                            className="name-card"
                            placeholder="CCV"
                            maxLength="3"
                            pattern="[0-9]*"
                        />

                        <input
                            id="column-left"
                            type="text"
                            name="city"
                            required="required"
                            autoComplete="on"
                            maxLength="20"
                            placeholder="Город"
                        />
                        <input
                            id="column-right"
                            type="text"
                            name="zipcode"
                            required="required"
                            autoComplete="on"
                            pattern="[0-9]*"
                            maxLength="5"
                            placeholder="ZIP код"
                        />
                        <input
                            id="input-field"
                            type="email"
                            name="email"
                            required="required"
                            autoComplete="on"
                            maxLength="40"
                            placeholder="Email"
                        />

                        <button onClick={clickSubmit} id="input-button">
                            Оплатить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentCard;
