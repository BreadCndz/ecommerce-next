<<<<<<< HEAD
import { SWRResponse } from "node_modules/swr/dist/types"
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
import { ApiFetcher, ApiFetcherOptions } from "./api"




export interface ApiHooks {
    cart: {
      useAddItem: MutationHook
<<<<<<< HEAD
      useCart: SWRHook
      useRemoveItem: MutationHook
      useUpdateItem: MutationHook

=======
      useCart: any
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    }
  }
  

<<<<<<< HEAD
export type MutationHookContext<Input, Output> = {
    fetch: (input: Input) => Promise<Output>
}

export type SWRHookContext<Input, Output> = {
    useData: (input: Input) => Promise<Output>
}


export type HookFetcherContext<Input, Output> = {
    input: Input
    fetch: ApiFetcher<Output>
=======
export type MutationHookContext = {
    fetch: (input: any) => any
}


export type FetcherHookContext = {
    input?: any
    fetch: ApiFetcher
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    options: ApiFetcherOptions

}

<<<<<<< HEAD
export type HookFetcherOptions = {
    query: string
}

export type HookFetcherFn<Input, Output, Data> = 
    (context: HookFetcherContext<Input, Output>) => Promise<Data>

export type HookDescriptor = {
    fetcherInput: any
    fetcherOutput: any
    data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<H["fetcherInput"], H["fetcherOutput"], H["data"]>
    useHook(
        context: MutationHookContext<H["fetcherInput"], H["data"]>
    ): () => (input: H["fetcherInput"]) => Promise<H["data"]>
}


export type UseDataContext = {
    swrOptions: any
}

export type UseData<Data> = (context: UseDataContext) => Data

export type SWRHookResponse<Data> = 
    SWRResponse<Data, any> & {isEmpty: boolean}

export type SWRHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<H["fetcherInput"], H["fetcherOutput"], H["data"]>
    useHook(
        context: {
            useData: UseData<SWRHookResponse<H["data"]>>
        }
    ): () => SWRHookResponse<H["data"]>
}


export type Hook = MutationHook | SWRHook
=======

export type MutationHook = {
    fetcherOptions: ApiFetcherOptions
    fetcher: (context: FetcherHookContext) => any
    useHook(
        context: MutationHookContext
    ): (inpnut: any) => any
}
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
