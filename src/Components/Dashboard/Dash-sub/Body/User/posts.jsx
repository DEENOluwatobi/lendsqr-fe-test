import React from 'react'
import {KeyboardDoubleArrowDown, MoreVert} from "@mui/icons-material"
import './posts.scss'

export const Posts = ({posts, loading}) => {
    if(loading){
        return (
            <p>Loading...</p>
        )
    }
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
                {posts.map(post => (
                  <tr key={post.id}>
                    <td className='td'>{post.orgName}</td>
                    <td className='td'>{post.profile.firstName + " " + post.profile.lastName}</td>
                    <td className='td'>{post.email}</td>
                    <td className='td'>{post.phoneNumber}</td>
                    <td className='td'>{post.lastActiveDate}</td>
                    <td className='td'>{post.employmentStatus}</td>
                    <td className='td'><MoreVert/></td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
  )
}
