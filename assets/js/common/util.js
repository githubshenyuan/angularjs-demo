define(['angular'],function (angular) {
    // 这里声明一个 名为：util 的模块
    var util = angular.module('util-demo',[]);
    // 这里生成 一个名为：$$util 的服务，返回一个 al() 方法
    util.factory('$$util',function () {
        return {
            al: function () {
                console.log("执行utils 模块 al() ，"+"顺序："+count());
            }
        };

    });
    console.log("utils  模块加载，"+"顺序："+count());
});