import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useHistoryStore } from "../../store/HistoryStore";
import { useProfileStore } from "../../store/ProfileStore";
import { useEffect } from "react";

const container = "flex items-center gap-3 border-gray-200 rounded-xl py-3 px-4 border bg-white"
const icon ="py-2 text-[1.2rem] px-3 rounded-xl"
const title = "font-bold "
const subtitle = " text-[0.9rem] text-gray-700 font-medium"

const formatDate = (date: string | undefined) => {
    if (!date) return "—";
    const iso = date.replace(" ", "T");
    return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function History () {

    const { history, historyLoading } = useHistoryStore()
    const { profile, fetchProfile } = useProfileStore()
    const navigate = useNavigate()

    const totalFlags = history?.reduce((acc, h) => acc + h.meta.flag_count, 0);
    const cleanDocs = history?.filter((h) => h.meta.flag_count === 0).length;
    
    useEffect( () => {
        fetchProfile()
    }, [] )

    return (

        <div className="grid grid-cols-6 h-[92vh]">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="col-span-5 gray flex-1 overflow-y-auto">
                 <div className="gray pt-6 pb-10 px-8">
                    {/* heading */}
                    <section className="flex justify-between items-center font-cabinet">
                        <span>
                            <h1 className="text-[1.4rem] font-cabinet font-extrabold tracking-tight text-gray-900">My History</h1>
                            <p className="text-gray-400 text-sm font-satoshi pt-1">Every document you've analyzed — searchable and sortable.</p>
                        </span>

                        <span className="flex gap-4">
                            <input type="text" className="pl-3 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-900 transform text-sm text-gray-700" placeholder="🔍  Search documents..." />

                            <button onClick={() => (navigate("/dashboard"))} className="bg-tet text-primary rounded-lg font-semibold text-sm  px-5 hover:-translate-y-[1px] transform">+  Analyze New</button>
                        </span>
                    </section>

                    <section className="grid grid-cols-4 gap-5 mt-5 font-cabinet">
                        <div className={`${container}`} >
                            <p className={`${icon}  bg-[#fff8d1]`} >📄</p>
                            <span>
                                <h5 className={`${title}  text-gray-900 text-[1.4rem]`} >{history?.length} </h5>
                                <p className={`${subtitle}`} >Total Analyzed</p>
                            </span>
                        </div>

                        <div className={`${container}`} >
                            <p className={`${icon}  bg-[#ffeaef] `} >⚑</p>
                            <span>
                                <h5 className={`${title} text-red text-[1.4rem]`} >{totalFlags} </h5>
                                <p className={`${subtitle}`} >Red Flags Found</p>
                            </span>
                        </div>

                        <div className={`${container}`} >
                            <p className={`${icon}  bg-[#e0f8f1]`} >📄</p>
                            <span>
                                <h5 className={`${title}  text-gray-900 text-[1.4rem]`} >{cleanDocs} </h5>
                                <p className={`${subtitle}`} >Clean Documents</p>
                            </span>
                        </div>

                        <div className={`${container}`} >
                            <p className={`${icon}  bg-[#e9edff]`} >📅</p>
                            <span>
                                <h5 className={`${title} text-[1.2rem]  text-gray-900`} >{formatDate(profile?.created_at)} </h5>
                                <p className={`${subtitle}`} >Member Since</p>
                            </span>
                        </div>

                    </section>
                </div>
                

            </div>
        </div>
    )
}