import React, { Component} from "react";
import _findIndex from "lodash.findindex";
import Table from "./Components/Table"
import Edit from "./Components/Edit";

class App extends Component{

  constructor() {
    super();

    this.state = {
      Data: [],
      currentItemsValues: {},
      editCompData: {}
    };
  }

  changeDetails = (e) => {
    this.setState({
      currentItemsValues: {
        ...this.state.currentItemsValues,
        [e.target.name]: e.target.value
      }
    })
  };

  SubmitItems = () => {
    this.setState( {
      currentItemsValues:{
        ...this.state.currentItemsValues,
        Id: Date.now(),
        created: new Date(),
        status:"ss"
      }
    },() => {
      this.setState({
        Data:[
          ...this.state.Data,
          ...[this.state.currentItemsValues]
        ]
      })
    })
  };

  deleteDetails = (id) => {
    let details = this.state.Data;
    let item = _findIndex(details,{Id:id});

    details.splice(item,1);
    this.setState({
      Data: details
    })
  };

  completeDetails = (id) => {
    let items_List = this.state.Data;
    let col = _findIndex(items_List, {Id:parseInt(id)});
    items_List[col].status = "complete";

    this.setState({
      Data: items_List
    })
  };

  editDetails = (id) => {
    let details = this.state.Data;
    let item = _findIndex(details,{Id:id});

    this.setState({
      editCompData: details[item]
    })
  };

  changeUpdateDetails = (data) => {
    let details = this.state.Data;
    let item = _findIndex(details,{Id:data.Id});

    details.splice(item,1,data);

    this.setState({
      Data: details
    })
  };

  render() {

    const TableHeaderData = ["Item ID","Item Name"];

    return(
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>

              <div className="jumbotron text-center bg-warning">
                <h1>TODO APP</h1>
                <p>Todo apps are widely used, but different users use apps differently depending on their specific needs.
                  In order to identify the problems that Todo application users face,
                  I did research to develop an understanding of the market and the needs of the users.
                </p>
              </div>

              <div className="jumbotron text-center bg-light">
                <h3 className={"text-center"}>Add Items</h3>
                <form className={"mt-4"}>

                  <div className="form-group">
                    <label className={"float-left"}><b>Item Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter Item Name" name={"item_Name"} onChange={(e) => this.changeDetails(e)} />
                  </div>

                  <button type="button" className="btn btn-warning" onClick={() => this.SubmitItems()}><b>Submit</b></button>
                </form>
              </div>

              <div className="jumbotron text-center">
                <h3 className={"text-center"}>Item List</h3>
                <Table
                    TableHeaderData={TableHeaderData}
                    TableBodyData={this.state.Data}
                    isMethods={true}
                    editDetails={(e) => this.editDetails(e.id)}
                    deleteDetails={(e) => this.deleteDetails(e.id)}
                    completeDetails={(e) => this.completeDetails(e.id)}
                />
              </div>

              <Edit
                  changeData={this.state.editCompData}
                  changeUpdateDetails={(data) => {this.changeUpdateDetails(data)}}
              />

            </div>
          </div>
        </div>
    );
  }
}

export default App;