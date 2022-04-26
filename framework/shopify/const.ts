
export const API_URL = process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local" ?
process.env.NEXT_PUBLIC_LOCAL_STORE_DOMAIN :
process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN

<<<<<<< HEAD
export const SHOPIFY_CHECKOUT_URL_COOKIE = "shopify_checkoutUrl"
export const SHOPIFY_COOKIE_EXPIRE = 90

=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132

export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local" ?
    "shopify_local_checkoutId" :
    "shopify_checkoutId"
<<<<<<< HEAD


export const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
