angular
	.module('hookah')
	.factory('genTobacco', function(){
		var getTobacco = function(flavour, mood){
			switch(flavour){
				case 'Sweet':
					switch(mood){
						case 'Funny':
							return "White Peach";
						break;
						case 'Romantic':
							return "Strawberry";
						break;
						case 'Sad':
							return "White Gummi Bear";
						break;
						case 'Angry':
							return "Island Papaya";
						break;
						case 'Drunk':
							return "Guava";
						break;
						case 'Happy':
							return "Tropical Mango";
						break;
					}
				break;
				case 'Bitter':
					switch(mood){
						case 'Funny':
							return "Tonic";
						break;
						case 'Romantic':
							return "Chocolate";
						break;
						case 'Sad':
							return "Grapefruit";
						break;
						case 'Angry':
							return "Coffee";
						break;
						case 'Alone':
							return "Citrus peels";
						break;
						case 'Crazy':
							return "Lemon";
						break;
						case 'Drunk':
							return "Melon";
						break;
						case 'Happy':
							return "Wine";
						break;
					}
				break;
				case 'Fresh':
					switch(mood){
						case 'Funny':
							return "Tropical Punch";
						break;
						case 'Romantic':
							return "Island Papaya";
						break;
						case 'Sad':
							return "Ambrosia";
						break;
						case 'Angry':
							return "Blackberry";
						break;
						case 'Alone':
							return "Jasmine";
						break;
						case 'Crazy':
							return "Plum";
						break;
						case 'Drunk':
							return "Mint Chocolate Chill";
						break;
						case 'Happy':
							return "Mint";
						break;
					}
				break;
				case 'Sour':
					switch(mood){
						case 'Funny':
							return "Citrus Mint";
						break;
						case 'Romantic':
							return "Citrus Tea";
						break;
						case 'Sad':
							return "Grape";
						break;
						case 'Angry':
							return "Lemon";
						break;
						case 'Alone':
							return "Mandarin";
						break;
						case 'Crazy':
							return "Lime";
						break;
						case 'Drunk':
							return "Cherry";
						break;
						case 'Happy':
							return "Nectarine";
						break;
					}
				break;
				}
			}
		return {
			getTobacco: getTobacco
		}
	});