class HomeController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def index
    render "edit"
  end

  def show
  end
end
