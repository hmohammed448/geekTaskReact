import React from "react";
import quoteData from "../JS/quotelist.js";
import QuoteCardList from "./QuoteCardList.jsx";

function Quote() {
  return (
    <>
      <di className="flex flex-row flex-wrap items-baseline justify-center gap-6">
        {quoteData.map((item, index) => {
          return (
            <QuoteCardList
              key={index}
              quote={item.quote}
              author={item.author}
            />
          );
        })}
      </di>
    </>
  );
}

export default Quote;
