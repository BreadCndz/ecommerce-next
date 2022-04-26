


// import { useHook } from "../utils/use-hook"
// import { ApiHooks } from "@common/types/api"
import { useHook, useSWRHook } from "../utils/use-hook"
<<<<<<< HEAD
import { ApiHooks, SWRHook } from "@common/types/hooks"
import Cookies from "js-cookie"
// import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"
import { useApiProvider } from "@common"

export type UseCart<
  H extends SWRHook = SWRHook<any>
> = ReturnType<H["useHook"]>


const useCart: UseCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
  const { checkoutCookie } = useApiProvider()


  const fetcherWrapper: typeof hook.fetcher = (context: any) => {
    context.input.checkoutId = Cookies.get(checkoutCookie)
    //debugger
=======
import { ApiHooks } from "@common/types/hooks"
import Cookies from "js-cookie"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"


const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)

  const fetcherWrapper: typeof hook.fetcher = (context) => {
    context.input.checkoutId = Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)
    debugger
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    return hook.fetcher(context)
  }


<<<<<<< HEAD
  return useSWRHook({...hook, fetcher: fetcherWrapper})()
=======
  return useSWRHook({...hook, fetcher: fetcherWrapper})
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
}

export default useCart