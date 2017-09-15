const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
    filename: 'static/css/main.[name].[contenthash:8].css'
})
const extractSASS = new ExtractTextPlugin({
    filename: 'static/css/sass.[name].[contenthash:8].css'
})


module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
        // ================================
        // 自定义路径别名
        // ================================
        '@': path.join(__dirname, '../src')
        }
    },
     module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
            include: path.join(__dirname, '../src'),
            exclude: /node_modules/
        }, {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true                         
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSASS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, // 10KB 以下使用 base64
                            name: 'img/[name].[sha512:hash:base64:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)((-|\?)?.*)?$/,
                exclude: /static\/img/,
                loader: 'url-loader',
                options: {
                    name: 'css/fonts/[name].[hash:8].[ext]'
                }
            },{
                test: /\.json$/,
                exclude: '/node_modules/',
                loader: 'json-loader'
            }]
    },
    plugins: [
        new webpack.BannerPlugin("author by ldq-first"),
        extractCSS,
        extractSASS,
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require('autoprefixer')
            }
        }),
        new HtmlWebpackPlugin({
            template:  path.join(__dirname, '../index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../static'),
                to: path.join(__dirname, '../dist/static/'),
              //  ignore: ['.*']
            }
        ]),
        new webpack.HashedModuleIdsPlugin(),
        //这个plugin是用于引入dll里生成的json的。
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../static/public/js/vendor-mainfest.json')  // 指向这个json
        })
    ]
}