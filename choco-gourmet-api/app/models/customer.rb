class Customer < ApplicationRecord
    has_many :orders
    has_many :chocolates, through: :orders
end
