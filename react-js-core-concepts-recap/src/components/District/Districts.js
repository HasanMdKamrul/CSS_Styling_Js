import React from 'react';

const districtStyle = {
    backgroundColor : "lightgray",
    padding:"20px",
    margin:"10px",
    borderRadius: "10px"
}

const Districts = ({name,speciality}) => {
    return (
        <div style={districtStyle}>
            <h1>Name:{name} </h1>
            <p>Speciality:{speciality} </p>
        </div>
    );
};

export default Districts;