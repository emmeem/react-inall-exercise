import React, { Component } from 'react';
import './home.less';
import imgURL from '../images/calculator.png';
import imgURL2 from '../images/timer.png';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
  render() {
    return (
    <div className="home">
      <h1 className="bt">在线实用工具</h1>
      <div className="tool">
        <img src={imgURL} alt="calculator" className="calculator"/>
        <Link to="/calculator" >计算器</Link>
      </div>
      <div className="tool">  
        <img src={imgURL2} alt="timer" className="timer"/>
        <Link to="/timer">倒计时器</Link>
      </div>
    </div>);
  }
}
export default Home;