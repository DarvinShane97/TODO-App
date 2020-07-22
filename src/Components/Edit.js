import React, { Component } from "react";

import Modal from "./Modal/Modal";

class Edit extends Component{

    constructor(props) {
        super(props);

        this.state ={
            Data: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.changeData.Id !== this.props.changeData.Id){
            this.setState({
                Data: this.props.changeData
            })
        }
    };

    changeDetails = (e) => {
        this.setState({
            Data: {
                ...this.state.Data,
                [e.target.name]: e.target.value
            }
        })
    };

    changeUpdateDetails = () => {
        this.props.changeUpdateDetails(this.state.Data)
    };

    render() {
        return(
            <Modal Id={"UpdateComponent"}
                   saveChanges={this.changeUpdateDetails} >

                <form className={"mt-4"}>
                    <div className="form-group">
                        <label className={"float-left"}><b>Item ID</b></label>
                        <input type="text"
                               className="form-control"
                               name={"Id"}
                               value={this.state.Data.Id} />
                    </div>

                    <div className="form-group">
                        <label className={"float-left"}><b>Item Name</b></label>
                        <input type="text"
                               className="form-control"
                               name={"item_Name"}
                               value={this.state.Data.item_Name}
                               onChange={(e) => this.changeDetails(e)} />
                    </div>

                </form>
            </Modal>
        )
    }
}

export default Edit;