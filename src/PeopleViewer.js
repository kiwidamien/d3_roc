import React from 'react';
import { scaleLinear } from 'd3-scale';


const createPerson = (personObject, xScale) => {
  const color=(personObject.payback) ? 'black' : 'red';
  const xCenter=xScale(personObject.score);

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

    <text x={xScale(personObject.score)} y={headCenter - 30}
     text-anchor="middle" >{personObject.score}</text>
    </g>
};

const PeopleViewer = (props) => {

  const people = {
    andy: {payback: false, score: 600},
    bobby: {payback: true, score: 650},
    charles: {payback: false, score: 680},
    del: {payback: false, score:740},
    elenor: {payback:true, score: 780},
    frankie: {payback:true, score: 810}
  };
  const svgWidth = 700;
  const threshold = props.threshold;

  const imgTop = 20, imgBottom = 160, imgHeight = imgBottom - imgTop;
  const minScore = 600, maxScore = 850;

  const margin = { top: 20, right: 0, bottom: 30, left: 0 };

  const xScale = scaleLinear().domain([minScore, maxScore])
    .range([0, svgWidth]);

  const allPeople = Object.values(people);

  return (
  <div className='people_area' style={{padding:50}}>
  <div style={{width: '80%'}}>
    <svg width="100%" height="170px">
      {allPeople.map(person => createPerson(person, xScale))}
      <rect x={xScale(threshold)} y={imgTop}
            width={xScale(maxScore) - xScale(threshold)} height={imgHeight}
            fill='white' fill-opacity="0.2"
      />
      <line x1={xScale(threshold)} x2={xScale(threshold)}
            y1={imgTop} y2={imgBottom} stroke="black"
            stroke-width={5} stroke-dasharray="4"/>
    </svg>
    <input type="range" min={minScore} max={maxScore} style={{width: '100%'}}/>
    </div> {threshold}
  </div>
  );
};

export default PeopleViewer;
