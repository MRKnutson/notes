import React from "react";

const Notes = (props) => {
  console.log(props.notes);
 
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
      <div>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
        );
    });
  };

  return <div>
    <p>Notes: {renderNotes()}</p>;
  </div>
};

// export component
export default Notes;