import { configureStore } from "@reduxjs/toolkit";

// reducers
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";
import authReducer from "./../features/auth/authSlice";
import mobileNavReducer from "./../features/mobileNav/mobileNavSlice";
import backdropReducer from "./../features/backdrop/backdropSlice";
import cartSlice from "../features/cart/cartSlice";
import dashboardMobileNavReducer from "../features/dashboardMobileNav/dashboardMobileNavSlice";
import paymentInfoSlice from "../features/paymentInfoSlice/paymentInfoSlice";

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
    backdrop: backdropReducer,
    cart: cartSlice,
    dashboardMobileNav: dashboardMobileNavReducer,
    paymentInfo:paymentInfoSlice,
  },
});
