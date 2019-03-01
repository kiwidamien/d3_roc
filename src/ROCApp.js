import React, { Component } from 'react';
import LabelReporter from './LabelReporter';
import PeopleViewer from './PeopleViewer';
import Plot from './Plot';
import SummaryViewer from './SummaryViewer';
import TableReporter from './TableReporter';

import './ROCApp.css';


class ROCApp extends Component {
  render() {
    const payback = {accepted: 54, total: 75};
    const noPayback = {accepted: 12, total: 25};
    const threshold = 750;

    return (
      <div className="App">
        <div className='grid-container'>
        <PeopleViewer
          threshold={threshold}
        />
        <LabelReporter
          threshold={threshold}
        />
        <div className='plot_area'>
        <Plot
          size={[700,700]}
        />
        </div>
        <TableReporter
          payback={payback}
          noPayback={noPayback}
        />
        <SummaryViewer
          payback={payback}
          noPayback={noPayback}
        />
        </div>

      </div>
    );
  }
}
export default ROCApp;
