import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const About = () => {
  return (
  <>
  <Hero
  cName="hero-mid"
  heroImg='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  heading="Бидний тухай"
  btnClass="hide"
  />
  <AboutUs
  heading='Танилцуулга'
  mainText='Эмэгтэйчүүдийн цахим аюулгүй байдал хакатонд суурилан хөгжүүлэгдэж буй цахим хуудас
  '
  text2='24/7 Chatbot'
  text3='Зөвлөгөө'
  text4='Тусламж байршил'
  />
  <AboutUs
  heading='Зорилго'
  mainText='Цахим гэмт хэргээс урьдчилан сэргийлэхд оршино. Үүнд:'
  text2='Цахим луйвар'
  text3='Санхүүгийн залилан'
  text4='Сэтгэл зүйн заналхийлэл'
  />
  <Footer/>
  </>
  )
}

export default About
