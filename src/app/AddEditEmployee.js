import React from 'react';

export const AddEditEmployee = (props) => {
    // console.log(props);
    return (
        <div className="container">
            <div class="jumbotron"><b>Edit Employee Records</b></div>
            <div>
                <label for="usr">Name:</label>
                <input type="text"   class="form-control"  onChange={e=>props.handleChangefromDumbCompTextBox({col:"name"},e)} id="usr" value={props.user.who} />
                {/* <input type="text"   defaultValue={props.user.who} /> */}
            </div>
            <div>
                <label for="phn">Contact:</label>
                <input type="text" class="form-control" id="phn" onChange={e=>props.handleChangefromDumbCompTextBox({col:"phone"},e)} value={props.user.phone} />

            </div>
            <div>
                <label for="desig">Designation:</label>
                <input type="text" class="form-control" id="desig" onChange={e=>props.handleChangefromDumbCompTextBox({col:"designation"},e)} value={props.user.designation} />

            </div>
            <div>
                <label for="bg">Blood Group::</label>
                <input type="text" class="form-control" id="bg" onChange={e=>props.handleChangefromDumbCompTextBox({col:"bloodgrp"},e)} value={props.user.bloodgrp} />

            </div>
            <button type="button" class="btn btn-success" onClick={e=> props.ParentUpdateEmp()}>Save</button>
            <button type="button" class="btn btn-danger" onClick={e=>props.hideAddEditComponent({cancel:"y"},e)}>Cancel</button>
        </div>
    );

   
}