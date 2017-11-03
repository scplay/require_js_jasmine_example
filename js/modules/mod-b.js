define(['modC'], function modBus(Car) {
	console.log('Mod B defined');

	function Bus() {
		this.wheels = 10;
		this.brand = 'BMW';
	}

	Bus.prototype = new Car;

	Bus.prototype.load = () => {
		console.log('this bus can load' + this.wheels + ' people');
	}

	return Bus
});

