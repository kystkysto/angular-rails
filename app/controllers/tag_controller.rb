class TagController < ApplicationController
  before_action :authenticate_user!, :except => [:index, :show]

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
  end

  def show
  end
end