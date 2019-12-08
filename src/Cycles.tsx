import React, { ChangeEvent } from "react";

export class Cycles extends React.Component {
    // lis: Array<string> = []
    // lisa = []
    // this.lis.map((el, index) =>
    //     <tr key="ass"><td>{el}</td></tr>
    // )
    state = {
        inputText: '',
        listRows: ''
    }



    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputText: e.target.value })
        console.log(e.target.value)
    }

    handleClick = () => {
        // let tempList = this.state.listRows
        // //tempList.push(<tr key={this.state.inputText}><td>{this.state.inputText}</td></tr>)
        // this.setState({ listRows: tempList })    
        // this.setState({inputText:''})
    }


    render() {
        return (
            <div className="container-fluid" style={{ height: 400 }}>
                <div className="col-4 offset-4 text-center mt-3 shadow-sm" style={{ height: '100%' }}>
                    <h1>Clicker</h1>
                    <div className="input-group mt-4 justify-content-center">
                        <input type="text" onChange={this.handleChange} value={this.state.inputText} />
                        <div className="input-group-prepend">
                            <span>
                                <button className="btn btn-primary" onClick={this.handleClick}>Add</button>
                            </span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-8 offset-2">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td>
                                            Tab
                                        </td>
                                    </tr>
                                </thead>
                                <tbody key="tbody">
                                    {/* {this.state.listRows} */}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}