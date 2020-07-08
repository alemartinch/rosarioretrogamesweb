const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  // mode: "development" | "production"
  output: {
    path: path.join(__dirname, "dist"), //__dirname es una constante de NODE, marca la ruta absoluta
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: false
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/img",
              useRelativePath: true
            }
          },
          // {
          //   loader: "image-webpack-loader",
          //   options: {
          //     // mozjpeg: {
          //     //   progressive: true,
          //     //   quality: 65
          //     // },
          //     // // optipng.enabled: false will disable optipng
          //     // optipng: {
          //     //   enabled: true
          //     // },
          //     // pngquant: {
          //     //   quality: "60",
          //     //   speed: 4
          //     // },
          //     // gifsicle: {
          //     //   interlaced: false,
          //     // },
          //     // the webp option will enable WEBP
          //     webp: {
          //       quality: 20
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.(webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].webm",
              outputPath: "static/media",
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
      favicon: "./src/favicon.ico", //Adds the given favicon path to the output HTML
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    })
  ]
};
