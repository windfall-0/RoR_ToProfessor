Rails.application.routes.draw do

  root 'posts#main'

  get 'posts/main'
  post 'posts/create'
  get 'posts/page/:id' => "posts#page"
  post 'posts/delete/:id' => "posts#delete"
end
