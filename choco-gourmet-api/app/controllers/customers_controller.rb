class Api::V1::CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render json: @customers, status: 200
  end

  def show
    @customer = Customer.find(params[:id])
    ender json: @customer, status: 200
  end
end
