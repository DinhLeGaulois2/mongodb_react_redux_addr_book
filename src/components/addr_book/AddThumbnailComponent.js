import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}

    if (!values.PPPPPP) {
        errors.PPPPPP = "Required"
    }
    return errors
}

let AddThumbnailComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddTwitter }) => (
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
                }}>Add Thumbnail</div>
            </div>
            <br />
            <form onSubmit={handleSubmit(onClickAddTwitter)}>
                <div>
                </div>
                <br /> <hr />
                <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
                </p><br/>
            </form>
        </div>
    )

AddThumbnailComponent.propTypes = {
    onClickAddTwitter: PropTypes.func.isRequired
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
