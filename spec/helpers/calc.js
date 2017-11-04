/** 在任何测试中，都可以使用的辅助方法，需要提前赋值给jasmine的this */
beforeAll(function(){
	this.add = sum;
})

/** 这个sum不会成为全局方法的 */
function sum(a, b) {
	return a + b;
}
