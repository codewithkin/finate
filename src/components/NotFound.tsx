import { useLocation } from "react-router-dom"

export default function NotFound () {
    const location = useLocation();

    return (
        <section  className="px-4 py-8 w-screen overflow-y-scroll h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold font-Inter">Not Found</h2>
            <p className="text-body-text font-Inter">
                The page: {location.pathname} you are looking for does not exist.
            </p>
        </section>
    )
}