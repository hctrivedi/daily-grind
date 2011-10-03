var d = function(_var_){
	console.log(_var_);
};

window.addEvent('domready', function(){
	var dateInputs = $$('input.date-picker');
	if (dateInputs.length > 0) {
		dateInputs.set('readonly', true);
		
		dateInputs.each(function(di){
			var dobj = {
			    timePicker: true,
			    positionOffset: {x: 5, y: 0},
			    pickerClass: 'datepicker_dashboard',
			    useFadeInOut: !Browser.ie
			};
			var format = di.get('data-format');
			if (format) {
				dobj.format = format;
			}
			d(dobj);
			new Picker.Date(di, dobj);
		});
	}
	
	var flashMessages = $$('.flash-message:not(.nofade)');
	if (flashMessages) {
		flashMessages.set('morph', {duration: 'long', onComplete: function(){
			this.element.dispose();
		}});
		(function(){
			flashMessages.morph({
				height:0,
				paddingTop:0,
				paddingBottom:0,
				margin:0,
				opacity:0,
				borderBottomWidth:0
			});
		}).delay(3000);
	}
	
});