import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { renderInputField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth';


const validate = values => {
    const errors = {}

    if (!values.mime_type) {
        errors.mime_type = "Required"
    }
    if (!values.data) {
        errors.data = "Required"
    }
    return errors
}

class AddPortraitComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addPortrait } = this.props
        return (
    <div className="container">
        <h1 align='center'>Add Portrait</h1>
        <br />
        <form onSubmit={handleSubmit(addPortrait)}>
            <div>
                <Field name="mime_type" component={renderInputField} placeholder="Mime Type" /><br />
                <Field name="data" component={renderInputField} placeholder="Data" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
        )
    }
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddTwitterForm'));

export default compose(
    connect(null, actions),
    reduxForm({
        form: 'AddTwitterForm',
        validate,
        onSubmitSuccess: afterSubmit
    })
)(requireAuth(AddPortraitComponent))