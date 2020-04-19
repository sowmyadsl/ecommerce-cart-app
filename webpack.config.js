const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
    }
  }
};
const entry = {
  ProductDetail: ["./src/js/components/ProductDetail.component.js"]
};
module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    publicPath: "/"
  },
  optimization,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization"
    }
  },
  resolve: {
    alias: {
      Images: path.resolve(__dirname, "src/public/images"),
      UI: path.resolve(__dirname, "src/js/components/UI"),
      Components: path.resolve(__dirname, "src/js/components/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Actions: path.resolve(__dirname, "src/js/actions/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
