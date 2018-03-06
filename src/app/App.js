import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from '../images/NetwovenLogo.jpg';
// import styles from '../../css/app.css';
// import empstyles from '../../css/emp.css';
import styles from '../css/app.css';
import empstyles from '../css/emp.css';
import { EmployeeCard } from './EmpCard';
import {ContactCardContainer} from './ContactCardContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      // <div className={styles.app}>
      //   <p>Hello from react CardContainer</p>
      //   <span className={styles.turnpink}>hello im pink</span>
      //   <span className={empstyles.empname}>hello im yellow</span>
      //   <ul>
      //           <li>
      //           <a href="https://twitter.com/letsbsocial1" target="_blank">
      //                   <img className="twitter" src={twitter} width="40" alt="twitter"/>
      //               </a>
      //           </li>
      //           </ul>

      //           <ContactCardContainer />
      // </div>
     <div>
      <div class="row container">
        <div class="col-sm-12 textcenter jumbotron"><span><b>Employee List</b> </span></div>
      </div>
      
      <div><ContactCardContainer /></div>
      {/* <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-4"><ContactCardContainer /></div>
      <div class="col-sm-6"></div>
      </div> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('app')); 