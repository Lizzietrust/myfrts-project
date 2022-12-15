import React, { useState, useEffect } from "react";
import data from "../data"
import vehincle from '../images/fluent_vehicle-ship.png'
import ant from '../images/ant-design_file.png'
import map from '../images/map_insurance-agency.png'
import user from '../images/mdi_user.png'
import finance from '../images/mdi_finance.png'
import truck from '../images/cil_truck.png'
import prevIcon from '../images/icon-left.png'
import nextIcon from '../images/icon-right.png'

const Services = () => {
  const [rendering] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = rendering.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, rendering]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='services'>
        <h5>Our Services</h5>
        <h3>Expert solutions for all your cargo needs</h3>
        <div className="services-flex">
            <div className="service-box display">
                <div className="box-img">
                    <img src={vehincle} alt="" srcset="" />
                </div>
                <p>Freight Forwarding</p>
                <span>
                    With a blend of supportive experts, quality freights forwarders and easy to
                        use technology Myfrts makes the shipping process easy and transparent.
                </span>
            </div>
            <div className="service-box">
                <div className="box-img">
                    <img src={ant} alt="" srcset="" />
                </div>
                <p>Customs Clearance</p>
                <span>
                    Access to a transparent clearance process and an expert team means your goods can 
                    spend the least possible time at the port. Myfrts makes cargo clearance a breeze for you.
                </span>
            </div>
            <div className="service-box">
                <div className="box-img">
                    <img src={map} alt="" srcset="" />
                </div>
                <p>Cargo Insurance</p>
                <span>
                    Protecting you cargo, from export origin to the Import destination. Our Line-up of 
                    insuring your cargo are designed to provide cover for your investment.
                        Let's help you with your insurance.
                </span>    
            </div>
            <div className="service-box">
                <div className="box-img">
                    <img src={user} alt="" srcset="" />
                </div>
                <p>Trade Consultant</p>
                <span>
                    We offer trade facilitator by helping our clients obtain, trade documentation 
                    as PAAR ( Pre Arrival Assessment Report ), IDEC, Minimize Duties, NAFDAC ,
                        SON, NESREA and IDEC ( Import Duty Exemption Certificate ) Federal Ministry 
                        Of Finance ( FMF ).
                </span>
            </div>
            <div className="service-box">
                <div className="box-img">
                    <img src={finance} alt="" srcset="" />
                </div>
                <p>Freight Financing</p>
                <span>
                    No upfront fees and minimal paperwork, means you get funding for your business fast.
                    Myfrts gives you access to purchase order financing, freight financing and import
                    financing.
                </span>
            </div>
            <div className="service-box">
                <div className="box-img">
                    <img src={truck} alt="" srcset="" />
                </div>
                <p>Haulage</p>
                <span>
                    Myfrts offers you a convienience haulage with the quickest response time at the most 
                    affordable cost. Our network of partners is spread along the continent, ready to move 
                    your goods.
                </span>
            </div>
        </div>
        <div className="services-mob">
            {rendering.map((item, indexRendering) => {
            const { id, image, title, text } = item;
            let position = "nextSlide";
            if (indexRendering === index) {
                position = "activeSlide";
            }
            if (
                indexRendering === index - 1 ||
                (index === 0 && indexRendering === rendering.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <div id="service-boxmob" className={position}>
                    <div className="box-img">
                        <img src={image} alt="" srcset="" />
                    </div>
                    <p>{title}</p>
                    <span>
                        {text}
                    </span>
                </div>
            );
            })}
        </div>
        <div className="slider-icons">
            <img src={prevIcon} alt="" className='prev-icon' onClick={() => setIndex(index - 1)}/>
            <img src={nextIcon} alt="" className='next-icon' onClick={() => setIndex(index + 1)}/>
        </div>
    </div>
  )
}

export default Services
