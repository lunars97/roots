import React, { useContext, useEffect, useState } from "react";
import tree from "../image/tree.jfif";
import "../Community/Community.css";
import Footer from "../Footer/Footer";
import { productContext } from "../../contexts/ProductContext";
import CommentList from "./CommentList";
const Community = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        comment: "",
    });
    const { postNewComment } = useContext(productContext);
    function commentOnChange(e) {
        let newCommentObj = {
            ...state,
            [e.target.name]: e.target.value,
        };
        setState(newCommentObj);
        console.log(newCommentObj);
    }
    function handleCommentClick(e) {
        e.preventDefault();

        setState({
            name: "",
            email: "",
            comment: "",
        });
        postNewComment(state);
        console.log(state);
    }

    return (
        <>
            <div>
                <div className="community_container">
                    <div>
                        <img src={tree} alt="tree" className="community_img" />
                    </div>
                    <div className="community_info">
                        <h2 className="header_community">Roots Community</h2>
                        <p className="p_community">
                            Share your wonderful ideas with us!
                        </p>
                        <span className="span_community">
                            Let's get to know each other &#128154;
                        </span>
                    </div>
                </div>
                <div className="box-wrapper">
                    <div className="comment-box">
                        <h3 className="main_info-community">
                            Leave a commentary and make a contribution to our
                            community
                        </h3>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            placeholder="Name"
                            className="name-comment"
                            onChange={commentOnChange}
                        />
                        <input
                            name="email"
                            type="text"
                            value={state.email}
                            placeholder="Email"
                            className="name-comment"
                            onChange={commentOnChange}
                        />
                        <textarea
                            type="text"
                            name="comment"
                            className="comment-text"
                            value={state.comment}
                            onChange={commentOnChange}
                        />
                        <button
                            style={{
                                width: "160px",
                                height: "25px",
                                marginTop: "20px",
                            }}
                            onClick={handleCommentClick}
                        >
                            Post Comment
                        </button>
                    </div>
                </div>
                <div className="main_comment-list">
                    {!!state.comment.length && (
                        <div className="secondary_list">
                            <h3>Comments</h3>
                        </div>
                    )}
                    <CommentList />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Community;
