
import React from 'react';


export class TimerComponent extends React.Component {
    date = new Date().getSeconds()    
    testBool:boolean = true
   

    state = {
        seconds: this.date,
        runTimer: false,
        testString: "test"
    }

    tick() {
        this.setState({ seconds: new Date().getSeconds() })
    }

    timer() {
       
        setInterval(() =>{
            if(this.state.runTimer) return this.tick()            
        }, 1000);
    }

    stopTimer = ()=>{
        this.setState({runTimer:false})
    }

    startTimer = ()=>{
        this.setState({runTimer:true})
    }

    test = ()=>{
        this.setState({testString:"awdawdwdwa"})
    }


componentDidMount(){
    this.timer()
}

componentWillUnmount(){
    clearInterval()
}
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    {this.state.seconds}
                </div>
                <div className="col-2">{this.state.testString}</div>
                <div className="col-8 my-auto">
                    <button className="btn btn-primary" onClick={this.stopTimer}>Stop</button>
                    <button className="btn btn-primary" onClick={this.startTimer}>Start</button>
                    <button className="btn btn-primary" onClick={this.test}>Test</button>
                </div>
            </div>
        )
    }

}