// Good sample:
// https://stackoverflow.com/questions/48853645/how-to-use-d3react
import React from 'react';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line as d3Line, area as d3Area } from 'd3-shape';
import Axes from './Axes';

import { truePositiveRate, falsePositiveRate } from './rates';

const drawPoints = (xCoords, yCoords, xScale, yScale, props={}) => {
  const points = xCoords.map( (element, index) => [element, yCoords[index]] );
  return points.map( pt => {
    const [x, y] = pt;
    return (<circle
      cx={xScale(x)}
      cy={yScale(y)}
      r={props.r || 4}
    />);
  });
};

const drawLine = (xCoords, yCoords, xScale, yScale) => {
  const points = xCoords.map( (element, index) => [element, yCoords[index]] );
  const lineGenerator = d3Line().x( d => xScale(d[0]) ).y( d => yScale(d[1]) );
  const line = lineGenerator(points);
  return <path d={line}/>;
};

const Plot = (props) => {
  const [svgWidth, svgHeight] = props.size;
  const players = [false, true, false, true, true];
  const index = 4;
  const fpr = falsePositiveRate(players), tpr = truePositiveRate(players);

  const margins = 140;
  const margin = { top: 20, right: 20, bottom: 30, left: 60 };

  const xScale = scaleLinear().domain([0,1])
    .range([margin.left, svgWidth - margin.left - margin.right]);

  const yScale = scaleLinear().domain([0,1])
    .range([svgHeight-margin.top-margin.bottom, margin.top]);

  return (
  <div>
  <div className='title'>ROC curve</div>

    <svg width={svgWidth} height={svgHeight}>
      <rect x={margin.left} width={svgWidth-2*margin.left-margin.right}
            y={margin.top} height={svgHeight-2*margin.top-margin.bottom} fill="cyan" fill-opacity="0.1"/>
      <Axes
        scales={{xScale, yScale}}
        margins={margin}
        svgDimensions = {{width: svgWidth-margin.left, height: svgHeight-margin.top}}
      />
      <g className='line'>
        {drawLine(fpr, tpr, xScale, yScale)}
      </g>
      <g className='scatter'>
        {drawPoints(fpr, tpr, xScale, yScale)}
        {drawPoints([fpr[index]], [tpr[index]], xScale, yScale, {r: 16})}
      </g>
      <g>
        <text transform='rotate(-90)' y='5' dy='0.71em' x='-150' textAnchor='middle'>
          TPR
        </text>
      </g>
      <g>
        <text y={svgHeight-25} dy="0.71em" x={svgWidth/2} textAnchor="middle">
          FPR
        </text>
      </g>
    </svg>
  </div>

  );
};

export default Plot;
