
import { FC } from "react"
import s from "./Usernav.module.css"
import Link from "next/link"
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"
<<<<<<< HEAD
import useCart from "@framework/cart/use-cart"
import { LineItem } from "@common/types/cart"
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132


const Usernav: FC = () => {
    const {openSidebar} = useUI()
<<<<<<< HEAD
    const { data } = useCart()

    //debugger

    const ItemsCount = data?.lineItems.reduce((count: number, item: LineItem) => 
    { return count + item.quantity
    }, 0) ?? 0

=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132

    return(
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    <Cart onClick={openSidebar}/>
<<<<<<< HEAD
                    { ItemsCount > 0 &&
                        <span className={s.bagCount}>
                            { ItemsCount }
                        </span>
                    }
=======
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
                </li>
                <li className={s.item}>
                    <Link href="/wishlist">
                    <a>
                        <Heart />
                    </a>
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Usernav