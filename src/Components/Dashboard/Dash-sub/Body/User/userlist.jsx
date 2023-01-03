import React, { useState } from 'react'
import "./userlist.scss"
import {KeyboardDoubleArrowDown, MoreVert} from "@mui/icons-material"


class Userlist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
        };
    };
     componentDidMount() {
      fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true
          });
        })
     }
     render() {
      const { DataisLoaded, items} = this.state;
      if(!DataisLoaded) return <div>
        <h5>Please wait...</h5></div>;

      return (
        <div className='user-list'>
          <table className="table">
            <thead>
                <tr>
                  <th><div className="th-con">Organization <KeyboardDoubleArrowDown/></div></th>
                  <th><div className="th-con">Username <KeyboardDoubleArrowDown/></div></th>
                  <th><div className="th-con">Email <KeyboardDoubleArrowDown/></div></th>
                  <th><div className="th-con">Phone Number <KeyboardDoubleArrowDown/></div></th>
                  <th><div className="th-con">Date Joined <KeyboardDoubleArrowDown/></div></th>
                  <th><div className="th-con">Status <KeyboardDoubleArrowDown/></div></th>
                  <th></th>
                </tr>
            </thead>

            <tbody>
              {items.map((item) =>
                  <tr key={item.id}>
                    <td>{item.orgName}</td>
                    <td>{item.profile.firstName + " " + item.profile.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.lastActiveDate}</td>
                    <td>{item.employmentStatus}</td>
                    <td><MoreVert/></td>
                  </tr>
              )}
            </tbody>
          </table>
      
        </div>
      )
    }
    }

export default Userlist 