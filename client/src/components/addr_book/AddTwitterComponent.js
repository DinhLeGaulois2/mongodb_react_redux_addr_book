import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { renderInputField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth';

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.location) {
        errors.location = "Required"
    }
    if (!values.web) {
        errors.web = "Required"
    }
    if (!values.bio) {
        errors.bio = "Required"
    }
    return errors
}

class AddTwitterComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addTwitter } = this.props
        return (
    <div className="container">
        <h1 align='center'>Add Twitter</h1>
        <br />
        <form onSubmit={handleSubmit(addTwitter)}>
            <div>
                <Field name="name" component={renderInputField} placeholder="Name" /><br />
                <Field name="location" component={renderInputField} placeholder="Location" /><br />
                <Field name="web" component={renderInputField} placeholder="Web" /><br />
                <Field name="bio" component={renderInputField} placeholder="Bio" /><br />
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
)(requireAuth(AddTwitterComponent))
