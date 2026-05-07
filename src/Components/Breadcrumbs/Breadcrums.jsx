import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const {productt} =props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" />{productt.category}  <img src={arrow_icon} alt="" /> {productt.name}

    </div>
  )
}
export default Breadcrums;