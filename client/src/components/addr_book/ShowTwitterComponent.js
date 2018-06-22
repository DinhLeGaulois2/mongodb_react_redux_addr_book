import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

const ShowTwitterComponent = ({ data, onClickDelete }) => (
    <div>
        <div className="relative">
        </div>
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
                    <b>Name:</b> {aUnit.name}<br />
                    <b>Location:</b> {aUnit.location}<br />
                    {aUnit.web.length &&
                        <span><b>Web:</b> {aUnit.web}<br /></span>
                    }
                    {aUnit.bio.length &&
                        <span><b>Biography:</b> {aUnit.bio}<br /></span>
                    }
                </td></tr>
            )}
        </tbody></table>
    </div>
)

ShowTwitterComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        location: PropTypes.string,
        web: PropTypes.string,
        bio: PropTypes.string,
        contactsId: PropTypes.string
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default ShowTwitterComponent