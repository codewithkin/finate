import UserBadge from "../ui/User Badge";

export default function NewUsers () {
    return (
        <div>
            <h2 className="text-xl font-semibold font-Poppins">New Users</h2>
            <article className="flex gap-2">
                <UserBadge />
                <UserBadge />
                <UserBadge />
            </article>
        </div>
    )
}