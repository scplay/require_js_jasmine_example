// define(module_id, [denpendencies], modelFunction);
// define([denpendencies], modelFunction);
// define(modelFunction);
define(['helper'], function modA(utils) {
	console.log('Mod A defined');

	console.log(utils);

	return {
		mod : 'a',
	}
});

