interface TwitterIconProps {
    size?: "sm" | "md" | "lg"
}

const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}

export function TwitterIcon(props: TwitterIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 45"
            className={sizeVariants[props.size || "md"]}
        >
            <path
                d="M40 15c-1.2.5-2.5.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6-1.2-1.3-2.9-2.1-4.8-2.1-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.5-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.9 5.3 6.5-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.5-2.3 1.8-5.1 2.8-8.2 2.8-.5 0-1 0-1.5-.1 2.9 1.9 6.3 2.9 10 2.9 12 0 18.5-9.9 18.5-18.5 0-.3 0-.6 0-.8 1.3-.9 2.4-2 3.2-3.3z"
                fill="#1DA1F2"
            />
        </svg>
    );
}
