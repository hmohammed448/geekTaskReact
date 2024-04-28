import React from "react";
import cardStyle from "./compoCSS/Cards.module.css";
function Cards() {
  return (
    <>
      <div className={cardStyle.card}>
        <div className={cardStyle.cardText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </p>
        </div>
        <div className={cardStyle.userDetail}>
          <div className="img"><img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/></div>
          <div className="positionDetail">
            <span>Gladis Lennon</span>
            <hr className={cardStyle.hr}/>
            <span>Head of SEO</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
