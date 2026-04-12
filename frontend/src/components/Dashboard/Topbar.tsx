import { NavLink } from "react-router-dom";
import { topbarLinks } from "../../constants";
import { useAuthStore } from "../../store/AuthStore";

export default function Topbar (){

    const { user } = useAuthStore()

    const firstNameInitials = user?.name.split(" ")[0].slice(0,1)
    const lastNameInitials = user?.name.split(" ")[1].slice(0,1)

    return(
        <section className="bg-tet">
            <main className="w-[93%] mx-auto justify-between flex items-center py-1.5 font-cabiment">

                <span className="flex gap-1 font-bold text-[1.1rem]">
                    <h3 className="text-white">Clarify</h3>
                    <p className="text-primary">AI</p>
                </span>

                <div className="flex bg-[#1e1e1e] gap-3 rounded-lg py-1 items-center px-1">
                    { topbarLinks.map( (t) => (
                        <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => `  px-4 py-1.5 tracking-wide text-[0.8rem]
                            ${isActive ? "text-gray-800 font-bold  bg-primary rounded-lg" : "text-gray-400"}`}>
                        {t.label}
                        </NavLink>
                    )) }
                </div>

                { user ? (
                    <p className="rounded-full bg-primary px-2 py-1.5 text-gray-800 font-bold text-[0.8rem]">{firstNameInitials}{lastNameInitials} </p>
                ) : (
                    <p>Guest</p>
                ) }
            </main>
        </section>
    )
}