import React from 'react';
import "./Image.css"


function Image(props) {
    return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Image;

