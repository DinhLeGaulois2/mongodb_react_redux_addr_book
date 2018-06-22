import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowAddrComponent extends Component {
    constructor(props) {
        super(props)
        this.props.showAddrByContact()
    }

    render() {
        const { data, deleteAddress } = this.props
        return (
            <div>
                {data.length > 0 &&
                    <table align="center" style={{ 'width': '80%' }}><tbody>
                        {data.map((aUnit, index) =>
                            <tr key={index}><td>
                                <div className="relative">
                                    <h3 align="center" className="centeredChapterTitle"><b>Addresse</b> (id: {aUnit._id})</h3>
                                    <button type="button" className="btnDelete" onClick={e => {
                                        e.preventDefault()
                                        deleteAddress(aUnit._id)
                                    }}>X</button>
                                </div>
                                <b>Type:</b> {aUnit.type}<br />
                                <b>Address:</b> {aUnit.street}, {aUnit.city}, {aUnit.state} {aUnit.zip_code}<br />
                            </td></tr>
                        )}
                    </tbody></table>
                }
                {data.length === 0 &&
                    <h1 align="center">Nothing to Show!</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.adrBook.data,
})

export default connect(mapStateToProps, actions)(requireAuth(ShowAddrComponent))