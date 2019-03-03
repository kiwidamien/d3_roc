import React from 'react';

const LabelReporter = (props) => {
  return (
  <div className='label_area'>
    <div>
    <div className='title'>Threshold: {props.threshold}</div>
    <div className='subtitle'>i.e. accept everyone with credit scores above {props.threshold}</div>
    </div>
  </div>
  );
};

export default LabelReporter;
