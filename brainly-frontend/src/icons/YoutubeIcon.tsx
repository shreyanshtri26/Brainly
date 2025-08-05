interface YoutubeIconProps {
    size?: "sm" | "md" | "lg"
}

const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}

export function YoutubeIcon(props: YoutubeIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            className={sizeVariants[props.size || "md"]}
        >
            <rect x="0" y="10" width="40" height="28" rx="6" fill="#FF0000" />
            <polygon points="15,18 15,30 28,24" fill="white" />
        </svg>
    );
}
