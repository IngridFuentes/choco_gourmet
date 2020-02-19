class Api::V1::OrdersController < ApplicationController
    def index 
    @orders = Order.all
    ender json: @orders, status: 200

    end

    def show 
    @order = Order.find(params[:id])
    ender json: @order, status: 200

    end
end
