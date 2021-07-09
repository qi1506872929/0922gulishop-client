module.exports = {
    lintOnSave: false, // 禁用eslint

    devServer: {
        // host: '0.0.0.0',
        // port: 8080,
        proxy: {
            "/api": {
                // target: "http://182.92.128.115",
                target: "http://123.57.205.78",
                // target: "http://localhost:8001",
                // pathRewrite: {
                //     "^/api": ""
                // }
            }
        }
    }
}