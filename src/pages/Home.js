import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Static from "../components/Static";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg='https://images.pexels.com/photos/6084464/pexels-photo-6084464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        heading="Цахим халдлагаас урьдчилан сэргийлье"
        text="Stay safe online"
        buttonText="Пост унших"
        url="/posts"
        btnClass="show"
      />
      <Static />
      <Footer/>
    </>
  );
};

export default Home;
