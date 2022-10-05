import {ReactElement} from "react";
import {ECategoryName} from "./chartSliceType";

export type IconPropsType = {
    size: string
    color?: string
}

//dropdown компонент принимает svg, title & callback
export type DropdownElementPropsType = {
    title: ECategoryName
    icon: ReactElement
}