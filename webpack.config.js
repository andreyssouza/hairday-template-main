import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { fileURLToPath } from "url"
import CopyWebpackPlugin from "copy-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (env, argv) => {
  const isProduction = argv.mode === 'production'
  
  return {
    target: "web",
    mode: argv.mode || "development",
    
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // Limpa a pasta dist antes de cada build
    },
    
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      liveReload: true,
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve("src", "assets", "scissors.svg"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "assets"),
            to: path.resolve(__dirname, "dist", "src", "assets"),
          },
        ],
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({
        filename: "styles.css"
      })] : [])
    ],
    
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        }
      ]
    }
  }
}