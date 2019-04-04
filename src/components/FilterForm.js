import React, { Component } from 'react'
import Select from 'react-select';

export default class FilterForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-text">
                        <Select options={this.props.projectType} onChange={this.props.changeProjectType.bind(this)} />
                        <br></br>

                        {/* <select name="project-type" id="project-type" className="form-control" onChange={this.props.changeProjectType.bind(this)}>
                            <option value="">Select Project Type</option>
                            {
                                this.props.projectType.map(type => (
                                    <option value={type.slug}>{type.name}</option>
                                ))
                            }
                        </select> */}
                        <br/>
                        <input type="checkbox" name="field1" id="approved" onChange={this.props.showApproved.bind(this)} />
                        &nbsp;<label htmlFor="approved">Show Approved</label>
                    </div>
                </div>
            </div>
        )
    }
}