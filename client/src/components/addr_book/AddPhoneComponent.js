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
    if (!values.number) {
        errors.number = "Required"
    }
    return errors
}

class AddPhoneComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addPhone } = this.props
        return (
    <div className="container">
        <h1 align='center'>Add Phone</h1>
        <br />
        <form onSubmit={handleSubmit(addPhone)}>
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
)(requireAuth(AddPhoneComponent))