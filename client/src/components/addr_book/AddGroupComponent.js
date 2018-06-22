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
    return errors
}

class AddGroupComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addGroup } = this.props
        return (
    <div className="container">
        <h1 align='center'>Add Group</h1>
        <br />
        <form onSubmit={handleSubmit(addGroup)}>
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
)(requireAuth(AddGroupComponent))