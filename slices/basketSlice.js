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
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCryptoCoins = (state) => state.basket.cryptoCoins;

export default basketSlice.reducer;