import React, { Component } from 'react';
import LabelReporter from './LabelReporter';
import PeopleViewer from './PeopleViewer';
import Plot from './Plot';
import SummaryViewer from './SummaryViewer';
import TableReporter from './TableReporter';

import './ROCApp.css';


class ROCApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threshold: 750,
      people: {
        andy: {payback: false, score: [650, 600, 610]},
        heather: {payback: false, score: [630, 620, 650]},
        bobby: {payback: true, score: [715, 650, 630]},
        charles: {payback: false, score: [670, 680, 760]},
        inga: {payback: true, score: [750, 710, 780]},
        del: {payback: false, score:[680, 740, 720]},
        elenor: {payback:true, score: [800, 780, 680]},
        frankie: {payback:true, score: [820, 810, 810]},
        martha: {payback: true, score: [845, 840, 845]}
      },
      modelNumber: 1
    }
  }

  getTally() {
    const payback = {accepted: 0, total: 0};
    const noPayback = {accepted: 0, total: 0};
    Object.values(this.state.people).forEach(
      person => {
        const obj = (person.payback ? payback : noPayback);
        if (person.score[this.state.modelNumber] >= this.state.threshold) {
          obj.accepted += 1
        }
        obj.total += 1;
      });
    const numRejected = payback.total - payback.accepted +
                        noPayback.total - noPayback.accepted;
    return {payback, noPayback, numRejected};
  }

  getPlayerOrder() {
    const modelNumber = this.state.modelNumber;
    return Object.values(this.state.people)
                 .sort((a,b) => a.score[modelNumber] - b.score[modelNumber])
                 .map(person => person.payback);
  }

  render() {
    const {payback, noPayback, numRejected} = this.getTally();
    const threshold = this.state.threshold;

    return (
      <div className="App">
        <div className='grid-container'>
        <PeopleViewer
          threshold={threshold}
          changeThreshold={(e) => this.setState({threshold: e.target.value})}
          people={this.state.people}
          modelNumber={this.state.modelNumber}
        />
        <LabelReporter
          threshold={threshold}
        />
        <div className='plot_area'>
        <Plot
          size={[650,520]}
          players={this.getPlayerOrder()}
          index={numRejected}
        />
        </div>
        <TableReporter
          payback={payback}
          noPayback={noPayback}
          modelNumber={this.state.modelNumber}
          onChange={(e) => this.setState({modelNumber: e.target.value})}
        />
        </div>

      </div>
    );
  }
}
export default ROCApp;
