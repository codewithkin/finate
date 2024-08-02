import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { userBadgeProps } from "@/types/User-Badge"

export default function UserBadge ({imageUrl, fallback, name}: userBadgeProps) {
    return (
        <article
        className="flex border items-center justify-between border-body-text rounded-full pr-2 gap-4"
        >
            <div className="flex items-center items-center">
                {/* Profile Picture */}
                <Avatar>
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>{fallback ? fallback : "U"}</AvatarFallback>
                </Avatar>
                <h2 className="font-Poppins text-md">{name ? name : "User"}</h2>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
            </button>
        </article>
    )
}