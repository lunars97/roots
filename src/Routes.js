import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./components/AdminPage/AdminPage";
import ProductContextProvider from "./contexts/ProductContext";
import CardDetails from "./components/CardDetails/CardDetails";
import EditProduct from "./components/EditProduct/EditProduct";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Community from "./components/Community/Community";
import Contact from "./components/Contact/Contact";
import Favourite from "./components/Favourite/Favourite";
import PaymentCard from "./components/PaymentCard/PaymentCard";
import CommentList from "./components/Community/CommentList";

const Routes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ProductContextProvider>
                    <Navbar />
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/admin"
                            component={AdminPage}
                        />
                        <Route
                            exact
                            path="/details/:id"
                            component={CardDetails}
                        />
                        <Route exact path="/edit/:id" component={EditProduct} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/community" component={Community} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/favourite" component={Favourite} />
                        <Route exact path="/payment" component={PaymentCard} />
                        <Route path="/community" component={CommentList} />
                    </Switch>
                </ProductContextProvider>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default Routes;
