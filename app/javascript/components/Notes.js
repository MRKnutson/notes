import React from "react";

const Notes = (props) => {
  console.log(props.notes);
 
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
      <div  style ={{margin: "20px", border: '1px solid'}}>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <a href = {`/notes/${note.id}`} data-method="delete">Delete Note</a>
      </div>
        );
    });
  };

  return <div>
    <a href = 'notes/new'> Add a Note</a>
    <p>Notes: {renderNotes()}</p>;
  </div>
};

// export component
export default Notes;