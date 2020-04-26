import Request from './request'

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
	// config.baseUrl = 'http://chat.bo5.xyz' /* 服务 */
	config.baseUrl = 'http://localhost:8081' /* 本地 */
	config.header = {
		...config.header,
	}
	return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
	  cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	if (response.data.code !== 0) { // 服务端返回的状态码不等于200，则reject()
		return Promise.reject(response)
	}
	if (response.statusCode !== 200) { // 服务端返回的状态码不等于200，则reject()
		//  刷新token
		// 提示其他
	}
	// if (response.config.custom.verification) { // 演示自定义参数的作用
	//   return response.data
	// }
	return response.data
}, (response) => { // 请求错误做点什么
	return response
})

export {
	http
}
