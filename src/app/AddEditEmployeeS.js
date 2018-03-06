import React from 'react';
import { render } from 'react-dom';

export class AddEditEmployeeSmart extends React.Component {
     
    constructor(props){
        console.log("addedit ctor");
       
        super(props);
       
        let empprops = {};
        if(this.props.user != undefined)
            this.empprops = this.props;
        this.state = {
        //    employee: {
           
        //     }
        ID:this.empprops.user.ID,    
        empname: this.empprops.user.who,
            phone:this.empprops.user.phone,
            designation:this.empprops.user.designation,
            bloodgrp:this.empprops.user.bloodgrp

        };

        
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeBloodGrp=this.handleChangeBloodGrp.bind(this);
        this.handleChangeDesignation=this.handleChangeDesignation.bind(this);
        this.handleChangePhone=this.handleChangePhone.bind(this);
       
      }
      
      componentWillMount(){
        this.setAddEditState(this.props);
          
     }
    //   componentWillUpdate(){
    //     console.log("addeditcomponentWillUpdate");
    //     this.setAddEditState(this.props);
    // }

    componentWillReceiveProps(newprops){
       console.log("newprops");
       console.log(newprops);
        this.setAddEditState(newprops);
    }

    // shouldComponentUpdate(){
    //     console.log("addeditshouldComponentUpdate");
    //     //this.setAddEditState(this.props); //error Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

    // }


    // _handleChangeEvent(val) {
    //     console.log(val);
    //     return val;
    //   }
    // handleChange = (input) => (event) => {
    //     this.setState({
    //         ...this.state,
    //         [input]: event.target.value
    //     });
    //     console.log(this.state);
    // }

    handleChangeName(event) {
        this.setState({
            empname: event.target.value
        });
        // this.props.user.who= event.target.value;
      }

      handleChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
      }

      handleChangeDesignation(event) {
        this.setState({
            designation: event.target.value
        });
      }

      handleChangeBloodGrp(event) {
        this.setState({
            bloodgrp: event.target.value
        });
      }

      handleChangeName(event) {
        this.setState({
            empname: event.target.value
        });
      }

      setAddEditState(props){
        this.setState({
            empname: props.user.who,
            phone:props.user.phone,
            designation:props.user.designation,
            bloodgrp:props.user.bloodgrp
        });
      }

    render(){
        console.log("addedit render");
       
        console.log(this.state);
      
        return (
            <div className="container">
                <div class="jumbotron"><b>Edit Employee Records</b></div>
                <div>
                    <label for="usr">Name:</label>
                    {/* <input type="text"  id="usr" value={this.props.user.who} />
                    <input type="text"   defaultValue={this.state.empname} onChange={()=>{this._handleChangeEvent(this.state.empname);}} /> */}
                    {/* <input type="text" handleChange ={this.handleChange("name")} defaultValue={this.state.empname} /> */}
                    <input type="text" class="form-control"  onChange={this.handleChangeName} value={this.state.empname} />
                </div>
                 <div>
                    <label for="phn">Contact:</label>
                    <input type="text" class="form-control" onChange={this.handleChangePhone} id="phn" value={this.state.phone} />
    
                </div>
                <div>
                    <label for="desig">Designation:</label>
                    <input type="text" class="form-control" onChange={this.handleChangeDesignation} id="desig" value={this.state.designation} />
    
                </div>
                <div>
                    <label for="bg">Blood Group::</label>
                    <input type="text" class="form-control" onChange={this.handleChangeBloodGrp} id="bg" value={this.state.bloodgrp} />
    
                </div>
                <button type="button" class="btn btn-success" onClick={e=> this.props.ParentUpdateEmp(this.state)}>Save</button>
                <button type="button" class="btn btn-danger" onClick={e=>this.props.hideAddEditComponent({cancel:"y"},e)}>Cancel</button>
            </div>
        );
    }
}