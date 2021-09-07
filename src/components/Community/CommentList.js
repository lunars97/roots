import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
import "../Community/Community.css";
const CommentList = () => {
    const { leaveComment, commentsData, deleteComment } =
        useContext(productContext);

    useEffect(() => {
        leaveComment();
    }, []);
    return (
        <div>
            {commentsData.map((item) => (
                <div className="comment-list" key={item.id} item={item}>
                    <div className="inner_comment-list">
                        <span className="email_comment">
                            email: {item.email}
                        </span>
                        <hr style={{ color: "black" }}></hr>
                        <span className="email_comment" id="name-inp">
                            {item.name} says:
                        </span>
                        <div className="comment_section">
                            <p id="list_comment">{item.comment}</p>
                            <button
                                id="trash"
                                onClick={() => deleteComment(item.id)}
                            >
                                <i
                                    class="fa fa-trash-o  fa-lg"
                                    style={{ color: "green" }}
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
