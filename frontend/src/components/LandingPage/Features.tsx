import { features } from "../../constants";

export default function Features(){

    return(
        <section id="features">
            <div className="w-[90%] mx-auto mt-24">
                {/* heading */}
                <span className="flex justify-between">
                    <h1 className="title font-cabinet w-[30%] ">Everything you need. Nothing you don't.</h1>
                    <p className="w-[25%] font-satoshi text-gray-500 text-[0.9rem] font-semibold flex items-end ">Four powerful features that make understanding any document actually posssible.</p>
                </span>

                <div className="grid grid-cols-4 border-[3px] my-14  border-black rounded-3xl">
                    { features.slice(0,3).map( (f) => (
                        <div key={f.id} className="border-r-[3px] border-black">
                            <div className="flex flex-col gap-y-2 w-[80%] mx-auto py-6">
                                <h1 className="text-[2.5rem] font-satoshi font-semibold tracking-wide text-gray-500 ">{f.id}</h1>
                                <img src={f.icon} alt="icon" className="w-[50px]"/>
                                <h2 className="text-[1.2rem] font-cabinet font-semibold ">{f.title} </h2>
                                <p className="text-small font-satoshi">{f.subtitle} </p>
                            </div>
                        </div>
                    )) }

                    { features.slice(3).map( (f) => (
                        <div key={f.id} >
                            <div className="flex flex-col gap-y-2 w-[80%] mx-auto py-6">
                                <h1 className="text-[2.5rem] font-satoshi font-semibold tracking-wide text-gray-500 ">{f.id}</h1>
                                <img src={f.icon} alt="icon" className="w-[50px]"/>
                                <h2 className="text-[1.2rem] font-cabinet font-semibold ">{f.title} </h2>
                                <p className="text-small font-satoshi">{f.subtitle} </p>
                            </div>
                        </div>
                    )) }

                </div>
            </div>

        </section>
    )
}