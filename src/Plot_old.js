"use strict";

/* https://github.com/d3/d3-ease Copyright 2015 Michael Bostock, Copyright 2001 Robert Penner. */
var ease=function(){"use strict";function t(t,n){t=Math.max(1,j(t,1)),n=1.5*j(n,.3)*O;var u=n*Math.asin(1/t);return function(e){return t*((e=2*e-1)<0?Math.pow(2,10*e)*Math.sin((u-e)/n):Math.pow(2,-10*e)*Math.sin((e-u)/n)+2)/2}}function n(t,n){t=Math.max(1,j(t,1)),n=j(n,.3)*O;var u=n*Math.asin(1/t);return function(e){return t*Math.pow(2,-10*e)*Math.sin((e-u)/n)+1}}function u(t,n){t=Math.max(1,j(t,1)),n=j(n,.3)*O;var u=n*Math.asin(1/t);return function(e){return t*Math.pow(2,10*--e)*Math.sin((u-e)/n)}}function e(t){return t=1.525*j(t,1.70158),function(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}}function r(t){return t=j(t,1.70158),function(n){return--n*n*((t+1)*n+t)+1}}function i(t){return t=j(t,1.70158),function(n){return n*n*((t+1)*n-t)}}function o(t){return z>t?J*t*t:B>t?J*(t-=A)*t+C:E>t?J*(t-=D)*t+F:J*(t-=G)*t+H}function c(t){return((t*=2)<=1?1-o(1-t):o(t-1)+1)/2}function s(t){return 1-o(1-t)}function a(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function f(t){return Math.sqrt(1- --t*t)}function h(t){return 1-Math.sqrt(1-t*t)}function M(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function p(t){return 1-Math.pow(2,-10*t)}function l(t){return Math.pow(2,10*t-10)}function w(t){return(1-Math.cos(K*t))/2}function b(t){return Math.sin(t*L)}function q(t){return 1-Math.cos(t*L)}function x(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function k(t){return--t*t*t+1}function v(t){return t*t*t}function y(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function d(t){return t*(2-t)}function g(t){return t*t}function m(t){return+t}function I(t){return t=j(t,3),function(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}}function N(t){return t=j(t,3),function(n){return 1-Math.pow(1-n,t)}}function P(t){return t=j(t,3),function(n){return Math.pow(n,t)}}var O=1/(2*Math.PI),j=function(t,n){return null==t||isNaN(t)?n:+t},z=4/11,A=6/11,B=8/11,C=.75,D=9/11,E=10/11,F=.9375,G=21/22,H=63/64,J=1/z/z,K=Math.PI,L=K/2,Q=(new Map).set("linear-in",m).set("linear-out",m).set("linear-in-out",m).set("quad-in",g).set("quad-out",d).set("quad-in-out",y).set("cubic-in",v).set("cubic-out",k).set("cubic-in-out",x).set("poly-in",v).set("poly-out",k).set("poly-in-out",x).set("sin-in",q).set("sin-out",b).set("sin-in-out",w).set("exp-in",l).set("exp-out",p).set("exp-in-out",M).set("circle-in",h).set("circle-out",f).set("circle-in-out",a).set("bounce-in",s).set("bounce-out",o).set("bounce-in-out",c).set("back-in",i()).set("back-out",r()).set("back-in-out",e()).set("elastic-in",u()).set("elastic-out",n()).set("elastic-in-out",t()),R=(new Map).set("poly-in",P).set("poly-out",N).set("poly-in-out",I).set("back-in",i).set("back-out",r).set("back-in-out",e).set("elastic-in",u).set("elastic-out",n).set("elastic-in-out",t),S=function(t,n,u){var e=(t+="").indexOf("-");return 0>e&&(t+="-in"),arguments.length>1&&R.has(t)?R.get(t)(n,u):Q.get(t)||m};return S}();

var margin = 140,
	outerSize = 960,
	innerSize = outerSize - margin * 2;

var y = d3.scale.linear()
	.domain([0, 1])
	.range([innerSize, 0]);

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.tickSize(-innerSize)
	.tickPadding(8);

var x = d3.scale.linear()
	.domain([0, 1])
	.range([0, innerSize]);

var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.tickSize(-innerSize)
	.tickPadding(8);

var path = d3.svg.line();

const make_people = (scoreArray, threshold, elementSelector) => {
	const svg = d3.select(elementSelector).append("svg")
		.attr("width", outerSize)
		.attr("height", outerSize/4)
	.attr("g")
	.attr("transform", `translate(${margin}, ${margin})`);


}

const make_plot = (div_selector) => {

	const svg = d3.select(div_selector).append("svg")
		.attr("width", outerSize)
		.attr("height", outerSize)
		.append("g")
		.attr("transform", `translate(${margin}, ${margin})`);

	svg.append("rect")
		.attr("class", "background")
		.attr("width", innerSize)
		.attr("height", innerSize);

	svg.append("g")
		.attr("class", "axis axis--x")
		.attr("transform", "translate(0," + innerSize + ")")
		.call(xAxis)
		.append("text")
		.attr("class", "axis-title")
		.attr("x", innerSize - 10)
		.attr("y", 8)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("t = ");

	svg.append("g")
		.attr("class", "axis axis--y")
		.call(yAxis)
		.append("text")
		.attr("class", "axis-title")
		.attr("x", -24)
		.attr("dy", ".32em")
		.style("text-anchor", "end")
		.text("ease(t) = ");

	var line = svg.selectAll(".line")
		.data([
			"linear-in-out",
			"quad-in-out",
			"cubic-in-out",
			"sin-in-out",
			"exp-in-out",
			"circle-in-out",
			"elastic-in-out",
			"back-in-out",
			"bounce-in-out"
		])
		.enter().append("g")
		.attr("class", "line");

	line.append("path")
		.attr("id", function(d) { return d; })
		.attr("d", function(d) {
			var e = ease(d);
			return path(d3.range(0, 1, .002).concat(1).map(function(t) {
				return [x(t), y(e(t))];
			}));
		});

	line.append("text")
		.attr("dy", "-3px")
		.append("textPath")
		.attr("xlink:href", function(d) { return "#" + d; })
		.attr("startOffset", "26%")
		.text(function(d) { return d; });

	d3.select(self.frameElement).style("height", outerSize + "px");
}

make_plot('#plot_area');
