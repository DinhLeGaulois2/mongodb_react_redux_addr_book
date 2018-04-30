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
    return errors
}

let AddGroupComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddGroup }) => (
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
            }}>Add Group</div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onClickAddGroup)}>
            <div>
                <Field name="name" component={renderInputField} placeholder="Name" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
)

AddGroupComponent.propTypes = {
    onClickAddGroup: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddGroupForm'));

AddGroupComponent = reduxForm({
    form: 'AddGroupForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddGroupComponent)

export default AddGroupComponent
