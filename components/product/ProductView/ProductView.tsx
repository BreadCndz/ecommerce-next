
import cn from 'classnames'
import { FC, useState } from 'react'
import s from "./ProductView.module.css"
import { Container, Button } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from "@components/product"
import { Choices, getVariant } from "../helpers"
import { useUI } from "@components/ui/context"
import useAddItem from "@framework/cart/use-add-item"
//import { useApiProvider } from '@common'


interface Props {
  product: Product
}

<<<<<<< HEAD

const ProductView: FC<Props> = ({ product }) => {

  const [ choices, setChoices ] = useState<Choices>({})
  const [ isLoading, setIsLoading ] = useState(false)

=======
const ProductView: FC<Props> = ({ product }) => {

  const [ choices, setChoices ] = useState<Choices>({})
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
  const { openSidebar } = useUI()
  const addItem = useAddItem()
  // console.log(choices)
  // console.log(product)

  const variant = getVariant(product, choices)
  //debugger
  //console.log(variant)

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
<<<<<<< HEAD
        variantId: String(variant ? variant.id : product.variants[0].id),
        quantity: 1
      }
      setIsLoading(true)
      await addItem(item)
      setIsLoading(false)
       //debugger
      // alert(JSON.stringify(output))
      openSidebar()
    } catch {
      setIsLoading(false)
    }
=======
        variantId: variant?.id,
        variantOptions: variant?.options
      }
      const output = await addItem(item)
      alert(JSON.stringify(output))
      openSidebar()
    } catch{}
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
  }


  return (
    <Container>
      <div className={cn(s.root, 'fit', "mb-5")}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>
                {product.name}
            </h1>
            <div className={s.price}>
                {product.price.value}
              {` `}
                {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
          { product.images.map(image =>
            <div key={image.url} className={s.imageContainer}>
              <Image
                className={s.img}
                src={image.url}
                alt={image.alt}
                width={1050}
                height={1050}
                quality="85"
              />
          </div>
            ) }
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {
              product.options.map(option =>
                  <div key={option.id} className="pb-4">
                    <h2 className="uppercase font-medium">{option.displayName}</h2>
                  <div className="flex flex-row py-4">
                      {
                        option.values.map(optValue => {
                          const activeChoice = choices[option.displayName.toLowerCase()]
                          //console.log(activeChoice)
                          return (
                            <Swatch 
                            key={`${option.id}-${optValue.label}`}
                            label={optValue.label}
                            color={optValue.hexColor}
                            variant={option.displayName}
                            active={optValue.label.toLowerCase() === activeChoice}
                            onClick={() => {
                              setChoices({
                                ...choices,
                                [option.displayName.toLowerCase()]: optValue.label.toLowerCase()
                              })
                              //alert(`${option.displayName} - ${optValue.label}`)
                            }}
                          />
                          )
                        }
<<<<<<< HEAD
=======
                        
                          // <div key={`${option.id}-${optValue.label}`}>
                          //   {optValue.label}
                          // </div>
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
                          )
                      }
                  </div>
              </div>
                )
            }
            
            <div className="pb-14 break-words w-full max-w-xl text-lg">
                {product.description}
            </div>
          </section>
          <div>
            <Button
              className={s.button}
<<<<<<< HEAD
              onClick={addToCart}
              isLoading={isLoading}
            >
=======
              onClick={addToCart}>
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView