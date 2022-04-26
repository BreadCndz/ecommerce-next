

export interface ProductImage {
    url: string
    alt?: string
}

export interface ProductPrice {
    value: number
    currencyCode: "USD" | "EUR" | string
}


export interface ProductOptionValues {
    label: string
    hexColor?: string
}

export interface ProductOption {
    id: string
    displayName: string
    values: ProductOptionValues[]
}

export interface ProductVariant {
    id: string
    name: string
<<<<<<< HEAD
    sku: string
    image?: ProductImage
    requiresShipping: boolean
    price: number
    listPrice: number
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    options: ProductOption[]
}


export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    images: ProductImage[]
    price: ProductPrice,
    options: ProductOption[],
    variants: ProductVariant[]

}