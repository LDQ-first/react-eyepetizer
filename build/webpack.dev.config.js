const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const devConfig = (baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
             path.join(__dirname, '../src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash:8].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        /*contentBase: path.join(__dirname, '../dist'),*/
        historyApiFallback: true,
        host: '0.0.0.0',  //手机局域网访问 http://10.30.4.227:5050
        hot: true,
        /*inline: true, //实时刷新*/
        port: 5000
    }
})


module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b
        }
        return undefined
    }
})(baseConfig, devConfig)