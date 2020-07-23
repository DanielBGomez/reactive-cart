// Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Store
import { createStore } from 'redux'
import { Provider } from 'react-redux';
// import { addItemToCart, removeItemFromCart } from './actions/cart'
import CartReducer from './reducers/cart'


// Components
import Cart from './container/cart'
import Item from './container/Item'

// Global Styles
import './assets/css/normalize.css'
import './assets/_styles.scss'

// Executions
const store = createStore(CartReducer)

// Data
const ITEMS = require('./configs/items')

// Render
ReactDOM.render(
    <Provider store={store}>
        <div id="app" className="white darken-2">
            <header id="header" className="main margin-xxl--bottom padding-l--x white-text">
                <div className="title margin-no-space--left margin-auto--right">Reactive Cart</div>
                <Cart className="margin-auto--left margin-no-space--right" />
            </header>
            <div className="container margin-auto--x">
                <div className="items">
                    {ITEMS.map(item => <Item {...item} key={item.uuid} />) }
                </div>
            </div>
        </div>
    </Provider>,

  document.getElementById('root')
);