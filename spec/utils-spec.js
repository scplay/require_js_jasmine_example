/**
 * 用 jasmine 测试require js 的模块

 * @link https://jasmine.github.io/api/2.8/global.html#implementationCallback

 * xdescribe to skip hole file
 */
describe('test require js module utils', function(){

	const rjs = require('requirejs');
	const path = require('path');

	rjs.config({
		
		baseUrl : path.resolve( __dirname, '../js/modules'),

		//Pass the top-level main.js/index.js require
	    //function to requirejs so that node modules
	    //are loaded relative to the top-level JS file.
		nodeRequire: require
	});

	beforeAll(function() {
		console.log(`\/**
 * BEGIN TEST
 * ZEON WANG IS WATCHING
 * JASMINE IS A JS UNIT TEST FRAME WORK
 */`);
	});

	it('test_utils_add_function', function(done){

		// console.log(this.add);   // you can add helpers in helpers folder xx.js beforeAll beforeEach function

		rjs(['utils/utils'], function(utils){
			expect(utils.mod).toBe('utils');

			done();
		})

		// fail('ok is suck');  // if you want to fail 
	});

	// xit('this not done yet');

}, jasmine.DEFAULT_TIMEOUT_INTERVAL); // 等待失败的延迟 默认 5000