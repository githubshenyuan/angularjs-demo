define(['angular','util1'],function (angular) {
    // 这里声明一个名为 myApp 的模块，并且依赖 util 模块
    var app = angular.module('myApp',['util-demo']);
    // 这里 在controller 中注入 $$util 的服务
    app.controller('parent_myCtl',[]
    app.controller('son_myCtl',function ($scope) {
        console.log($scope.name);
    });
    alert("加载business");
});