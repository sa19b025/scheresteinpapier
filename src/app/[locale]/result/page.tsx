import React from "react";

function Result(props: any) {
  return (
    <div>
      <p>State variable from parent component: {props.stateProp}</p>
    </div>
  );
}

export default Result;
