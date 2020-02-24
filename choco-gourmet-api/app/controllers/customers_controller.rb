class Api::V1::CustomersController < ApplicationController
  def login
    customer = Customer.find_or_create_by(customer_params)
    render json: customer, status: 200
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :email)
  end
end
