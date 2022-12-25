import React from 'react'
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/three.jpg'
import four from './images/four.jpeg'
import five from './images/six.jpg'
import six from './images/seven.jpg'
import photoImg from './images/PhotoGallery.png'
import './PhotoGallery.css'

function PhotGallery() {
    return (
        <div className="photogallery">
            <img src = {photoImg} width={80} height={80} className="photogallery_logo"></img>
             <div className="clg_imgs">
                <img src={one}  className="clg_imgs_one"></img> 
                <img src={two}  className="clg_imgs_second"></img> 
                <img src={three}  className="clg_imgs_third"></img> 
                <img src={four}  className="clg_imgs_one"></img> 
                <img src={five}  className="clg_imgs_second"></img> 
                <img src={six}  className="clg_imgs_third"></img>
            </div>
        </div>
    )
}

export default PhotGallery
