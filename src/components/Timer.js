import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Timer extends Component {
    state = {
        resTime: "Start",
        timer: "keyer",
        status: false,
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    getTime = (event) => {
        this.setState({
            resTime: parseInt(event.target.value),
        });
    }

    handleTimer = () => {
        this.setState({
            status: true,
            timer: setInterval(this.handleUpdateTime, 1000),
        })
        
    }

    handleUpdateTime = () => {
        if (this.state.resTime > 1) {
            this.setState({
                resTime: this.state.resTime - 1,
            });
        } else {
            this.setState({
                resTime: "END",
                status: false,
            });
            clearInterval(this.state.timer)
        }
        console.log(this.state.resTime)
    }

    render() {
        return (
            <div className="calculator">
                <h1>在线倒计时器</h1>
                <p><label>设置时间</label>
                    <input type="text" onChange={this.getTime}/>
                </p>
                <p>
                    <input type="button" value="Start" onClick={this.handleTimer} 
                    disabled={this.state.status}/>
                </p>
                <p>
                    <input tyep="text" value={this.state.resTime} />
                </p>
                <p><Link to="/">回到主页</Link></p>
            </div>
        );
    }
}

export default Timer;