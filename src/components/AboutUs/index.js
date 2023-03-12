import React from "react";
import './AboutUsStyle.css'

function AboutUs(props) {
  return (
    <main className=" main text-start my-16 mx-24 md:my-16 md:mx-8 ">
      <article className="about-right">
        <h1 className="pb-4">{props.heading}</h1>
        <p className="pb-8">{props.mainText}</p>
      </article>
      <ul className="list-none font-bold">
        <li className="py-4">
          <i className='fa-solid fa-check-double pr-2'></i>
          {props.text2}
        </li>
        <li className="py-4">
          <i className='fa-solid fa-check-double pr-2'></i>
          {props.text3}
        </li>
        <li className="py-4">
          <i className='fa-solid fa-check-double pr-2'></i>
          {props.text4}
        </li>
     
      </ul>
    </main>
  );
}

export default AboutUs;
