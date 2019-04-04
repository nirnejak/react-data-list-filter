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
    },
    "pagination": {
      totalPages: 3,
      currentPage: 1
    }
  }
  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/nirnejak/demo/type`)
      .then((res) => {
        this.setState({
          ...this.state,
          projectType: res.data
        })
      })
      .catch((err) => console.log(err));
    this.updateData();
  }
  componentDidUpdate(prevProps, prevState) {
    // Update the data only if filter fields or pagination fields are changed
    if (prevState.filterFields !== this.state.filterFields || prevState.pagination !== this.state.pagination)
      this.updateData();
  }

  updateData = () => {
    axios.get(`https://my-json-server.typicode.com/nirnejak/demo/submissions?${this.state.filterFields.showApproved ? '' : 'status=pending' }&${this.state.filterFields.type === '' ? '' : 'type='+this.state.filterFields.type }&_page=${this.state.pagination.currentPage}`)
      .then((res) => {
        let data = res.data;
        this.setState({ ...this.state, submissions: data });
      })
      .catch((err) => console.log(err));
  }

  markApproved = (id) => {
    let sub = this.state.submissions.filter(submission => submission.id === id ? true : false);
    sub[0].status = 'approved';
    axios.put(`https://my-json-server.typicode.com/nirnejak/demo/submissions/${id}`, sub[0])
      .then(res => {
        this.setState({
          ...this.state,
          submissions: this.state.submissions.map(submission => {
            if (submission.id === id) {
              submission.status = res.data.status;
            }
            return submission;
          })
        })
      })
      .catch((err) => console.log(err));
  }

  markPending = (id) => {
    let sub = this.state.submissions.filter(submission => submission.id === id ? true : false);
    sub[0].status = 'pending';
    axios.put(`https://my-json-server.typicode.com/nirnejak/demo/submissions/${id}`, sub[0])
      .then(res => {
        this.setState({
          ...this.state,
          submissions: this.state.submissions.map(submission => {
            if (submission.id === id) {
              submission.status = res.data.status;
            }
            return submission;
          })
        })
      })
      .catch((err) => console.log(err));
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

  showApproved = (event) => {
    this.setState({
      ...this.state,
      "filterFields": {
        ...this.state.filterFields,
        showApproved: !this.state.filterFields.showApproved
      }
    })
  }

  changePage = (page) => {
    console.log(page);

    this.setState({
      ...this.state,
      "pagination": {
        ...this.state.pagination,
        currentPage: page
      }
    })
  }

  render() {
    return (
      <div className="container py-5">
        <h1 className="pb-2">Submissions</h1>
        <FilterForm projectType={this.state.projectType} showApproved={this.showApproved} changeProjectType={this.changeProjectType} />
        <SubmissionList submissions={this.state.submissions} markApproved={this.markApproved} markPending={this.markPending} />
        <Pagination totalPages={this.state.pagination.totalPages} currentPage={this.state.pagination.currentPage} changePage={this.changePage} />
      </div>
    );
  }
}

export default App;