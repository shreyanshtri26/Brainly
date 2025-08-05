interface ImageIconProps {
    size?: "sm" | "md" | "lg"
}

const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}

export function ImageIcon(props: ImageIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            className={sizeVariants[props.size || "md"]}
        >
            <rect x="0" y="10" width="40" height="30" rx="4" fill="none" stroke="#4CAF50" strokeWidth="1.5" />
            <circle cx="8" cy="18" r="3" fill="#FFD700" />
            <polygon
                points="0,35 15,25 22,30 32,20 40,25 40,40 0,40"
                fill="#4CAF50"
                opacity="0.7"
            />
        </svg>
    );
}
