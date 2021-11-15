Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "notes#index"
  get "/notes", to: "notes#index"
  get "/notes/new", to: "notes#new"
  post "/notes", to: "notes#create"
  delete "/notes/:id", to: "notes#destroy"

end
