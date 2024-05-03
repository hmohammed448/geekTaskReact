import React from "react";
import quoteData from "../JS/quotelist.js";
import QuoteCardList from "./QuoteCardList.jsx";

function Quote() {
  return (
    <>
      {quoteData.map((item, index) => {
        return <QuoteCardList key={index} quote={item.quote} author={item.author} />;
      })}
    </>
  );
}

export default Quote;
