import React from 'react'

class Cart extends React.Component {
    sortItems(items){

    }
    removeItem(cartId){
        if(typeof this.props.removeItem == "function") this.props.removeItem(cartId)
    }
    getTotal(items = this.props.items){
        switch(items.length){
            case 0:
                return 0;
            case 1:
                return items[0].price
            default:
                return items.reduce((prev, current) => (prev.price || prev) + current.price).toFixed(2)
        }
    }
    render(){
        return (
            <div id="cart">
                <div className="icon" data-items={this.props.items.length} />
                <div className="popup white padding-m gray-text">
                    <div className="title gray-text text-lighten-2 padding-s--bottom margin-m--bottom">Elementos en el carrito</div>
                    <div className="elements padding-s--x">
                        {this.props.items.map(item => {
                            return (<div className="cart-item gray-text margin-m--bottom" data-uuid={item.uuid} key={item.cartId}>
                                <div className="image white darken-3 margin-m--right" style={{backgroundImage: `url('${item.images[0]}')`}} />
                                <div className="contents padding-xxxs--y">
                                    <div className="title dark-blue-text text-lighten-3 margin-xs--bottom">{item.title}</div>
                                    <div className="price green-text text-darken-2">{item.price}</div>
                                </div>
                                <div className="remove" onClick={() => this.removeItem(item.cartId)} />
                            </div>
                        )})}
                    </div>
                    <div className="total padding-s--top gray-text text-lighten-1 margin-m--top" data-total={this.getTotal(this.props.items)}></div>
                </div>
           </div>
        )
    }
}

export default Cart