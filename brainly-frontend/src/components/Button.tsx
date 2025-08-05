import { ReactElement } from "react";
interface BarProp {
    varient: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}
const varientClasses ={
    "primary": "bg-purple-800 text-white hover:bg-purple-600",
    "secondary": "bg-purple-200 text-purple-600 hover:bg-purple-300",
};

const defaultStyles="px-4 py-2 rounded-lg flex items-center gap-2 ";



export function Button(props:BarProp) {
    return<button onClick={props.onClick} className={varientClasses[props.varient] + " " + defaultStyles}>
        {props.startIcon}
        {props.text}
        {props.endIcon}
    </button>
}
