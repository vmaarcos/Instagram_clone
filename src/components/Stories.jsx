import React from 'react';
import imgstory from '../assets/img/st1.jpeg';
import imgstory1 from '../assets/img/st2.jpeg';
import imgstory2 from '../assets/img/st3.jpeg';


import './Stories.scss';


//
class Stories extends React.Component{
  render() {  
    return (
      <div className="container">
          <section className="stories">
            <div className="stories__container">
              <a  className="user__thumb">
              <span className="user__thumb__wrapper">
              <img src={imgstory} alt="Descrição da imagem" />
              </span>
              </a>

              <a  className="user__thumb user__thumb--hasNew">
              <span className="user__thumb__wrapper">
              <img src={imgstory1} alt="Descrição da imagem" />
              </span>
              </a>

              <a  className="user__thumb">
              <span className="user__thumb__wrapper">
              <img src={imgstory2} alt="Descrição da imagem" />
              </span>
              </a>
            </div>
          </section>
        </div>
    );
  }
}  

export default Stories;