import React from 'react';

const TableReporter = (props) => {
  const {payback, noPayback} = props;

  return (
  <div className='table_area'>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Accepted</th>
          <th>Total</th>
          <th>Positive rate</th>
          <th></th>
        </tr>
        <tr>
          <td className='actual_payment_class'>Pay back</td>
          <td>{payback.accepted}</td>
          <td>{payback.total}</td>
          <td>{payback.accepted}/{payback.total}</td>
          <td>(TPR)</td>
        </tr>
        <tr>
          <td className='actual_payment_class'>Default</td>
          <td>{noPayback.accepted}</td>
          <td>{noPayback.total}</td>
          <td>{noPayback.accepted}/{noPayback.total}</td>
          <td>(FPR)</td>
        </tr>
        <tr>
          <td className='actual_payment_class'>Total</td>
          <td>{payback.accepted + noPayback.accepted}</td>
          <td>{payback.total + noPayback.total}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default TableReporter;
