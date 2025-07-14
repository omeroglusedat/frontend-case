import { useContext } from "react";
import { ProductContext, ProductContextTypes } from "@/contexts/product-context";

export const useProductContext = (): ProductContextTypes => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProductContext must be used within ProductContext.Provider");
    return context;
};