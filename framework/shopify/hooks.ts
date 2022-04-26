

import { handler as useAddItem } from "./cart/use-add-item"
import { handler as useCart } from "./cart/use-cart"
<<<<<<< HEAD
import { handler as useRemoveItem } from "./cart/use-remove-item"
import { handler as useUpdateItem } from "./cart/use-update-item"

=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132



export const shopifyHooks = {
    cart: {
        useAddItem,
<<<<<<< HEAD
        useCart,
        useRemoveItem,
        useUpdateItem
=======
        useCart
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    }
}