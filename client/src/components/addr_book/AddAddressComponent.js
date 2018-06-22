import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { renderInputField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth';

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

class AddAddressComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addAddress } = this.props
        return (
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
                    }}>Add Address</div>
                </td></tr></tbody></table>
                <br />
                <form onSubmit={handleSubmit(addAddress)}>
                    <div>
                        <Field name="type" component={renderInputField} placeholder="Type" /><br />
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
)(requireAuth(AddAddressComponent))