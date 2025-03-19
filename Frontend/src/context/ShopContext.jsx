import { createContext, useState } from "react";  
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();  

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size");
            return;
        }
 
        let cartData = { ...cartItems };
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0; 
        for (const itemId in cartItems) {
            if (cartItems[itemId]) {
                for (const size in cartItems[itemId]) {
                    totalCount += cartItems[itemId][size];
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (quantity > 0) {
            cartData[itemId][size] = quantity;
        } else {
            delete cartData[itemId][size]; // Remove size if quantity is 0
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // Remove item if no sizes remain
            }
        }

        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue;

            for (const size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemId][size];
                    }
                } catch (error) {
                    console.error("Error calculating cart amount:", error);
                }
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
