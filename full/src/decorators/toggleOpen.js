import React from 'react'
 
export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false
        }

        toggleOpen = ev => {
            ev && ev.preventDefault && ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        }
    }
}