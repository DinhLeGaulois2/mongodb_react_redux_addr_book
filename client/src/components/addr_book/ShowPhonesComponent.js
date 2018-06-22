import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

const ShowPhonesComponent = ({ data, onClickDelete }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {data.map((aUnit, index) =>
                <tr key={index}><td>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Phone</b> (id: {aUnit._id})</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(aUnit._id)
                        }}>X</button>
                    </div>
                    <b>Type:</b> {aUnit.type}<br /><br />
                    <b>Number:</b> {aUnit.number}<br /><br />
                </td></tr>
            )}
        </tbody></table>
    </div>
)

ShowPhonesComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        type: PropTypes.string,
        number: PropTypes.string,
        contactsId: PropTypes.string
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default ShowPhonesComponent