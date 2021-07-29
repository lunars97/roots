import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import app from "../../firebase";
import "./SignUp.css";
const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(
                        email.value,
                        password.value
                    );
                history.push("/admin");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    return (
        <div className="main__signup-container">
            <div className="signup-container">
                <h2 id="auth-text">Sign Up</h2>
                <form className="auth-form" onSubmit={handleSignUp}>
                    <input
                        className="auth-inp"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="auth-inp"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit" className="auth-btn">
                        Sign Up
                    </button>
                    <span id="account-text">
                        Already have an account?<Link to="/login">Log In</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);
