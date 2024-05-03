import React from "react";
import cardStyle from "../components/compoCSS/Cards.module.css";

const QuoteCardList = ({ quote, author }) => {
  return (
    <>
      <div className={cardStyle.card}>
        <div className={cardStyle.cardText}>
          <p>{quote}</p>
        </div>
        <div className={cardStyle.userDetail}>
          <div className="img">
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
          </div>
          <div className="positionDetail">
            <span>{author}</span>
            <hr className={cardStyle.hr} />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteCardList;
