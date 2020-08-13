import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calculator extends Component {
    state = {
        snum: "",
        reg: /^\d+([+*-]\d+)$/,
    }
    reset = () => {
        this.setState({
            snum: "",
        })
    }

    getResult = () => {
        if ((this.state.reg).test(event.target.value)) {
            this.setState({
                snum: "",
            });
        } else {
            this.setState({
                snum: eval(this.state.snum),
            });
        }
        console.log(this.state.snum)
    }

    setNum = (event) => {
        this.setState({
            snum: this.state.snum + String(event.target.value),
        });
    }

    numAndsym = ["+","-","x", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    render() {
        return (
            <div className="calculator">
                <h1>在线计算器</h1>
                <div>
                    <input type="text" value={this.state.snum} />
                </div>
                {this.numAndsym.map((num) =>
                    <input type="button" value={num} onClick={this.setNum} />)}
                <p>
                    <input type="button" value="Clear" onClick={this.reset} />
                    <input type="button" value="=" onClick={this.getResult} />
                </p>
                <p><Link to="/">回到主页</Link></p>
            </div>
        );
    }
}
export default Calculator;