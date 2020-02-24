class Api::V1::OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders, status: 200
  end

  def show
    @order = Order.find(params[:id])
    render json: @order, status: 200
  end

  def new
  end

  def edit
    @order = Order.find(params[:id])
    render json: @order, status: 200
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order, status: 200
    end
  end

  def update
    @order = Order.find(params[:id])
    @order.update(order_params)
    render json: @order, status: 200
  end

  private

  def order_params
    params.require(:order).permit(:id, :customer_id, :chocolate_id, :quantity, :total)
  end
end
