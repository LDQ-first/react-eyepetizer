const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
    filename: '/static/css/main.[name].[contenthash:8].css'
})
const extractSASS = new ExtractTextPlugin({
    filename: '/static/css/sass.[name].[contenthash:8].css'
})

module.exports =  {
    devtool: 'source-map',
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].js',
        publicPath: '/react-eyepetizer/dist/'
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
        rules: [ {
            test: /\.(js|jsx)$/,
            use: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
            include: path.join(__dirname, '../src'),
            exclude: /node_modules/
        }, 
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true //压缩
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /\.css$/],
                use: extractSASS.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            minimize: true //压缩
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
            test: /\.(png|svg|jpe?g|gif|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '/static/img/[name].[sha512:hash:base64:7].[ext]',
                            minimize: true //压缩
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)((-|\?)?.*)?$/,
                exclude: /static\/img/,
                loader: 'url-loader',
                options: {
                    name: '/static/css/fonts/[name].[hash:8].[ext]',
                    minimize: true //压缩
                }
            },{
                test: /\.json$/,
                exclude: '/node_modules/',
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist'],　 //匹配删除的文件
            {
                root: process.cwd(),       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }),
        extractCSS,
        extractSASS,
        new webpack.BannerPlugin("author by ldq-first"),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require('autoprefixer')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template:  path.join(__dirname, '../index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../static'),
                to: path.join(__dirname, '../dist/static/'),
              //  ignore: ['.*']
            }
        ]),
        
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       })
    ]
}



