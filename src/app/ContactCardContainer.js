import React from 'react';
import { render } from 'react-dom';
import { EmployeeCard } from './EmpCard';
import { AddEditEmployee } from './AddEditEmployee';
import { AddEditEmployeeSmart } from './AddEditEmployeeS';
// import { fail } from 'assert';
import axios from "axios";


export class ContactCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEmpID: 0,
      isHidden: true,
      employeeArr: [],
      updateEmployeeData: { ID: 0, who: "", phone: "", pic: "upload.jpg", designation: "", bloodgrp: "" },
      showDeleteConfirmation: false,
      deleteEmpID: -1,
      // axiosinstance: axios.create({
      //   baseURL: 'http://localhost:60855/api/',
      //   headers: { 'Content-Type': 'application/json' }
      // })
    }
    this.axiosinstance = axios.create({
      baseURL: 'http://localhost:60855/api/',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.callGetEmployeeAPI();

  }

  componentWillMount() {

    console.log("componentDidMount");
    // this.setState(
    //   {
    //     employeeArr: [{
    //       "ID": 1,
    //       "who": "Pratibha Krishnan",
    //       "phone": "9903988115",
    //       "pic": "Pratibha.jpg",
    //       "designation": "Consultant",
    //       "bloodgrp": "B+"
    //     },
    //     {
    //       "ID": 2,
    //       "who": "Debopoma",
    //       "phone": "9783491116",
    //       "pic": "Debo.jpg",
    //       "designation": "Senior Engg Consultant",
    //       "bloodgrp": "A+"
    //     },
    //     {
    //       "ID": 3,
    //       "who": "Anupam",
    //       "phone": "9029990111",
    //       "pic": "Anupam.jpg",
    //       "designation": "Senior Consultant",
    //       "bloodgrp": "B+"
    //     },
    //     {
    //       "ID": 4,
    //       "who": "Sushmita",
    //       "phone": "7900342221",
    //       "pic": "Sushi.jpg",
    //       "designation": "Principal Engg",
    //       "bloodgrp": "O+"
    //     }]
    //   }
    // )

  }


  setStateIsEdit = (empID, e) => {

    let currentEmployee = this.state.employeeArr.find(x => x.ID == empID);
    this.setState({
      currentEmpID: empID,
      updateEmployeeData: { ...currentEmployee },
      isHidden: false
    });

  }

  updateEmployee = (props) => {
    let currentEmployee = this.state.employeeArr.find(x => x.ID == this.state.currentEmpID);
    let currIndex = this.state.employeeArr.findIndex(x => x.ID == this.state.currentEmpID);

    if (currIndex < 0) {
      //add employee
      console.log("add employee");

      var array = this.state.employeeArr;
      var maxIndex = Math.max.apply(Math, array.map(function (o) { return o.ID; }))
      var newid = maxIndex + 1;

      currentEmployee = {
        "ID": newid,
        "who": props.empname,
        "phone": props.phone,
        "pic": "upload.jpg",
        "designation": props.designation,
        "bloodgrp": props.bloodgrp
      }

      this.state.employeeArr.push(currentEmployee);
    }
    else {

      currentEmployee.who = props.empname;
      currentEmployee.designation = props.designation;
      currentEmployee.phone = props.phone;
      currentEmployee.bloodgrp = props.bloodgrp;
      this.state.employeeArr.splice(currIndex, 1, currentEmployee);

    }

    this.setState({
      employeeArr: this.state.employeeArr,
      updateEmployeeData: currentEmployee
    })
    //this.setState - aemparr
  }

  updateEmployeeforDumbVersion = () => {

    let currIndex = this.state.employeeArr.findIndex(x => x.ID == this.state.currentEmpID);

    if (currIndex < 0) {
      //add employee
      console.log("add employee");
      var array = this.state.employeeArr;
      var maxIndex = Math.max.apply(Math, array.map( (o) => { return o.ID; }))
      console.log(maxIndex);
      this.state.updateEmployeeData.ID = maxIndex + 1;
      this.state.currentEmpID = maxIndex + 1;
      this.state.employeeArr.push(this.state.updateEmployeeData);

      var addEmpData = this.state.updateEmployeeData;
      this.callAddEmployeeAPI(addEmpData);

    }
    else {
      this.callUpdateEmployeeAPI(this.state.updateEmployeeData);
     // this.state.employeeArr.splice(currIndex, 1, this.state.updateEmployeeData);
    }

    this.setState({
      employeeArr: this.state.employeeArr,
      updateEmployeeData: this.state.updateEmployeeData,
      isHidden: true
    })
    //this.setState - aemparr
  }

  addEmployee = () => {
    this.setState({
      updateEmployeeData: { ID: 0, who: "", phone: "", pic: "upload.jpg", designation: "", bloodgrp: "" },
      currentEmpID: 0,
      isHidden: false
    })

  }

  confirmdeleteEmployee = (EmpID) => {
    this.setState({
      showDeleteConfirmation: true,
      deleteEmpID: EmpID
    })

  }

  hidedeleteEmployeeConfirmation = () => {
    this.setState({
      showDeleteConfirmation: false,
      deleteEmpID: 0
    })

  }

  deleteEmployee = () => {
    console.log("deleteEmployee");
    this.callDeleteEmployeeAPI(this.state.deleteEmpID);
    // var index = this.state.employeeArr.map(function (item) { return item.ID; })
    //   .indexOf(this.state.deleteEmpID);
    // console.log(index);
    // var array = this.state.employeeArr;
    // array.splice(
    //   index, 1);

    // this.setState({
    //   employeeArr: array,
    //   isHidden: true,
    //   deleteEmpID: -1,
    //   showDeleteConfirmation:false
    // });
  }



  hideAddEditComponent = (data, e) => {
    if (data.cancel == "y") {
      this.setState({
        isHidden: true,
        deleteEmpID: -1
      })
    }

  }

  /* function for dumb component */
  handleChangefromDumbCompTextBox = (data, event) => {
    if (this.state.currentEmpID == 0) {
      let currIndex = this.state.employeeArr.findIndex(x => x.ID == this.state.currentEmpID);

      if (currIndex < 0) {
        var array = this.state.employeeArr;
        var maxIndex = Math.max.apply(Math, array.map(function (o) { return o.ID; }))
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, ID: maxIndex + 1 }
        });
      }
    }

    switch (data.col) {
      case "name":
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, who: event.target.value }
        });
        break;
      case "phone":
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, phone: event.target.value }
        });
        break;
      case "pic":
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, pic: event.target.value }
        });
        break;
      case "designation":
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, designation: event.target.value }
        });
        break;
      case "bloodgrp":
        this.setState({
          updateEmployeeData: { ... this.state.updateEmployeeData, bloodgrp: event.target.value }
        });
        break;
    }
  }

  callAddEmployeeAPI = (addEmpData) => {
    console.log(addEmpData);
    addEmpData.ID = 0;
    this.axiosinstance.post('employee', addEmpData)
      .then((response) => {
        this.callGetEmployeeAPI(); //refresh the values
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  callUpdateEmployeeAPI = (updateEmpData) => {

    this.axiosinstance.put('employee', updateEmpData)
      .then((response) => {
        this.callGetEmployeeAPI(); //refresh the values
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  callGetEmployeeAPI = () => {
    console.log('callGetEmployeeAPI');
    this.axiosinstance.get('employee/getemployees')
      .then((response) => {
        this.setState({
          employeeArr: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  callDeleteEmployeeAPI = (EmpID) => {

    this.axiosinstance.delete('employee/' + EmpID)
      .then((response) => {

        this.setState({
          isHidden: true,
          deleteEmpID: -1,
          showDeleteConfirmation: false
        });
        //fill employeearray with fresh values
        this.callGetEmployeeAPI();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var cards = [];
    cards = this.state.employeeArr.map((emp, index) => {
      return (<EmployeeCard setParentIsEdit={this.setStateIsEdit} confirmdeleteEmployee={this.confirmdeleteEmployee} user={emp} key={index} />);
    })

    return (
      <div>
        {this.state.showDeleteConfirmation &&
          <div class="row">
            <div class="col-sm-4" >
            </div><div class="cd-popup col-sm-4" >
              <div class="cd-popup-container" role="alert">
                <p>Are you sure you want to delete this element?</p>
                <ul class="cd-buttons">
                  <li><a href="#0" onClick={e => this.deleteEmployee()}>Yes</a></li>
                  <li><a href="#0" onClick={e => this.hidedeleteEmployeeConfirmation()}>No</a></li>
                </ul>
                <a href="#0" class="cd-popup-close img-replace" onClick={e => this.hidedeleteEmployeeConfirmation()}>Close</a>
              </div> {/*cd-popup-container  */}
            </div> {/* cd-popup  */}
            <div class="col-sm-4" >
            </div>
          </div>
        }

        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-4"><div class="CardContainer">{cards}</div></div>
          {/* <div class="col-sm-6">{editview}</div> */}
          {/* this is smart component */}
          {/* {!this.state.isHidden && <div class="col-sm-6"><AddEditEmployeeSmart ParentUpdateEmp={this.updateEmployee} user={this.state.updateEmployeeData} hideAddEditComponent={this.hideAddEditComponent} /></div>} */}

          {/* this is dumb component version */}
          {!this.state.isHidden && <div class="col-sm-6">
            <AddEditEmployee ParentUpdateEmp={this.updateEmployeeforDumbVersion}
              user={this.state.updateEmployeeData}
              hideAddEditComponent={this.hideAddEditComponent}
              handleChangefromDumbCompTextBox={this.handleChangefromDumbCompTextBox} />
          </div>}
          <div class="col-sm-1"><button class="btn btn-primary" type="button" onClick={e => this.addEmployee()}>Add New Employee</button></div>

        </div>

      </div>
    );
  }

}