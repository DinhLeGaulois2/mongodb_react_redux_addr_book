import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

const ShowEmailsComponent = ({ }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {HHHHHHHHHHHHH.map((HHHH, index) =>
                <tr key={index}>
                    <ShowEmailsItem
                        key={HHHH.id}
                        {...HHHH}
                        HHHH={onClickDelete}
                    />
                </tr>
            )}
        </tbody></table>
    </div>
)

ShowEmailsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        type: PropTypes.string,
        address: PropTypes.string,
        contactsId: PropTypes.string
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default ShowEmails