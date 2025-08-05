interface ArticleIconProps {
    size?: "sm" | "md" | "lg"
}

const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}

export function ArticleIcon(props: ArticleIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 50"
            className={sizeVariants[props.size || "md"]}
        >
            <rect x="5" y="10" width="30" height="40" rx="2" fill="white" stroke="#666" strokeWidth="1" />
            <line x1="10" y1="18" x2="30" y2="18" stroke="#333" strokeWidth="1" />
            <line x1="10" y1="23" x2="30" y2="23" stroke="#666" strokeWidth="0.5" />
            <line x1="10" y1="26" x2="30" y2="26" stroke="#666" strokeWidth="0.5" />
            <line x1="10" y1="29" x2="25" y2="29" stroke="#666" strokeWidth="0.5" />
            <line x1="10" y1="32" x2="30" y2="32" stroke="#666" strokeWidth="0.5" />
        </svg>
    );
}
