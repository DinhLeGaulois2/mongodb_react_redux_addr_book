import React, {Component} from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowPortraitsComponent extends Component {
    render() {
        const { data, deletePortrait } = this.props
        return (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {data.map((aUnit, index) =>
                <tr key={index}><td>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Portrait</b> (id: {aUnit._id})</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            deletePortrait(aUnit._id)
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
    }
}

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

export default connect(mapStateToProps, actions)(requireAuth(ShowPortraitsComponent))