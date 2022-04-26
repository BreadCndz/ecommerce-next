

import { ApiConfig } from "@common/types/api"
import { fetchApi } from "../utils"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"


class Config {
    private config: ApiConfig

    constructor(config: ApiConfig) {
        this.config = config
    }

    getConfig(): ApiConfig {
        return this.config
    }
}

const configWrapper = new Config({
<<<<<<< HEAD
    fetch: fetchApi,
    checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
=======
    fetch: fetchApi
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
})

export function getConfig() {
    return configWrapper.getConfig()
}