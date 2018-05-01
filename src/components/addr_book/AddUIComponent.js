import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

import '../../style.scss'
import cst from '../../constants/addr_book/cst'

import AddAddressContainer from '../../containers/addr_book/AddAddressContainer'
import AddContactContainer from '../../containers/addr_book/AddContactContainer'
import AddEmailContainer from '../../containers/addr_book/AddEmailContainer'
import AddGroupContainer from '../../containers/addr_book/AddGroupContainer'
import AddPhoneContainer from '../../containers/addr_book/AddPhoneContainer'
import AddPortraitContainer from '../../containers/addr_book/AddPortraitContainer'
import AddThumbnailContainer from '../../containers/addr_book/AddThumbnailContainer'
import AddTwitterContainer from '../../containers/addr_book/AddTwitterContainer'

const validate = values => {
    const errors = {}

    if (!values.selectAContact) {
        errors.selectAContact = "Required"
    }
    return errors
}

let AddUIComponent = ({ handleSubmit, invalid, submitting, reset, data, status, menuStatus, onClickChangeStatus, onClickSelectContact4Add, selectedContactLength }) => (
    <div className="container">
        {selectedContactLength == 0 &&
            <div>
                <br/>
                {data.length == 0 &&
                    <div>
                        <h3>No Contact on the List, Please, Add One ...</h3>
                        <AddContactContainer />
                    </div>
                }
                {data.length &&
                    <table align="center"><tbody><tr><td>
                        <form onSubmit={handleSubmit(onClickSelectContact4Add)}>
                            <label>Select A Contact&nbsp;</label>
                            <Field name="selectAContact" component='select'>
                                <option></option>
                                {data.map(aUnit =>
                                    <option key={aUnit._id} value={aUnit._id}>{aUnit.name} (Company: {aUnit.company}, Title: {aUnit.title})</option>
                                )}
                            </Field>
                            <br /> <hr />
                            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
                            </p><br />
                        </form>
                    </td></tr></tbody></table>
                }
            </div>
        }
        {selectedContactLength > 0 &&
            <div>
                <div>
                    <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
                        <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_ADDR)
                        }}>Add Address</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_CONTACT)
                        }}>Add Contact</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_EMAIL)
                        }}>Add Email</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_GROUP)
                        }}>Add Group</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_PHONE)
                        }}>Add Phone</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_PORTRAIT)
                        }}>Add Portrait</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_THUMBNAIL)
                        }}>Add Thumbnail</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            onClickChangeStatus("", cst.ADD_TWITTER)
                        }}>Add Twitter</button>
                        <br />
                    </td></tr></tbody></table>
                    {menuStatus == cst.MENU_ADD &&
                        <div>
                            {status === cst.ADD_ADDR &&
                                <AddAddressContainer />
                            }
                            {status === cst.ADD_CONTACT &&
                                <AddContactContainer />
                            }
                            {status === cst.ADD_EMAIL &&
                                <AddEmailContainer />
                            }
                            {status === cst.ADD_GROUP &&
                                <AddGroupContainer />
                            }
                            {status === cst.ADD_PHONE &&
                                <AddPhoneContainer />
                            }
                            {status === cst.ADD_PORTRAIT &&
                                <AddPortraitContainer />
                            }
                            {status === cst.ADD_THUMBNAIL &&
                                <AddThumbnailContainer />
                            }
                            {status === cst.ADD_TWITTER &&
                                <AddTwitterContainer />
                            }
                        </div>
                    }
                </div>
            </div>
        }
    </div>
)

const selectAContactShape = {
    _id: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    title: PropTypes.string
}

AddUIComponent.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape(selectAContactShape)),
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    selectedContactLength: PropTypes.number,
    onClickChangeStatus: PropTypes.func.isRequired,
    onClickSelectContact4Add: PropTypes.func.isRequired
}

AddUIComponent = reduxForm({
    form: 'selectContact4AddForm',
    validate,
})(AddUIComponent)

export default AddUIComponent