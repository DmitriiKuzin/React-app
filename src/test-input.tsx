import React, { ChangeEvent } from 'react';



export class InputTest extends React.Component {
    public tst: string = "Yo"
    state = {
        stingForBinding: this.tst
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.tst = e.target.value
        this.setState({ stingForBinding: this.tst })
        console.log(this.tst)
    };
    handleClick = ()=> {
       // this.tst = "Boob"
        this.setState({ stingForBinding: "Boob" })
    }

    render() {
        return (
            <div className="App">
                <input type="text" value={this.state.stingForBinding} onChange={this.handleChange} />
                <button className="btn" onClick={this.handleClick}>GO</button>
            </div>
        )
    }


}






