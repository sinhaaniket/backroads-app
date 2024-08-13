import React from 'react'
import Title from './Title'
import { services } from '../data'
function Services() {
  return (
    <section className="section services" id="services">
    <Title title= "our" subtitle= 'service'/>
    <div className="section-center services-center">
    {services.map((service)=>{
      const {id , icon , title} = service;
      return(
      <article className="service" key={id}>
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.
          </p>
        </div>
      </article>
        
      );
    })}
    
    </div>
  </section>
  )
}

export default Services
