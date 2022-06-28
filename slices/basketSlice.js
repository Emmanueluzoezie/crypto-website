import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoCoins: [],
};

export const basketSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    addToBasket: (state, {payload}) => {

          let newCoin = payload
          if(state.cryptoCoin?.length === 0){
            state.cryptoCoins.push(newCoin)
          }
          const existingCoin = state.cryptoCoins.find((coin) => coin.name === newCoin.name)
          if(existingCoin) return
          state.cryptoCoins.push(newCoin)
    },

    removeFromBasket: (state, action) => {
      const index = state.cryptoCoins.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.cryptoCoins];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.cryptoCoins = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCryptoCoins = (state) => state.basket.cryptoCoins;
export const selectTotal = (state) =>
  state.basket.cryptoCoins.reduce((total, item) => total += item.rank, 0);

export default basketSlice.reducer;