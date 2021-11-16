 import React from "react"

 const Note = (props) => {
   const { title, description } = props.note;
   return (
     <div>
       <h1>{title}</h1>
       <p>{description}</p>
     </div>
   )
 };

 export default Note;