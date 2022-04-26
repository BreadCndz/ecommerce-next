

import { useApiProvider } from "@common";
import { ApiFetcher } from "@common/types/api"
import { ApiHooks } from "@common/types/hooks"
import { MutationHook } from "@common/types/hooks";
<<<<<<< HEAD
import useSWR from 'swr'




export const useHook = <H>(fn: (apiHooks: ApiHooks) => H) => {
=======
import { useState } from "react"



export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    const { hooks } = useApiProvider()
    return fn(hooks)
}


export const useMutationHook = (
    hook: MutationHook
) => {
    const { fetcher } = useApiProvider()
    return hook.useHook({
        fetch: (input: any) => {
            return hook.fetcher({
                input,
                fetch: fetcher,
                options: hook.fetcherOptions
            })
        }
    })
}
<<<<<<< HEAD
const useData = (hook: any, fetcher: ApiFetcher, ctx: any) => {
  const hookFetcher = async (query: string) => {

        // debugger
        try {
          //debugger
          return await hook.fetcher({
            fetch: fetcher,
            options: { query },
=======


const useData = (hook: any, fetcher: ApiFetcher) => {

    const [data, setData] = useState(null)

    const hookFetcher = async () => {

        // debugger
        try {
          return await hook.fetcher({
            fetch: fetcher,
            options: hook.fetchOptions,
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
            input: {}
          })
        } catch(error) {
          throw error
        }
      }

<<<<<<< HEAD
    //debugger

    const response = useSWR(
      hook.fetcherOptions.query,
      hookFetcher,
      ctx.swrOptions
    )

    return response
=======
    //   debugger
    if (!data) {
        hookFetcher().then(data => {
            // debugger
            setData(data)
          })    
    }

    return data
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
  }


export const useSWRHook = (hook: any) => {
    const { fetcher } = useApiProvider()

    return hook.useHook({
<<<<<<< HEAD
        useData(ctx: any) {
            // debugger
            const data = useData(
              hook, 
              fetcher,
              ctx
            )
=======
        useData() {
            // debugger
            const data = useData(hook, fetcher)
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
            // debugger
            return data
          }
    })
  }