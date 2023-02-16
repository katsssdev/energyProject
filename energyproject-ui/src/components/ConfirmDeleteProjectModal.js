import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class ConfirmDeleteProjectModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteProject = id => {
        axios.delete(API_URL + id).then(() => {
            this.props.resetState();
            this.toggle();
        });
    };

    render() {
        return (
            <Fragment>
                <Button onClick={() => this.toggle()}>
                    Delete
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Are you sure you want to delete the project?
                    </ModalHeader>

                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => this.deleteProject(this.props.id)}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmDeleteProjectModal;