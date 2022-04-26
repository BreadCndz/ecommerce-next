
//import { handler } from "@framework/cart/use-add-item"
<<<<<<< HEAD
import { MutationHook } from "@common/types/hooks"
import { useHook, useMutationHook } from "@common/utils/use-hook"


export type UseAddItem<
    H extends MutationHook = MutationHook<any>
> = ReturnType<H["useHook"]>



const useAddItem: UseAddItem = () => {
=======
import { useHook, useMutationHook } from "@common/utils/use-hook"


const useAddItem = () => {
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    const hook = useHook((hooks) => { 
        return hooks.cart.useAddItem
    })
    return useMutationHook({
        ...hook
<<<<<<< HEAD
    })()
=======
    })
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
}

export default useAddItem