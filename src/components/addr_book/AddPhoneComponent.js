import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}

    if (!values.type) {
        errors.type = "Required"
    }
    if (!values.number) {
        errors.number = "Required"
    }
    return errors
}

let AddPhoneComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddPhone }) => (
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
            }}>Add Phone</div>
        </td></tr></tbody></table>
        <br />
        <form onSubmit={handleSubmit(onClickAddPhone)}>
            <div>
                <Field name="type" component='select'>
                    <option></option>
                    <option value="pro">Personal</option>
                    <option value="perso">Profesionnal</option>
                </Field>
                <Field name="number" component={renderInputField} placeholder="Number" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
)

AddPhoneComponent.propTypes = {
    onClickAddPhone: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddPhoneForm'));

AddPhoneComponent = reduxForm({
    form: 'AddPhoneForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddPhoneComponent)

export default AddPhoneComponent
