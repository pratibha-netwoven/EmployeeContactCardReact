import React from 'react';

export const EmployeeCard = (props) => {
    //console.log(props);
    return (
        // <div className={empstyles.cardcolor}>

        //     <div> 
        //         <img className="twitter" src={props.user.pic} width="40" alt="twitter"/>
        //         <ul>
        //         <li>{props.user.who}</li>
        //         <li>{props.user.phone}</li>
        //         </ul>
        //         </div>
        // </div>
        //         <div>
        // <div className="cardcolor">
        //         <table width="100%"> 
        //             <tr><td colspan="3">{props.user.who}</td></tr>
        //             <tr>
        //                 <td colSpan="2"><img src={require('../../images/'+props.user.pic)} width="40" alt=""/></td>
        //                 <td><ul>
        //                         <li><b>Contact:</b> {props.user.phone}</li>
        //                          <li><b>Designation:</b> {props.user.designation}</li>
        //                     </ul>
        //                     <button type="button" className="btn btn-primary">Primary</button>
        //                 </td>
        //             </tr>
        //         </table>

        //         </div>
        //           <span><br/></span>
        //           </div>

    <div>
        <div className="cardcolor">
                <div><b>{props.user.who}</b></div>
           
            <div class="row">
                <div class="col-sm-4"><img src={'../images/' + props.user.pic} width="100" alt="" /></div>
                <div class="col-sm-8">
                <div class="row"> <div class="col-sm-12"><b>Contact:</b> {props.user.phone}</div></div>
                <div class="row"> <div class="col-sm-12"><b>Designation:</b> {props.user.designation}</div></div>
                <div class="row"> <div class="col-sm-12"><b>Blood Group:</b> {props.user.bloodgrp}</div></div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-2"><button align="right" class="glyphicon glyphicon-pencil" type="button" onClick={e=> props.setParentIsEdit(props.user.ID,e)}></button></div>
                <div class="col-sm-2"><button type="button" class="glyphicon glyphicon-remove" onClick={e=>props.confirmdeleteEmployee(props.user.ID,e)}></button></div>
                <div class="col-sm-6"></div>
                </div>
            </div>
        </div>
        <span><br /></span>
          </div >
    );

    editEmployee = (user,e) => {

    }
}   