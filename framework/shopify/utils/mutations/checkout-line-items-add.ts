
<<<<<<< HEAD
import { checkoutDetailFragment } from "../common"
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132


const checkoutLineItemsAdd = `
mutation(
  $checkoutId: ID!,
  $lineItems: [CheckoutLineItemInput!]! ) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
    checkoutUserErrors {
      field
      message
    }
    checkout {
<<<<<<< HEAD
      ${checkoutDetailFragment}
=======
      id
      webUrl
      subtotalPriceV2{
        amount
        currencyCode
      }
      totalTaxV2 {
        amount
        currencyCode
      }
      totalPriceV2 {
        amount
        currencyCode
      }
      completedAt
      createdAt
      taxesIncluded
      lineItems(first: 250) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            variant {
              id
              sku
              title
              image {
                originalSrc
                altText
                width
                height
              }
              priceV2{
                amount
                currencyCode
              }
              compareAtPriceV2{
                amount
                currencyCode
              }
              product {
                handle
              }
            }
            quantity
          }
        }
      }
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    }
  }
}
`

export default checkoutLineItemsAdd