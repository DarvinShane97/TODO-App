import React,{ Component} from "react";
import '../Completed.css';

class Table extends Component{

    static defaultProps = {
        TableHeaderData: [],
        TableBodyData: [],
        isMethods: false,
        editDetails: undefined,
        deleteDetails: undefined,
        completeDetails: undefined
    };

    render() {
        return(
            <table className="table">
                <thead className="thead-dark mt-4">
                <tr>
                    {
                        this.props.TableHeaderData.map((value, id) => {
                            return(
                                <th key={id} scope="col">{value}</th>
                            )
                        })
                    }

                    {
                        (this.props.isMethods) ? (
                            <th scope={"col"}>Edit/Delete</th>
                        )  : null
                    }
                </tr>
                </thead>

                <tbody>
                {
                    [...this.props.TableBodyData]
                        .sort((first, second) => second.created - first.created)
                        .sort((first, second) => {
                            if (first.status === "complete")
                                return 1;
                            else if (second.status === "complete")
                                return -1;
                            else
                                return second - first;
                        })
                        .map((value, id) => {
                            return(
                                <tr key={id} className={"bg-warning"}>
                                    <th scope="row">{value.Id}</th>
                                    <td className={`${(value.status === "complete") ? "completed" : ""}`}>{value.item_Name}</td>

                                    {
                                        (this.props.isMethods) ? (
                                            <td className={"p-8"}>
                                                <button type = "button"
                                                        className = "btn btn-success mt-2"
                                                        data-toggle= "modal"
                                                        data-target= "#UpdateComponent"
                                                        onClick={(e) => this.props.editDetails({id: value.Id})}>Edit</button>
                                                <button type = "button"
                                                        className = "btn btn-danger mt-2 ml-1"
                                                        onClick={(e) => this.props.deleteDetails({id: value.Id})}>Remove</button>

                                                <button type = "button"
                                                        className = "btn btn-dark mt-2 ml-1"
                                                        onClick={(e) => this.props.completeDetails({id:value.Id})}>Complete</button>
                                            </td>
                                        ): null
                                    }
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>
        );
    }
}

export default Table;