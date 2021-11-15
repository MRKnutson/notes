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

  

end
