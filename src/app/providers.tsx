'use client';

import { setBasketItems } from "@/redux/product-slice";
import { store } from "@/redux/store";
import frontendCaseTheme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        const getBasketItems = JSON.parse(localStorage.getItem('basketItems') as any);
        store.dispatch(setBasketItems(getBasketItems));
    }, [])

    return <ThemeProvider theme={frontendCaseTheme}>
        <Provider store={store}>
            {children}
        </Provider>
    </ThemeProvider>


}