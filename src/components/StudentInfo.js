import React from 'react';

function StudentInfo(props) {
    return (<div id="studInfo" name="studInfo" className="studInfo">
    <p><b>Student Name:</b>  {props.user.firstName} {props.user.lastName}<br/>
        <b>Student #:</b>  {props.user.studNum}<br/>
        <b>Student ID:</b>  {props.user.studID}</p>
    </div>);
}

export default StudentInfo;