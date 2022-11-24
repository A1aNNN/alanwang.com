import React from 'react'

// const Box = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

function Box(props) {
    console.log(props, " is the props");
    // let word;
    return <div>{props.word}</div>;
}

export default Box
