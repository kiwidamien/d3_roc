import React from 'react';

const LabelReporter = (props) => {
  return (
  <div className='label_area'>
    <div>
    <div className='title'>Threshold: {props.threshold}</div>
    <div className='subtitle'>i.e. accept everyone with credit scores above {props.threshold}</div>
    <div className='subtitle'>People shown in <b><span style={{color: 'red'}}>red</span></b> actually defaulted</div>
    <div className='subtitle'>People shown in <b><span style={{color: 'black'}}>black</span></b> actually repaid</div>
    </div>
  </div>
  );
};

export default LabelReporter;
