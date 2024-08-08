import { Link } from "react-router-dom";

export default function ComingSoon () {
    return (
        <section  className="px-4 py-8 w-screen overflow-y-scroll h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-5xl font-bold font-Inter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Coming Soon</h2>
            <p className="text-body-text font-Inter">We're still working on this page, Go back <Link className="underline font-semibold text-primary" to="/dashboard">home</Link></p>
        </section>
    )
}