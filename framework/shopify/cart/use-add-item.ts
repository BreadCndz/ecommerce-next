

import { useAddItem } from "@common/cart";
<<<<<<< HEAD
import { UseAddItem } from "@common/cart/use-add-item";
import useCart from "@common/cart/use-cart";
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { CheckoutLineItemsAddPayload } from "@framework/schema";
import { checkoutToCart, getCheckoutId } from "@framework/utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"


export default useAddItem as UseAddItem<typeof handler>

export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload
  }
  data: Cart
}



export const handler: MutationHook<AddItemHookDescriptor> = {
=======
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"


export default useAddItem


export const handler: MutationHook = {
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    fetcherOptions: {
      query: checkoutLineItemsAddMutation
    },
      fetcher: async ({fetch, options, input}) => {

<<<<<<< HEAD
=======
        

>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
        const variables = {
          checkoutId: getCheckoutId(),
          lineItems: [
            {
             variantId: input.variantId,
             quantity: 1
            }
          ]
        }
        
<<<<<<< HEAD
        const { data } = await fetch({
            ...options,
            variables
        })
       // debugger
        const cart = checkoutToCart(data.checkoutLineItemsAdd.checkout)
        //debugger
        return cart
    },
    useHook: ({fetch}) => () => {
      const { mutate: updateCart } = useCart()

        return async (input) => {
          const response = await fetch(input)
          await updateCart(response, false)
          return response
=======
        const response = await fetch({
            ...options,
            variables
        })

        
        return response
    },
    useHook: ({fetch}) => {
        return async (input:any) => {
            const response = await fetch(input)
            return {
                output: response
            }
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
        }
    }
}