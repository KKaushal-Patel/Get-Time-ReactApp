import React, { useState } from "react";

// const getTime = new Date().toLocaleTimeString();

const App = () => {
  const state = useState();

  const [time, setTime] = useState(0);

  const getNewTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <h2 className="heading_style"> What time is it ??</h2>

      <div className="div_container">
        <h1 className="In_h1"> {time}</h1>
        <button className="button_prop" onClick={getNewTime}>
          Get Time
        </button>
      </div>
    </>
  );
};

export default App;

//Increase number project component ===========================================================

// import React, { useState } from "react";

// const App = () => {
//   // hook 👇
//   const state = useState(); //useState is array that return two items: state obj and function
//   // console.log(state);
//   const [count, setCount] = useState(0); //useState(init val)= init val goes into c0ount,
//   // setCount is fun and whatever we pass in fun that is our updated value.
//   // let count = 0;
//   const IncNum = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <div className="div_container">
//         <h1 className="In_h1"> {count} </h1>
//         <button className="button_prop" onClick={IncNum}>
//           Click Me
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

// ==========================================================================

// Slot Machine Project:

// import React from "react";
// import SlotM from "./SlotMac";

// const App = () => {
//   return (
//     <>
//       <h1 className="heading_style">
//         Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine</span> game
//       </h1>
//       <SlotM x="😂" y="😂" z="😂" />
//       <SlotM x="😂" y="😂" z="👦" />
//       <SlotM x="💥" y="💥" z="💥" />
//       <SlotM x="😂" y="😜" z="😂" />
//     </>
//   );
// };

// export default App;
