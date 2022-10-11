import React from "react";
const Alert = (props) => {
  //add the condition inside this function
  if (props.show === false) {
    return null;
  } else {
    // return here the component html
    return (
      <div className="alert alert-danger" role="alert">
        {props.text}
      </div>
    );
  }
};

export default Alert;
