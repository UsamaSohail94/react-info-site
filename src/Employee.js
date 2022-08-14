import React from "react";

function Employee(props) {
    return(
        <div>
            <h2>Name: {props.Name}</h2>
            <h2>Job Title: {props.JobTitle}</h2>
        </div>
        )
}

export default Employee