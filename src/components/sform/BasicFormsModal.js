import React from 'react';
import SForms from 's-forms';

import 'react-datepicker/dist/react-datepicker.css';
import {Button, Form, Modal} from "react-bootstrap";
import {Rest} from "../rest/Rest";


class BasicFormsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            basicModalVisible: false,
            logPath: null,
            logContent: null
        };
        this.refForm = React.createRef();

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTextAreas = this.renderTextAreas.bind(this)
    }


    componentWillReceiveProps(newProps){
        if(newProps.logPath){
            Rest.getLogForm(newProps.logPath).then((response) => {
                console.log(response)
                this.setState({
                    isLoaded: true,
                    basicModalVisible: true,
                    logPath: newProps.logPath,
                    logContent: response
                })
            })
        }
    }

    handleClose(){
        console.log("closeeee");
        this.setState({basicModalVisible:false, isLoaded: false});
    }

    handleSubmit(){
        this.setState({basicModalVisible:false});
        alert("Not implemented!");
        // let form = this.state.selectedForm
        // form["http://onto.fel.cvut.cz/ontologies/documentation/has_related_question"] = this.refForm.current.context.getFormQuestionsData();
        //
        // Rest.updateScriptForm(this.state.moduleTypeUri, form, this.state.scriptPath).then((response) => {
        //     if(response.status === 200){
        //         window.location.reload(false);
        //     }else{
        //         console.log("ERROR on script update")
        //     }
        // })
    }

    renderTextAreas(){
        return this.state.logContent["http://onto.fel.cvut.cz/ontologies/s-pipes/has-absolute-path"].map((data, i) => {
            return (
                    <Form.Group controlId="exampleForm.ControlTextarea1" key={i}>
                        <Form.Label>Log info</Form.Label>
                        <Form.Control as="textarea" defaultValue={data['@id']} rows={30} />
                    </Form.Group>
            );
        });
    }

    render() {
        console.log("basicModal: " + this.state.basicModalVisible + ", isLoaded: " + this.state.isLoaded)
        if(this.state.isLoaded){
            return (
                <Modal
                    show={this.state.basicModalVisible}
                    onHide={() => this.handleClose()}
                    dialogClassName="modal-80w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {this.renderTextAreas()}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleSubmit()}>
                            Debug
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        }else{
            return null;
        }
    }
}

export default BasicFormsModal;

