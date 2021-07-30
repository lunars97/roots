import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import app from "../../firebase";
import "./SignUp.css";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/admin");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="main__signup-container">
            <div className="signup-container">
                <h2 id="auth-text">Log in</h2>
                <form className="auth-form" onSubmit={handleLogin}>
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
                        Log in
                    </button>
                    {/* <span id="account-text">
                        Does not have an account?
                        <Link to="/signup">Sign Up</Link>
                    </span> */}
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);
