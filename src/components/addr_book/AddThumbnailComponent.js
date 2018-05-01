import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}

    if (!values.mime_type) {
        errors.mime_type = "Required"
    }
    if (!values.data) {
        errors.data = "Required"
    }
    return errors
}

let AddThumbnailComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddThumbnail }) => (
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
            }}>Add Thumbnail</div>
        </td></tr></tbody></table>
        <br />
        <form onSubmit={handleSubmit(onClickAddThumbnail)}>
            <div>
                <Field name="mime_type" component={renderInputField} placeholder="Mime Type" /><br />
                <Field name="data" component={renderInputField} placeholder="Data" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>
)

AddThumbnailComponent.propTypes = {
    onClickAddThumbnail: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddThumbnailForm'));

AddThumbnailComponent = reduxForm({
    form: 'AddThumbnailForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddThumbnailComponent)

export default AddThumbnailComponent
