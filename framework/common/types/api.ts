
import { ApiHooks } from "./hooks"

<<<<<<< HEAD

=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132


export type ApiFetcherOptions = {
    query: string
    variables?: Variables
}

export type Variables = {[key: string]: string | any |  undefined}

export type ApiFetcherResults<T> = {
    data: T
}

export interface ApiConfig {
    fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
<<<<<<< HEAD
    checkoutCookie: string
}

=======
}


// export interface ApiHooks {
//     cart: {
//         useAddItem: any
//         useCart: any

//     }
// }

>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
export type ApiFetcher<T = any> = (
    options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>


export interface ApiProviderContext {
    hooks: ApiHooks
    fetcher: ApiFetcher
<<<<<<< HEAD
    checkoutCookie: string
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
}

