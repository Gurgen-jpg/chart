import {ReactElement} from "react";

export type IconPropsType = {
    size: string
    color?: string
}

//dropdown компонент принимает svg, title & callback
export type DropdownElementPropsType = {
    title: string
    icon: ReactElement
}