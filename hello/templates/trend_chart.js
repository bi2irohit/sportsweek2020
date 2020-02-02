var getDateString = function(d){
	  year = d.getFullYear();
		month = (d.getMonth()+1);
		if (month<10){
			month = '0' + month
		}
		date = d.getDate();
		hour = d.getHours();
		minutes = d.getMinutes();
		if (minutes<10){
			minutes = '0' + minutes
		}
		seconds = d.getSeconds();
		if (seconds<10){
			seconds = '0' + seconds
		}
		var datestring = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds;
		return datestring;
	};
var duration = 200;
var array = [];
var dataProvider = [];
var i;
for(i=0;i<duration;i++){
  randNum = Math.floor(Math.random()*10);
	array.push(randNum);
};
console.log(array);
// json1 = {"timestamp":"2020-01-31T18:30:00.000Z", "team": "Bulls", "points": 20}
//
// date1 = new Date(json1['timestamp']);
// console.log(date1);
// current_time = new Date();
// console.log(current_time);
// current_time2 = new Date(Date.now() - 1*1000*60*30)
// console.log(current_time2);


current_time = new Date(2020, 01, 03, 08, 00, 00, 00);
console.log(typeof Date.now());
console.log(typeof Number(current_time));
console.log(new Date(Date.now() + 5*1000*60*30));
var k = 0;
for(var j=0; j<duration; j++){
	// console.log(j);
	date = new Date(Number(current_time) + j*1000*60*30)
	var ob = {
		'value': array[k],
		// 'date': getDateString(date)
		'date': date
	}
	dataProvider.push(ob);
	k++;
};
console.log(dataProvider);

// var current_time;
// var refreshTrend = function(newCount){
// 	var dataProvider = [];
// 	console.log(new Date());
//
// array.shift();
// array.push(newCount)
// current_time = new Date();
// var k = 0;
// for(var j=duration-1; j>=0; j--){
// 	date = new Date(Date.now() - j*1000*60*60*24)
// 	var ob = {
// 		'value': array[k],
// 		// 'date': getDateString(date)
// 		'date': date
// 	}
// 	dataProvider.push(ob);
// 	k++;
// };
// console.log(dataProvider);
//   //D3
// //Update the scale
// x.domain(d3.extent(dataProvider, function(d) { return d.date; }));
// xAxis = d3.axisBottom(x)
// 					.tickFormat(d3.timeFormat("%a %d"));
//
// //Update X axis
// d3.select("#x_axis")
// 	.transition()
// 	.duration(1000)
// 	.ease(d3.easeLinear)
// 	.call(xAxis);
//
// d3.select('#main_path')
// 	.datum(dataProvider)
// 	.transition()
// 	.duration(1000)
// 	.ease(d3.easeLinear)
// 	.attr("d", d3.line()
// 								.curve(d3.curveCardinal)
// 								.x(function(d) {	return x(d.date) })
// 								.y(function(d) {	return y(d.value) }));

// d3.select('#main_svg_g')
// 	.selectAll("circle")
// 	.data(dataProvider)
// 	.transition()
// 	.duration(1000)
// 	.ease(d3.easeLinear)
// 	.attr("cx", function(d) {
// 			return x(d.date);
// 	})
// 	.attr("cy", function(d) {
// 			return y(d.value);
// 	})
// 	.attr("r", function(d) {
// 			return 5;
// 	});

// };



//ESSENTIALS
window_error = 15;
doc_h = Math.floor($(window).height())+window_error;
doc_w = Math.floor($(window).width());
doc_volume = doc_h*doc_w

var margin_div = 0;
var content_row_h = Math.floor(1.0*doc_h);
var content_row_h_marginless = content_row_h-3*margin_div;
// var trend_chart_h = Math.floor(0.57*content_row_h_marginless);
var trend_chart_h = Math.floor(0.47*content_row_h_marginless);

bottom_margin_temp = Math.floor(0.00003866207*doc_volume);





// set the dimensions and margins of the graph

var margin = {top: 10, right: 30, bottom: bottom_margin_temp, left: 30},
		width = $('#trend_chart').width() - margin.left - margin.right,
		height = trend_chart_h - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#trend_chart")
						.append("svg")
						.attr('id', 'main_svg')
						.attr("width", width + margin.left + margin.right)
						.attr("height", height + margin.top + margin.bottom)
						.append("g")
						.attr('id', 'main_svg_g')
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
	// current_date = new Date(2020, 01, 05, 12, 00, 00, 00).getDate();
	current_date = new Date(Date.now()).getDate();
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
							.tickFormat(d3.timeFormat("%a %d"))
              .tickValues(tick_array_date);

d3.select('#main_svg_g')
	.append("g")
	.attr("id", "x_axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);

// Add Y axis
var y = d3.scaleLinear()
// .domain([0, d3.max(data, function(d) { return +d.value; })])
					.domain([0, 10])
					.range([height, 0]);
var yAxis = d3.axisLeft(y);

d3.select('#main_svg_g')
	.append("g")
	.attr("id", "y_axis")
	.call(yAxis);

//trend line
// d3.select('#main_svg_g')
// 	.append("path")
// 	.attr('id', 'main_path')
// 	.datum(dataProvider)
// 	.attr("fill", "none")
// 	.attr("stroke", "black")
// 	.attr("stroke-width", 2)
// 	.attr("d", d3.area()
// 								.curve(d3.curveCardinal)
// 								.x(function(d) {	return x(d.date) })
// 								.y0(y(0))
// 								.y1(function(d) {	return y(d.value) }));






var contRefresh = function(){
  newCount = Math.floor(Math.random()*10);
  console.log(newCount);
  refreshTrend(newCount);
}
// contRefresh();
// setInterval(contRefresh, 1000);
