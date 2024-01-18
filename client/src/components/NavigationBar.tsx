import Link from "next/link"

const configs = [
    { name: "Home", url: "/" },
    { name: "About", url: "#about" },
    { name: "Project", url: "#project" },
    { name: "Blog", url: "#blog" }
]

export default function Navigation() {
    return (
        <>
            <nav className=" sticky top-1 flex justify-center">
                <ul className="flex justify-center font-bold p-5 my-3 leading-8 rounded-full">
                    {configs.map((config, index) => {
                        return (
                            <li key={index} className="mx-1">
                                <Link href={config.url} className="transition ease-linear delay-100 px-6 py-4 focus:bg-slate-50 rounded-full focus:shadow-xl">{config.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}