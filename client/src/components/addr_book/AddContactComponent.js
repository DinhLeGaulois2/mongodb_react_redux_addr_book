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
    if (!values.company) {
        errors.company = "Required"
    }
    if (!values.title) {
        errors.title = "Required"
    }
    return errors
}

class AddContactComponent extends Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addContact } = this.props
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
            }}>Add Contact</div>
        </td></tr></tbody></table>
        <br />
        <form onSubmit={handleSubmit(addContact)}>
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
)(requireAuth(AddContactComponent))