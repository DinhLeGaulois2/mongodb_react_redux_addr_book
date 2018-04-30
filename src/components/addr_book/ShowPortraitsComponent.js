import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

const ShowPortraitsComponent = ({ data, onClickDelete }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {data.map((aUnit, index) =>
                <tr key={index}><td>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Twitter</b> (id: {aUnit._id})</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(aUnit._id)
                        }}>X</button>
                    </div>
                    {aUnit.mime_type.length &&
                        <span><b>Mime Type:</b> {aUnit.mime_type}<br /></span>
                    }
                    {aUnit.data.length &&
                        <span><b>Data:</b> {aUnit.data}<br /></span>
                    }
                </td></tr>
            )}
        </tbody></table>
    </div>
)

ShowPortraitsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        mime_type: PropTypes.string,
        data: PropTypes.string,
        contactsId: PropTypes.string
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default ShowPortraitsComponent