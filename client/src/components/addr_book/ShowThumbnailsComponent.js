import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowThumbnailsComponent extends Component {
    constructor(props) {
        super(props)
        this.props.showThumbnailByContact()
    }

    render() {
        const { data, deleteThumbnail } = this.props
        return (
            <div>
                {data.length > 0 &&
                    <table align="center" style={{ 'width': '80%' }}><tbody>
                        {data.map((aUnit, index) =>
                            <tr key={index}><td>
                                <div className="relative">
                                    <h3 align="center" className="centeredChapterTitle"><b>Thumbnail</b> (id: {aUnit._id})</h3>
                                    <button type="button" className="btnDelete" onClick={e => {
                                        e.preventDefault()
                                        deleteThumbnail(aUnit._id)
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

export default connect(mapStateToProps, actions)(requireAuth(ShowThumbnailsComponent))