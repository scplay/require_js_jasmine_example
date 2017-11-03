define([], function modC() {
	console.log('Mod Car defined');

	function Car() {
		this.wheels = 4;
		this.brand = 'Benz'
	}

	Car.prototype = {
		run(){
			console.log(this.wheels + ' wheels car is runing');
		}
	}

	return Car
});

