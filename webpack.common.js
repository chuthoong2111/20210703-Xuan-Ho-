// Webpack uses this to work with directories
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const sass = require('sass')

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
    // Path to your entry point. From this file Webpack will begin his work
    target: 'web',
    entry: {
        ast: ['./src/import/desktop.js'],
    },
    resolve: {
        extensions: ['.scss', '.js', '.json', '.css'],
    },
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        watchContentBase: true,
        port: 9000,
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    partialDirs: [
                        path.join(__dirname, 'src'),
                        path.join(__dirname, 'src', 'layouts'),
                        path.join(__dirname, 'src', 'components'),
                        path.join(__dirname, 'src', 'partials'),
                    ],
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],

                        // plugins: ["@babel/plugin-proposal-object-rest-spread"],
                        plugins: [
                            '@babel/plugin-transform-async-to-generator',
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                        ],
                    },
                },
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,

                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: 'css-loader',
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: 'postcss-loader',
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                // Now we apply rule for images
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images',
                            name: '[name].[ext]',
                            publicPath: '../images/',
                        },
                    },

                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                            publicPath: '../fonts/',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            // Popper: ['popper.js', 'default'],
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {},
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/images',
                    to: './assets/images',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/index.hbs',
            chunks: ['ast'],
            filename: 'index.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tintuc.hbs',
            chunks: ['ast'],
            filename: 'tintuc.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/decor.hbs',
            chunks: ['ast'],
            filename: 'decor.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tour-detail.hbs',
            chunks: ['ast'],
            filename: 'tour-detail.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/country-detail.hbs',
            chunks: ['ast'],
            filename: 'country-detail.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/codong-list.hbs',
            chunks: ['ast'],
            filename: 'codong-list.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/codong-detail.hbs',
            chunks: ['ast'],
            filename: 'codong-detail.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/sanpham.hbs',
            chunks: ['ast'],
            filename: 'sanpham.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/sanpham-list.hbs',
            chunks: ['ast'],
            filename: 'sanpham-list.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/sanpham-detail.hbs',
            chunks: ['ast'],
            filename: 'sanpham-detail.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/baohanh.hbs',
            chunks: ['ast'],
            filename: 'baohanh.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tracuu.hbs',
            chunks: ['ast'],
            filename: 'tracuu.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tuyendung.hbs',
            chunks: ['ast'],
            filename: 'tuyendung.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tuyendung-detail.hbs',
            chunks: ['ast'],
            filename: 'tuyendung-detail.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/lienhe.hbs',
            chunks: ['ast'],
            filename: 'lienhe.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/lichsu.hbs',
            chunks: ['ast'],
            filename: 'lichsu.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/dangky.hbs',
            chunks: ['ast'],
            filename: 'dangky.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/dangnhap.hbs',
            chunks: ['ast'],
            filename: 'dangnhap.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/chondangky.hbs',
            chunks: ['ast'],
            filename: 'chondangky.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/dangky-daily.hbs',
            chunks: ['ast'],
            filename: 'dangky-daily.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/quetqr.hbs',
            chunks: ['ast'],
            filename: 'quetqr.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/quetqr-2.hbs',
            chunks: ['ast'],
            filename: 'quetqr-2.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/baohanh2.hbs',
            chunks: ['ast'],
            filename: 'baohanh2.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tracuu2.hbs',
            chunks: ['ast'],
            filename: 'tracuu2.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/test.hbs',
            chunks: ['ast'],
            filename: 'test.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/thucteao.hbs',
            chunks: ['ast'],
            filename: 'thucteao.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tuvanthietke.hbs',
            chunks: ['ast'],
            filename: 'tuvanthietke.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/congtrinh.hbs',
            chunks: ['ast'],
            filename: 'congtrinh.html', //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/tuvanthietke-detail.hbs',
            chunks: ['ast'],
            filename: 'tuvanthietke-detail.html', //relative to root of the application
        }),
    ],
}
