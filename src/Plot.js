// Good sample:
// https://stackoverflow.com/questions/48853645/how-to-use-d3react
import React from 'react';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line as d3Line, area as d3Area } from 'd3-shape';

const cumsum = (array) => {
  const new_array = [];
  array.reduce( (runningSum, term, index) => {
    new_array[index] = runningSum + term;
    return new_array[index];
  }, 0);
  return new_array;
}

const getPositiveRate = (array) => {
  const total = array.reduce((a,b) => a+b);
  const cumulative = [0].concat(cumsum(array));
  return cumulative.map( doesCount => (total - doesCount)/total );
}

const truePositiveRate = (array) => getPositiveRate(array);
const falsePositiveRate = (array) => {
  return getPositiveRate(array.map(x => !x));
}

const Plot = (props) => {
  const players = [true, true, false, false, true];
  const fpr = falsePositiveRate(players), tpr = truePositiveRate(players);

  const margin = 140,
  	outerSize = props.size[0],
  	innerSize = outerSize - margin * 2;

  const xScale = scaleLinear().domain([0,1])
    .range([0, innerSize]);

  const yScale = scaleLinear().domain([0,1])
    .range([innerSize, 0]);

  select('.plot_area').append("svg")
  		.attr("width", outerSize)
  		.attr("height", outerSize)
  		.append("g")
  		.attr("transform", `translate(${margin}, ${margin})`);

  return (
  <div>
    <svg width={props.size[0]} height={props.size[1]}>
    </svg>
  </div>

  );
};

export default Plot;
