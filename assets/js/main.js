require.config({
    baseUrl: '',
    paths: {
        'business':'assets/js/common/business',
        'policy':'assets/js/common/policy',
        'util1':'assets/js/common/util',
        'angular': 'assets/js/angular/angular'
    },
    shim: {
        'angular':{
            exports: 'angular'
        }
    }
});
require(['business','angular','policy','util1'],function (business,angular,policy,util) {

    alert("加载完成");
});