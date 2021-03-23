import React from "react";

const SlotM = (props) => {
  //   let x = "😂";
  //   let y = "😂";
  //   let z = "😂";

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  //Above lines in array destructurig:
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div className="emoji">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>Emoji Matched</h1>
        </div>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <div className="emoji">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>Emoji Not Matched</h1>
        </div>
        <hr />
      </>
    );
  }
};

export default SlotM;
