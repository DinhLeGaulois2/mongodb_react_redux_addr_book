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

let AddTwitterComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddTwitter }) => (
    <div>
        <div className="container" style={{ 'backgroundColor': 'white' }}>
            <div align="center" className="mainTitle" style={{
                'backgroundColor': 'black',
                'color': 'cyan',
                'width': '100%',
                'borderRadius': "30px",
                'padding': '10px',
                'fontSize': '300%',
                'fontWeight': 'bold',
                'textAlign': 'center',
                'margin': '20px 0px'
            }}>Add Twitter</div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onClickAddTwitter)}>
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

AddTwitterComponent.propTypes = {
    onClickAddTwitter: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddTwitterForm'));

AddTwitterComponent = reduxForm({
    form: 'AddTwitterForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddTwitterComponent)

export default AddTwitterComponent
