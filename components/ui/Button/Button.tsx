<<<<<<< HEAD
import {
  ButtonHTMLAttributes,
  ComponentType,
  FC, HTMLAttributes, ReactNode } from "react"
import { LoadingDots } from "@components/ui"
=======
import { ButtonHTMLAttributes, FC, ReactNode } from "react"
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
import s from "./Button.module.css"
import cn from "classnames"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[]
<<<<<<< HEAD
    isLoading?: boolean
    Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
    href?: string
   // onClick: () => void
=======
    onClick: () => void
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
}

const Button: FC<Props> = ({
    children, 
    className,
<<<<<<< HEAD
    isLoading = false,
    Component = "button",
    ...rest
}) => {

    const rootClassName = cn(
        s.root,
        className,
        {
          [s.loading]: isLoading
        }
      )

    return (
      <Component
      className={rootClassName}
          type="button"
          {...rest}
      >
          {children}
          { isLoading &&
      <i className="pl-2 m-0 flex">
        <LoadingDots />
      </i>
    }
    </Component>
=======
    ...rest
}) => {


    return (
        <button 
            className={cn(s.root, className)}
            type="button"
            {...rest}
        >
            {children}
        </button>
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    )
}


export default Button