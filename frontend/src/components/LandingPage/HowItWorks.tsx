import { how } from "../../constants";

export default function HowItWorks (){

    return(
        <section id="how-it-works" className="bg-tet py-14">
            <main>
                <div className="flex flex-col gap-y-4 max-w-[50%] mx-auto justify-center text-center">
                    <p className="bg-primary text-black py-1 text-[0.9rem] tracking-wider rounded-md w-[25%] mx-auto font-cabinent font-bold ">HOW IT WORKS</p>
                    <h1 className="title text-white font-cabinet">3 Steps To Total Clarity</h1>
                </div>

                {/* grid */}

                <div className="grid grid-cols-3 gap-10 w-[90%] mx-auto mt-12" >
                    { how.map( (h) => (
                        <div key={h.id} className="bg-[#191919] border border-gray-500 rounded-xl py-6 min-h-[250px]">
                            <div className="w-[85%] mx-auto flex flex-col gap-y-3">
                                <span className="h-[100px] ">
                                    <img src={h.icon} alt="icon" className="object-cover rounded-2xl"/>
                                </span>
                                <div className="flex flex-col gap-y-2 mt-12 text-sm">
                                    <p className="text-gray-500 font-semibold font-satoshi"> STEP {h.id}</p>
                                    <h5 className="text-[1.2rem] text-gray-100 font-cabinet font-semibold ">{h.title} </h5>
                                    <p className="text-small font-satoshi">{h.subtitle} </p>
                                </div>
                            </div>
                            
                        </div>
                    )) }

                </div>
            </main>
        </section>
    )
}