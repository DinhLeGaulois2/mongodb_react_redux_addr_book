import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.company) {
        errors.company = "Required"
    }
    if (!values.title) {
        errors.title = "Required"
    }
    return errors
}

let AddContactComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddContact }) => (
    <div className="container">
        <table align="center"><tbody><tr><td>
            <div align="center" className="mainTitle" style={{
                'backgroundColor': 'black',
                'color': 'cyan',
                'width': '80%',
                'borderRadius': "30px",
                'padding': '10px',
                'fontSize': '150%',
                'fontWeight': 'bold',
                'textAlign': 'center',
                'margin': '20px 0px'
            }}>Add Contact</div>
        </td></tr></tbody></table>
        <br />
        <form onSubmit={handleSubmit(onClickAddContact)}>
            <div>
                <Field name="name" component={renderInputField} placeholder="Name" /><br />
                <Field name="company" component={renderInputField} placeholder="Company" /><br />
                <Field name="title" component={renderInputField} placeholder="Title" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
)

AddContactComponent.propTypes = {
    onClickAddContact: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddContactForm'));

AddContactComponent = reduxForm({
    form: 'AddContactForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddContactComponent)

export default AddContactComponent
