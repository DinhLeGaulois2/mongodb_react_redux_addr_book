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
    if (!values.street) {
        errors.street = "Required"
    }
    if (!values.city) {
        errors.city = "Required"
    }
    if (!values.state) {
        errors.state = "Required"
    }
    if (!values.zip_code) {
        errors.zip_code = "Required"
    }
    return errors
}

let AddAddressComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddAddress }) => (
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
            }}>Add Address</div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onClickAddAddress)}>
            <div>
                <Field name="type" component={renderInputField} placeholder="Mime Type" /><br />
                <Field name="street" component={renderInputField} placeholder="Street (Number and Name)" /><br />
                <Field name="city" component={renderInputField} placeholder="City" /><br />
                <Field name="state" component={renderInputField} placeholder="State" /><br />
                <Field name="zip_code" component={renderInputField} placeholder="Zip Code" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
)

AddAddressComponent.propTypes = {
    onClickAddAddress: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddAddressForm'));

AddAddressComponent = reduxForm({
    form: 'AddAddressForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddAddressComponent)

export default AddAddressComponent
