import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "../app/Home";
import Calculator from "./Calculator";
import Timer from "./Timer";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <BrowserRouter>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/calculator" className="Header">在线计算器</Link>
                    <Link to="/timer" className="Header">在线倒计时器</Link>
                    <Switch>
                        <Route exact path="/calculator" component={Calculator} />
                        <Route exact path="/timer" component={Timer} />
                        <Route path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}

export default Header;