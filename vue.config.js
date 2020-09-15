module.exports = {
    devServer:{
        open:true,
        proxy:{
            '/dianying':{
                target:'https://m.maoyan.com',
                changeOrigin : true
            }
        }
    }
}