import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ImageIcon } from "../icons/ImageIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { ArticleIcon } from "../icons/ArticleIcon";
import { AudioIcon } from "../icons/AudioIcon";
import React, { useRef } from "react";
import { useYouTubeEmbedUrl } from "../hooks/useYouTubeEmbedUrl";
import { useTwitterEmbed } from "../hooks/useTwitterEmbed";

interface CardProps {
    title: string;
    link: string;
    type: string;
}

const iconComponents: { [key: string]: React.FC<{ size?: "sm" | "md" | "lg" }> } = {
    image: ImageIcon,
    youtube: YoutubeIcon,
    twitter: TwitterIcon,
    article: ArticleIcon,
    audio: AudioIcon,
};

export function Card(props: CardProps) {
    const IconComponent = iconComponents[props.type];
    const twitterRef = useRef<HTMLQuoteElement>(null);
    useTwitterEmbed(twitterRef, props.type === "twitter");

    return (
        <div>
            <div className="p-8 bg-white rounded-lg shadow-md border-gray-300 max-w-72 border-r min-h-48 min-w-72">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-gray-500 pr-2">
                            {IconComponent && <IconComponent />}
                        </div>
                        {props.title}
                    </div>
                    <div className="flex gap-2 iteam-center">
                        <div className="pr-2 text-gray-500">
                            <a href={props.link} target="_blank" rel="noopener noreferrer">
                                <ShareIcon />
                            </a>
                        </div>
                        <div className="pr-2">
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
                <div className="pt-2" ref={props.type === "twitter" ? twitterRef : undefined}>
                    {props.type === "youtube" && (
                        <iframe src={useYouTubeEmbedUrl(props.link)} title={props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    )}
                    {props.type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={props.link}>{props.title}</a>
                        </blockquote>
                    )}
                    {props.type === "image" && (
                        <img src={props.link} alt={props.title} className="w-full h-auto" />
                    )}
                </div>
            </div>
        </div>
    );
}
