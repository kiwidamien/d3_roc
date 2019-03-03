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
        andy: {payback: false, score: 600},
        heather: {payback: false, score: 620},
        bobby: {payback: true, score: 650},
        charles: {payback: false, score: 680},
        inga: {payback: true, score: 710},
        del: {payback: false, score:740},
        elenor: {payback:true, score: 780},
        frankie: {payback:true, score: 810},
        martha: {payback: true, score: 840}
      }
    }
  }

  getTally() {
    const payback = {accepted: 0, total: 0};
    const noPayback = {accepted: 0, total: 0};
    Object.values(this.state.people).forEach(
      person => {
        const obj = (person.payback ? payback : noPayback);
        if (person.score >= this.state.threshold) {
          obj.accepted += 1
        }
        obj.total += 1;
      });
    const numRejected = payback.total - payback.accepted +
                        noPayback.total - noPayback.accepted;
    return {payback, noPayback, numRejected};
  }

  getPlayerOrder() {
    return Object.values(this.state.people)
                 .sort((a,b) => a.score - b.score)
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
        />
        </div>

      </div>
    );
  }
}
export default ROCApp;
