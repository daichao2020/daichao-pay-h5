const CompressionPlugin = require("compression-webpack-plugin");

const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}


module.exports = {
	devServer: {
		proxy: {
			'/api': {
				//target: 'http://idc.wonderloan.top/api',
				target: 'http://idc.unboundedloan.xyz/api',
				ws: false,//是否代理websockets
				changeOrigin: true,   // 设置同源  默认false，是否需要改变原始主机头为目标URL
				pathRewrite:{
					'^/api':''
				}
			}
		},
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
		plugins: [
			new CompressionPlugin({
				test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
				threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
				deleteOriginalAssets: false // 是否删除原文件
			})
		]
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
				@import "~@/assets/styles/_variable.scss";
				`
			}
		}
	}
}
