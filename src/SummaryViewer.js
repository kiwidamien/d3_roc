import React from 'react';

const printDecimal = (x, places=3) => {
  return Number.parseFloat(x).toPrecision(places);
}

const SummaryViewer = (props) => {
  const {payback, noPayback} = props;

  return (
  <div className='summary_area'>
    <table>
      <tr>
        <td>True positive rate:</td><td>{payback.accepted}/{payback.total} = {printDecimal(payback.accepted/payback.total)}</td>
      </tr>
      <tr>
        <td>False positive rate:</td><td>{noPayback.accepted}/{noPayback.total} = {printDecimal(noPayback.accepted/noPayback.total)}</td>
      </tr>
      <tr>
        <td>Precision:</td><td>{payback.accepted}/({payback.accepted} + {noPayback.accepted}) = {printDecimal(payback.accepted/(payback.accepted + noPayback.accepted))}</td>
      </tr>
      <tr>
        <td>Recall:</td><td>{payback.accepted}/{payback.total} = {printDecimal(payback.accepted/payback.total)}</td>
      </tr>
    </table>
  </div>
  );
};

export default SummaryViewer;
