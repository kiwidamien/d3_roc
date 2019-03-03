import React from 'react';

const digits = (num, places=3) => {
  return Number(num).toFixed(places)
}

const TableReporter = (props) => {
  const {payback, noPayback} = props;

  return (
  <div className='table_area'>
    <div>
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

    <div>
    <table>
      <tbody>
        <tr>
          <th>Measurement</th>
          <th>Fraction</th>
          <th>Value</th>
        </tr>
        <tr>
          <td className='actual_payment_class'>True positive rate</td>
          <td>{payback.accepted}/{payback.total}</td>
          <td>{digits(payback.accepted/payback.total)}</td>
        </tr>
        <tr>
          <td className='actual_payment_class'>False positive rate</td>
          <td>{noPayback.accepted}/{noPayback.total}</td>
          <td>{digits(noPayback.accepted/noPayback.total)}</td>
        </tr>
        <tr>
          <td className='actual_payment_class'>Precision</td>
          <td>{payback.accepted}/{payback.accepted + noPayback.accepted}</td>
          <td>{digits(payback.accepted/(payback.accepted + noPayback.accepted))}</td>
        </tr>
        <tr>
          <td className='actual_payment_class'>Recall</td>
          <td>{payback.accepted}/{payback.total}</td>
          <td>{digits(payback.accepted/payback.total)}</td>
        </tr>
      </tbody>
    </table>
    </div>

    <div className='model_choice'>
      <h5>Model choice</h5>
      {
        ['Perfect Model', 'Model 1', 'Model 2'].map((name, index) => {
          return (<div><input type="radio" name="model" value={index}
               checked={props.modelNumber === index}
               onChange={props.onChange} />&nbsp;&nbsp;{name}</div>
             );
           }
         )
      }
    </div>
  </div>
  );
};

export default TableReporter;
