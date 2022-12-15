import React from 'react'
import delivery from '../images/delivery-person.png'

const Choose = () => {
  return (
    <div className='choose'>
        <div className="why-choose">
            <h3>Why You Should Choose Myfrts</h3>
            <div className="line"></div>
            <div className="choose-list">
                <div className="choose-listitem">
                    <div className="list-number">01</div>
                    <p>Full Service Solutions</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">02</div>
                    <p>Problem - Solving Power</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">03</div>
                    <p>Transparency</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">04</div>
                    <p>Cost Savings</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">05</div>
                    <p>Consistent Communication</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">06</div>
                    <p>Relationship with Global Agent</p>
                </div>
                <div className="choose-listitem">
                    <div className="list-number">07</div>
                    <p>Simplicity</p>
                </div>
            </div>
            <div className="mail-link">
                <a href="mailto:info@myfrts.com?" className="your-cargo">Move your Cargo</a>
            </div>
        </div>
        <img src={delivery} alt="" srcset="" />
    </div>
  )
}

export default Choose
