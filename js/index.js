"use strict"

/**
 * require js docs
 * @link http://requirejs.org/docs/api.html#pageload
 */ 
requirejs.config({
	// 所有模块的相对路径
    baseUrl: 'js/modules',

    // 模块id : 相对路径 , 最后的 .js 需要省略(而且好像不能写的)
    paths: {
    	
    	modA: 'mod-a',  // 可省略 .js 后缀

    	modC: '/js/modules/mod-c', 

    	// 此处可写网址 http https // 都可以
        jquery: '//code.jquery.com/jquery-3.2.1.min', 

        helper: 'utils/utils' // 如果模块 define 的时候自定义了名字，必须使用其定义好的名字，不然加载出来的是 undefined
    }
});


require([
	'modA', // config 中 path 的 key 即可找到对应的 path 值的文件

	// 'js/modules/mod-b'  // 相对路径会自动加 .js , 设置了 requirejs.config 就不能用相对路径了
	'/js/modules/mod-b.js',  // 绝对路径不会加 .js 需要显式标明

	'modC',

	'jquery'
], 
/**
 * Main 
 */
function main(...args){
	console.dir(args);
}, 

/**
 *
 */
function handleMainError(...args) {
	console.dir(args);
});



