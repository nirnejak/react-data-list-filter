import React, { Component } from 'react';

import FilterForm from './components/FilterForm';
import SubmissionList from './components/SubmissionList';
import Pagination from './components/Pagination';

import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    "submissions": [],
    "projectType": [],
    "filterFields": {
      type: '',
      showApproved: false
    }
  }
  componentDidMount() {
    this.updateData();
  }
  componentDidUpdate(prevProps, prevState) {
    // Update the data only if filter fields are changed
    if (prevState.filterFields !== this.state.filterFields)
      this.updateData();
  }

  updateData = () => {
    axios.get(`/dummy.json`)
      .then((res) => {
        let data = res.data;
        let resData = data["submissions"];
        let projectType = data["type"];

        if (this.state.filterFields.showApproved) {
          this.setState({ ...this.state, submissions: resData, projectType: projectType });
        } else {
          // Filtering Data
          resData = resData.filter(data => data.status === 'pending' ? true : false);
          this.setState({ ...this.state, submissions: resData, projectType: projectType });
        }

        if (this.state.filterFields.type !== "") {
          this.setState({
            ...this.state,
            "submissions": this.state.submissions.filter(submission => submission.type === this.state.filterFields.type ? true : false)
          })
        }
      })
      .catch((err) => console.log(err));
  }

  showApproved = (event) => {
    this.setState({
      ...this.state,
      "filterFields": {
        ...this.state.filterFields,
        showApproved: !this.state.filterFields.showApproved
      }
    })
  }

  markApproved = (id) => {
    // AJAX Call Here
    this.setState({
      ...this.state,
      submissions: this.state.submissions.map(submission => {
        if (submission.id === id) {
          submission.status = 'approved';
        }
        return submission;
      })
    })
  }

  markPending = (id) => {
    // AJAX Call Here

    this.setState({
      ...this.state,
      submissions: this.state.submissions.map(submission => {
        if (submission.id === id) {
          submission.status = 'pending';
        }
        return submission;
      })
    })
  }

  changeProjectType = (type) => {
    this.setState({
      ...this.state,
      "filterFields": {
        ...this.state.filterFields,
        type: type.value
      }
    });
  }

  render() {
    return (
      <div className="container py-5">
        <h1 className="pb-2">Submissions</h1>
        <FilterForm projectType={this.state.projectType} showApproved={this.showApproved} changeProjectType={this.changeProjectType} />
        <SubmissionList submissions={this.state.submissions} markApproved={this.markApproved} markPending={this.markPending} />
        <Pagination />
      </div>
    );
  }
}

export default App;