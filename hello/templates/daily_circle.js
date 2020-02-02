// Add X axis --> it is a date format
minDate = new Date(2020, 01, 03, 00, 00, 00, 00);
maxDate = new Date(2020, 01, 07, 23, 59, 59, 00);
feb3 = new Date(2020, 01, 03, 12, 00, 00, 00);
feb4 = new Date(2020, 01, 04, 12, 00, 00, 00);
feb5 = new Date(2020, 01, 05, 12, 00, 00, 00);
feb6 = new Date(2020, 01, 06, 12, 00, 00, 00);
feb7 = new Date(2020, 01, 07, 12, 00, 00, 00);
tick_array_date = [feb3, feb4, feb5, feb6, feb7];
json_dates = []
for(var i=0; i<5; i++){
	current_date = new Date(2020, 01, 06, 12, 00, 00, 00).getDate();
	// current_date = new Date(Date.now()).getDate();
	temp_date = tick_array_date[i].getDate();
	if (temp_date == current_date){
		color = '#FFA500';
	}
	else if(temp_date < current_date){
		color = '#85bb65';
	}
	else{
		color = 'gray';
	}
	var ob = {
		'color': color,
		'date': tick_array_date[i]
	}
	json_dates.push(ob);
}
var x = d3.scaleTime()
					.domain([minDate, maxDate])
					.range([0, width]);
var xAxis = d3.axisBottom(x)



//trend circles
d3.select('#main_svg_g')
	.selectAll("circle")
	.data(json_dates)
	.enter()
	.append("circle")
	.attr('fill', function(d){
		return d.color;
	})
	.attr("cx", function(d) {
			return x(d.date);
	})
	.attr("cy", function(d) {
			return y(-1);
	})
	.attr("r", function(d) {
			return 15;
	});
