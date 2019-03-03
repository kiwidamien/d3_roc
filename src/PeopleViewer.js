import React from 'react';
import { scaleLinear } from 'd3-scale';


const createPerson = (personObject, xScale, modelNumber) => {
  const color=(personObject.payback) ? 'black' : 'red';
  const xCenter=xScale(personObject.score[modelNumber]);

  const headCenter=80, armHeight=100, bodyEnd=120, legEnd=140;
  return <g fill={color}>
    <circle
      cx={xCenter}
      cy={headCenter}
      r={10}
    />
    <line x1={xCenter} y1={headCenter} x2={xCenter} y2={bodyEnd} stroke={color} stroke-width={4}/>

    <line x1={xCenter} y1={bodyEnd} x2={xCenter-10} y2={legEnd} stroke={color} stroke-width={4}/>
    <line x1={xCenter} y1={bodyEnd} x2={xCenter+10} y2={legEnd} stroke={color} stroke-width={4}/>

    <line x1={xCenter-10} y1={armHeight} x2={xCenter+10} y2={armHeight} stroke={color} stroke-width={4}/>

    <text x={xScale(personObject.score[modelNumber])} y={headCenter - 30}
     text-anchor="middle" >{personObject.score[modelNumber]}</text>
    </g>
};

const PeopleViewer = (props) => {

  const people = props.people;
  const svgWidth = 580;
  const threshold = props.threshold;

  const imgTop = 20, imgBottom = 160, imgHeight = imgBottom - imgTop;
  const minScore = 600, maxScore = 850;

  const margin = { top: 20, right: 10, bottom: 30, left: 10 };

  const xScale = scaleLinear().domain([minScore, maxScore])
    .range([margin.left, svgWidth - 2*margin.left - margin.right]);

  const allPeople = Object.values(people);

  const innerWidth = xScale(maxScore) - xScale(minScore);
  return (
  <div className='people_area'>
  <div style={{width: svgWidth}}>
    <svg width="100%" height="170px">
      {allPeople.map(person => createPerson(person, xScale, props.modelNumber))}
      <rect x={xScale(threshold)} y={imgTop}
            width={xScale(maxScore) - xScale(threshold)} height={imgHeight}
            fill='white' fill-opacity="0.2"
      />
      <rect x={xScale(minScore)-margin.left} y={imgTop}
            width={xScale(threshold)-xScale(minScore)+margin.left}
            height={imgHeight}
            fill='black' fill-opacity="0.4"
      />
      <line x1={xScale(threshold)} x2={xScale(threshold)}
            y1={imgTop} y2={imgBottom} stroke="black"
            stroke-width={5} stroke-dasharray="4"/>


    </svg>
    </div>
    <div style={{width:svgWidth, padding: 0, margin: 0}}>
      <input type="range" min={minScore} max={maxScore} value={threshold}
            style={{width: innerWidth,
                    margin: margin.left,
                    float: 'left',
                  }}
            onChange={props.changeThreshold}/>
    </div>
    <div>
    </div>
  </div>
  );
};

export default PeopleViewer;
