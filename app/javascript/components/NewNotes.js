import React from "react";

const NewNote = (props) => {
  return (
    <div>
      <h1>New Note Form Here</h1>
      <form action='/notes' method="post">
        <p>Title</p>
        <input name = 'note[title]' />
        <p>Description</p>
        <input name = 'note[description]' />
        <button type = 'submit'>add</button> 
      </form>
    </div>
  );
};

// export component
export default NewNote;