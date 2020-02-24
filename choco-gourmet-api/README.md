# README

CHOCO GOURMET

A chocolate store created by a chocolate lover. This web app is made for those with good chocolate taste that prefer to choose among a lot of types of chocolates.

Installation:

Backend 

rails new choco-gourmet --api
Install 'gem rack-cors'
Run bundle install
Inside of config/initializers/cors.rb uncomment the code

Frontend

mkdir choco-gourmet-js
cd choco-gourmet-js
touch index.html
mkdir src
touch src/index.js

Created directory for every model/table at components ( customers.js, customer.js, chocolate.js, chocolates.js, order.js, orders.js)

Created adapters: ChocolatesAdapters, CustomersAdapters, OrdersAdapters

Connected Rails and Javascript making Fetch requests

Built with:

This project is built with rails/javaScript

How to use:

Customers can interact with the app through events like clicking the buy button to buy the chocolate desired

