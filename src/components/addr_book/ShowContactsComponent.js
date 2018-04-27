import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

const ShowContactsComponent = ({ data, onClickDelete }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {data.map((d, index) =>
                <tr key={index}>
                </tr>
            )}
        </tbody></table>
    </div>
)

ShowContactsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    onClickDelete: PropTypes.func.isRequired
}

export default ShowContactsComponent