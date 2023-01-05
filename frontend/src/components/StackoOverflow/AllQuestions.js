import "./css/AllQuestions.css";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

function AllQuestions({ question }) {
  {
    /*receive props and destructured it */
  }

  // console.log(question?.tags[0]);
  let tags = JSON.parse(question?.tags[0]);

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>{question?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>0 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${question?._id}`}>{question?.title} ?</Link>
          <div
            style={{
              width: "90%",
            }}
          >
            <div>{ReactHtmlParser(question?.body)}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <>
                <span className="question-tags">{_tag}</span>
              </>
            ))}
          </div>
          <div className="author">
            <small>{new Date(question?.created_at).toLocaleString()}</small>
            <div className="author-details">
              <Avatar src={question?.user?.photo} />
              <p>
                {question?.user?.displayName
                  ? question?.user?.displayName
                  : String(question?.user?.email).split("@")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
