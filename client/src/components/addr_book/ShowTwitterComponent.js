import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowTwitterComponent extends Component {
    constructor(props) {
        super(props)
        this.props.showTwitterByContact()
    }

    render() {
        const { data, deleteTwitter } = this.props
        return (
            <div>
                {data.length > 0 &&
                    <table align="center" style={{ 'width': '80%' }}><tbody>
                        {data.map((aUnit, index) =>
                            <tr key={index}><td>
                                <div className="relative">
                                    <h3 align="center" className="centeredChapterTitle"><b>Twitter</b> (id: {aUnit._id})</h3>
                                    <button type="button" className="btnDelete" onClick={e => {
                                        e.preventDefault()
                                        deleteTwitter(aUnit._id)
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
    contact: state.adrBook.selectedContact
})

export default connect(mapStateToProps, actions)(requireAuth(ShowTwitterComponent))