import React, { Component } from "react";
import { Table } from "reactstrap";
import NewProjectModal from "./NewProjectModal";

import ConfirmDeleteProjectModal from "./ConfirmDeleteProjectModal";
import moment from "moment/moment";

class ProjectList extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <Table dark style={{tableLayout: "fixed", width: "max-content"}}>
                <thead style={{backgroundColor: "#212529"}}>
                <tr>
                    <th>Project Name</th>
                    <th>Project Number</th>
                    <th>Acquisition Date</th>
                    <th>Number 3l Code</th>
                    <th>Project Deal Type</th>
                    <th>Project Group ID</th>
                    <th>Project Status ID</th>
                    <th>Company ID</th>
                    <th>WTG Numbers</th>
                    <th>Total kW</th>
                    <th>Months Acquired</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {!projects || projects.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>No projects to display</b>
                        </td>
                    </tr>
                ) : (
                    projects.map(project => (
                        <tr key={project.id}>
                            <td>{project.project_name}</td>
                            <td>{project.project_number}</td>
                            <td>{moment(project.acquisition_date).format('DD.MM.YYYY')}</td>
                            <td>{project.number_3l_code}</td>
                            <td>{project.project_deal_type_id}</td>
                            <td>{project.project_group_id}</td>
                            <td>{project.project_status_id}</td>
                            <td>{project.company_id}</td>
                            <td>{project.WTG_numbers}</td>
                            <td>{project.total_kW}</td>
                            <td>{project.months_acquired}</td>
                            <td align="center">
                                <NewProjectModal
                                    create={false}
                                    project={project}
                                    resetState={this.props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmDeleteProjectModal
                                    id={project.id}
                                    resetState={this.props.resetState}
                                />
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>
        );
    }
}

export default ProjectList;