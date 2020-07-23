import React from 'react'

class Item extends React.Component {
    constructor(props){
        // Always call parent
        super(props)
        // Local state
        this.state = {
            loading: false,
            success: false
        }
    }
    btnClick(){
        // Ignore if loading
        if(this.state.loading || this.state.success) return;

        // Execute prop fn if defined
        if(typeof this.props.onBtnClick == "function") {
            // Update loading state
            this.setState({
                ...this.state,
                loading: true
            })
            // Execute funciton
            this.props.onBtnClick(this.props)

            // Update state
            this.setState({
                ...this.state,
                loading: false,
                success: true
            })
        }
    }
    animationEnded(event){
        if(event.animationName === 'success'){
            // Update success state
            this.setState({
                ...this.state,
                success: false
            })
        }
    }
    render(){
        return (
            <div className={`item white ${this.state.loading ? 'loading' : ''} ${this.state.success ? 'success' : ''}`}>
                <div className="image" style={{backgroundImage: `url('${this.props.images[0]}')`}}></div>
                <div className="container padding-m--x padding-l--y">
                    <div className="title dark-blue-text">{this.props.title}</div>
                    <div className="price green-text text-darken-3 margin-s--y">{this.props.price}</div>
                    <div className="description gray-text">{this.props.description}</div>
                </div>
                <button className="main white-text margin-no-space--bottom margin-auto--top padding-s--y" onClick={() => this.btnClick()}  onAnimationEnd={event => this.animationEnded(event)}>Agregar al carrito</button>
            </div>
        )
    }
}

export default Item