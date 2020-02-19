class Api::V1::ChocolatesController < ApplicationController
  def index
    @chocolates = Chocolate.all
    render json: @chocolates, status: 200
  end

  def show
    @chocolate = Chocolate.find(params[:id])
    render json: @chocolate, status: 200
  end

  def create
    @chocolate = Chocolate.new(chocolate_params)
    if @chocolate.save
      render json: @chocolate, status: 200
    end
  end

  def update
    @chocolate = Chocolate.find(params[:id])
    @chocolate.update(chocolate_params)
    render json: @chocolate, status: 200
  end

  def destroy
    @chocolate = Chocolate.find(params[:id])
    @chocolate.delete

    render json: { chocolateId: @chocolate.id }
  end

  private

  def chocolate_params
    params.require(:chocolate).permite(:name, :description, :price)
  end
end
