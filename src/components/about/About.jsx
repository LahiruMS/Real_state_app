import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Rent Up is one of the fastest growing real estate firms in Sri Lanka with a colossal clientele. With more than sixty four thousand
               followers on Facebook and a client base which encompasses many of Sri Lanka’s richest individuals, it is certainly thriving in 
               the market as an impact player when it comes to cracking deals. The key areas that Mister T focuses on are building trust and providing 
               unexpected levels of professionalism using both technology and innovation in order to cater to as any clients as possible. In this day and age, 
               
                 </p>
            
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
