import { createContext, useReducer } from 'react';
//  Magasin component sert  comme  un wrapper de notre site 

export const Store = createContext();
// //initial state : objet pour initialiser 

const initialState = {
  cart: {
    // localstorage pour garder etat du panier meme apres reload
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // add to cart
      // si le produit deja existe ne pas incrementer l panier
      //sinon si le produit est nouveau donc on increment
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
          item.id === existItem.id ? newItem : item
        )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };

    case 'CART_SUPP_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      //   local storage pour ne pas supprimer tout les items dans le cas de refresh
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function Magasin(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}