const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, 'dist'), 
    hot: true,
    port: 9000
  },
  module:{
    rules:[{
        loader: 'babel-loader',
        test: /\.js$|jsx/,
        exclude: /node_modules/,
    }]
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js?$/,
  //       include: [
  //         path.resolve(__dirname, "app")
  //       ],
  //       exclude: [
  //         path.resolve(__dirname, "node_modules")
  //       ],
  //       use: [{

  //         // Actions:
  //         loader: "babel-loader",
  //         // the loader which should be applied, it'll be resolved relative to the context
  //         options: {
  //           presets: ["es2015", "react"]
  //         },
  //         // options for the loader
  //         // apply multiple loaders and options instead
  //         },                    
  //       ]
  //     }
  //   ]
  // },
  plugins:[
     new HtmlWebpackPlugin({
        template: './src/index.html'
     })
  ]
}