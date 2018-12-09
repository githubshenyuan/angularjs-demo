define(['angular','util1'],function (angular) {
    // 这里声明一个名为 myApp 的模块，并且依赖 util 模块
    var app = angular.module('myApp',['util-demo']);
    // 这里 在controller 中注入 $$util 的服务
    app.controller('parent_myCtl',function () {
        console.log("app 父类 controller 加载，"+"顺序："+count());
    });
    app.controller('son_myCtl',function ($scope) {
        console.log("app controller 加载，"+"顺序："+count());

    });
    app.run(['$rootScope','$timeout',function ($rootScope,$timeout) {
        $rootScope.au_name="sh";
        console.log( $rootScope.au_name+" run方法执行，"+"顺序："+count());
        $timeout(function () {
            $rootScope.au_name="变变";
            console.log( $rootScope.au_name+" run延迟方法执行，"+"顺序："+count());
        },5000);
    }]);
    app.config();
    console.log("business 模块加载，"+"顺序："+count());
});