import React from 'react';

import { ReactComponent as LogoSvg } from '../assets/img/instagram-logo.svg';
import './Topbar.scss';


//
class Topbar extends React.Component{
  render() {  
    return (
      <header className="topbar">
      <div className="container">
        <a to="/" className="topbar__logo">
          <LogoSvg alt="Instagram logo"/>
        </a>

        <div className="topbar__group">
          <button className="topbar__icon">
            <a to="/users">
            <i className="fas fa-users"/>
            <span>Usuários</span>
            </a>
          </button>

          <button className="topbar__icon">
            <a to="/newuser">
              <i className="fas fa-user-plus"/>
              <span>Nova Conta</span>
            </a>
          </button>
        </div>
        
      </div>
    </header> 
    );
  }
}  


export default Topbar;