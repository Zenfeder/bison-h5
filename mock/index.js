const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    http = require('http').Server(app);

app.use(express.static('static'));

app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, platform, Authorization");
    if(req.method=="OPTIONS") {
        res.json({
            message: '这是个预检请求'
        })
    }else{
        next();
    }
});
app.use(function(req, res, next) {
    console.log(req.path);
    
    let reqPathArr = req.path.split('/'), 
        reqApi = '',
        reqMethod = req.method,
        reqQuery = req.query,
        reqBody = req.body;

    let data = (reqMethod=='POST' || reqMethod=='PUT')  ? reqBody : reqQuery;
    let params = '';
    
    for(let i = 1; i < reqPathArr.length; i++) {
        let regStr = /^[A-z]|\++$/;
        let regIncludeNum = /[0-9]+/;
        let reqPathItem = reqPathArr[i];
        // 获取restful api中的params参数
        if(regIncludeNum.test(reqPathItem)) {
            params = reqPathItem;
        }
        // 忽略restful api中的params参数
        if(regStr.test(reqPathItem)&&!regIncludeNum.test(reqPathItem)){
            // console.log(reqPathArr)
            let firstLetterUpper = (i == 1) ? reqPathArr[i][0] : reqPathArr[i][0].toUpperCase();
            reqApi += (firstLetterUpper + reqPathArr[i].substring(1, reqPathArr[i].length)); 
        }
    }

    res.json(require('./data/'+reqApi)({
        reqMethod: reqMethod,
        data: data,
        params: params,
    }))
    res.end()
    next()
});

http.listen(3001, function() {
    console.log('mock server启动端口: 3001');
});