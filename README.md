# ADIDAS CHECKOUT APP

Adidas checkout app is a simple web app that lets customers add a product to the cart. This application demonstrates the core functionality of an e-commerce web shop. Customers can access a product page, select sizes, add items to their cart and check the order summary with total value.

![](public/checkout.gif)

# User Stories

- User can access a product page, and select size and quantity.
- User can add a product to the cart and go to the cart page.
- In the cart page, user can update the quantity of a selected product and view the order summary with total value.
- User can update and delete a product from the cart.

# Local Usage

```
$ git clone https://github.com/sowmyadsl/ecommerce-cart-app.git
$ cd ecommerce-cart-app
$ npm install
```

# Build

```
$ npm run start (development)
$ npm run build (production)
```

# Deploy

- Sign into AWS, go into AWS management console.
- Search for AWS amplify under services.
- Click on deploy and connect git repository.
- Create a buildspec.yml to the root directory of the app.
- Hit save and deploy.
- View the deployed app live on https://master.d20g3qmq89cufa.amplifyapp.com/.

# Things not Covered

- POST /baskets was returning a 403 forbidden error in both dev/prod environments from the server, So I didn't use the REAL api to build the front end for the cart but utilized the product API for obtaining SKUs and available quantities.

# Things to do

- Add Unit tests and validations
- Hook Real API to get basket ID once a product gets added in the cart and then use basket ID and authorization to maintain cart functionality.```
