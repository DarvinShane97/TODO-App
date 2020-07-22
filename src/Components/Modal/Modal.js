import React, { Component} from "react";

class Modal extends Component{

    static defaultProps ={
        Id: "",
        children: null,
        saveChanges: undefined
    }
    render() {
        return(
            <div>
                <div className="modal" id={this.props.Id} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div>
                                <div className="jumbotron text-center bg-warning">
                                    <h1>Edit Your App Now</h1>
                                </div>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer float-left">
                                <button type="button"
                                        className="btn btn-secondary bg-danger"
                                        data-dismiss="modal">Close</button>
                                <button type="button"
                                        className="btn btn-primary bg-warning"
                                        onClick={() => this.props.saveChanges()}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;