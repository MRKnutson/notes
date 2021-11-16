class NotesController < ApplicationController

  def index
    notes = Note.all
    render component: "Notes", props:{ notes: notes }
  end

  def new
    render component: "NewNotes"
  end

  def create
    Note.create(title: params[:note][:title], description: params[:note][:description])
    redirect_to notes_path
  end

  def show
    note = Note.find(params[:id])
    render component: "Note", props: { note: note }
  end 

  # def edit
  #   @note = Note.find(params[:id])
  #   render component: "NoteEdit", props: { note: @note }
  # end

  # def update
  #   @note = Note.find(params[:id])
  #   if @note = Note.find(notes_params)
  #     redirect_to notes_path
  #   else
  #     render component: "NoteEdit", { props: @note }
  # end


  def destroy
    Note.find(params[:id]).delete
    redirect_to notes_path
  end
  

end
