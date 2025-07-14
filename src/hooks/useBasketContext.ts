import { useContext } from "react";
import { BasketContext, BasketContextTypes } from "@/contexts/basket-context";

export const useBasketContext = (): BasketContextTypes => {
    const context = useContext(BasketContext);
    if (!context) throw new Error("useBasketContext must be used within BasketContext.Provider");
    return context;
};