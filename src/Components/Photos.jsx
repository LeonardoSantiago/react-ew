
import React, {Component} from 'react';
import './Photos.css'

const images = [require("./fotos/1.jpeg"),require("./fotos/2.jpeg"),require("./fotos/3.jpeg"),require("./fotos/4.jpeg"),require("./fotos/5.jpeg"),require("./fotos/6.jpeg"),require("./fotos/7.jpeg"),
require("./fotos/8.jpeg"),require("./fotos/9.jpeg"),require("./fotos/10.jpeg"),require("./fotos/11.jpeg"),require("./fotos/12.jpeg"),require("./fotos/13.jpeg"),require("./fotos/14.jpeg"),require("./fotos/15.jpeg"),
require("./fotos/16.jpeg"),require("./fotos/17.jpeg"),require("./fotos/18.jpeg"),require("./fotos/19.jpeg"),require("./fotos/20.jpeg"),require("./fotos/21.jpeg"),require("./fotos/22.jpeg"),require("./fotos/23.jpeg"),
require("./fotos/24.jpeg"),require("./fotos/25.jpeg"),require("./fotos/26.jpeg"),require("./fotos/27.jpeg"),require("./fotos/28.jpeg"),require("./fotos/29.jpeg"),require("./fotos/30.jpeg"),require("./fotos/31.jpeg"),
require("./fotos/32.jpeg"),require("./fotos/33.jpeg"),require("./fotos/34.jpeg"),require("./fotos/35.jpeg"),require("./fotos/36.jpeg"),require("./fotos/37.jpeg"),require("./fotos/38.jpeg"),require("./fotos/39.jpeg"),
require("./fotos/40.jpeg")]

export default class Teams extends Component {
    render() {
      return (
        <div>
            {images.map ( img => {
                return (
                    <div className="container-image">
                        <img className="image" src={img} />
                    </div>
                )
            })}
        </div>
        )
    }
  }