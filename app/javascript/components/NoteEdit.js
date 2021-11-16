import React from "react";

const NoteEdit = (props) => {
   const { id, title, description } = props.note;

   return (
     <div>
       <h1>Edit Note</h1>
       <form action={`/notes/${id}`} method="post">
         <input type="hidden" name="_method" value="patch" />
         <p>Title</p>
         <input defaultValue = {title} name = 'note[title]' />
         <p>Description</p>
         <textarea defaultValue = {description} name = 'note[description]' />
         <button type = 'submit'>add</button> 
        </form>
     </div>
   );
};

export default NoteEdit;