const path = require('path')
const glob = require('glob')
const {
  merge
} = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const webpack = require("webpack");
// const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, 'src'),

};
module.exports = merge(common, {

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, {
    //     nodir: true
    //   }),
    //   styleExtensions: ['.scss'],
    //   safelist: {
    //     // greedy: [/^col/, /^offset/, /^carousel/, /^modal/, /^blur-up/],
    //     standard: [/blur-up$/, /col$/, /offset$/, /carousel$/, /modal$/, /blur-up$/, /show$/, /fade$/, /modal-backdrop$/],
    //     deep: [/blur-up$/, /col$/, /offset$/, /carousel$/, /modal$/, /blur-up$/, /show$/, /fade$/, /modal-backdrop$/],
    //     greedy: [/blur-up$/, /col$/, /offset$/, /carousel$/, /modal$/, /blur-up$/, /show$/, /fade$/, /modal-backdrop$/]
    //   },
    // }),
    // new HtmlCriticalWebpackPlugin({
    //   base: path.resolve(__dirname, 'dist'),
    //   src: 'index.html',
    //   dest: 'index.html',
    //   inline: true,
    //   minify: true,
    //   extract: true,
    //   width: 375,
    //   height: 565,
    //   penthouse: {
    //     blockJSRequests: false,
    //   }
    // }),
    // new HtmlCriticalWebpackPlugin({
    //   base: path.resolve(__dirname, 'dist'),
    //   src: 'about.html',
    //   dest: 'about.html',
    //   inline: true,
    //   minify: true,
    //   extract: true,
    //   width: 375,
    //   height: 565,
    //   penthouse: {
    //     blockJSRequests: false,
    //   }
    // })

  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    // minimizer: [new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         collapse_vars: false,
    //       }
    //     }
    //   }),
    //   new TerserPlugin(), new CssMinimizerPlugin()
    // ]
  },

  mode: "production",
});