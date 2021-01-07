class PostsController < ApplicationController
  def main
    @postli = Post.all
  end

  def create
    Post.create(title: params[:title], desc: params[:desc], pw: params[:pw])
    redirect_to "/posts/main"
  end

  def page
    @postli = Post.all
    @post = Post.find(params[:id])
  end

  def delete
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to "/posts/main"
  end
end