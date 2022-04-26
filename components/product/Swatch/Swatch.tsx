
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from "@components/icons"
import cn from "classnames"
import { isDark } from "@lib/color"


interface Props {
<<<<<<< HEAD
    size?: "sm" | "md" | "lg"
=======

>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
    color?: string
    label?: string
    active?: boolean
    variant?: "size" | "color" | string
    onClick: () => void
}


<<<<<<< HEAD
const Swatch: FC<Props> = ({color, label, variant, active, size="md", ...rest}) => {
=======
const Swatch: FC<Props> = ({color, label, variant, active, ...rest}) => {
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132

    label = label?.toLowerCase()
    variant = variant?.toLocaleLowerCase()

    const rootClassName = cn(
        s.root,
        {
            [s.active]: active,
            [s.color]: color,
            [s.size]: variant === "size",
<<<<<<< HEAD
            [s.dark]: color && isDark(color),
            [s.sm]: size === "sm"
=======
            [s.dark]: color && isDark(color)
>>>>>>> c80f98a4a479066776fc7e10cbfc06f8b8b1d132
        }
    )

    return(
        
        <button 
            style={color ? {backgroundColor: color} : {}}
            className={rootClassName} {...rest}>
                { variant === "color" && active && 
                    <span>
                        <Check />
                    </span>}
            { variant === "size" ? label : null }
        </button>


        // <>
        //     { color && <>Color: {color}</>}
        //     Label: {label} {` , `}
        // </>
    )
}


export default Swatch