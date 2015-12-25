var webpack = require("webpack");
var path = require('path');

module.exports = {

     
  entry: ['webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  'webpack/hot/dev-server','./main.js'],
  output: {
    path:path.join(__dirname, 'public'),
    publicPath : "http://localhost:3000/myproject/reactdemo/public/",
    filename: 'bundle.js'
  },

  module: {

    loaders: [
      {
        test:/\.javas$/,loader:"raw-loader"
      },
      { test: /\.jsx$/, loader: 'react-hot!babel?presets=react' },
      {
        test:/\.png$/,loader:"url-loader?limit=8142"
      },
        {
        test:/\.css$/,loader:"style-loader!css-loader"
      },{
        test: require.resolve('react'), loader: 'expose?React'
      },{
        test: require.resolve('react-dom'), loader: 'expose?ReactDOM'
      },{
        test: require.resolve('jquery'), loader: 'expose?$'
      }
    ]
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin()
]
 
};
