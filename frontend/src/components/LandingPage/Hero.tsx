import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero(){

    return(
        <section className="bg-primary h-screen">
            <div className="grid grid-cols-2">
                <section className="mt-[10rem] w-[80%] mx-auto font-cabinet font-bold">
                    <div className="flex gap-2 bg-black text-primary py-2 justify-center text-[0.8rem] tracking-wide max-w-[38%] rounded-md"> 
                        <img className="w-[15px] flex items-center " src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1775552386/diamond-mark-3-svgrepo-com_dgvrj1.svg" alt="icon" />
                        <p>100% FREE • AI-POWERED</p>
                    </div>
                    <div className="mt-3 font-bold primary-text">
                        <h1>Read</h1>
                        <span className="bg-sec -rotate-2 -mt-[25px]  h-[80px] rounded-md items-center  transform max-w-[60%] flex justify-center text-white bg-[#2d6bff]">
                            <h1 >smarter.</h1>
                        </span>

                        <span className="flex gap-4">
                            <h1 className="-mt-[10px]" >Sign</h1>
                            <span className="rotate-2  h-[80px] mt-[4px] rounded-md items-center px-4  transform max-w-[60%] flex justify-center text-white bg-[#2d6bff]">
                                <h1 >safer.</h1>
                            </span>
                        </span>
                    </div>

                    <p className="font-satoshi text-[#8a7220] font-semibold text-[1.1rem] w-[80%] mt-2">Paste or upload any contract, legal doc or terms of service — get a plain English breakdown in seconds. </p>

                    {/* buttons */}
                    <div className="mt-6 flex gap-6 ">
                        <button className="bg-[#0d0d0d] tracking-wide rounded-lg hover:bg-[#0d0d0d]/95 transition  text-primary flex py-4 hover:-translate-y-[1px] px-6">Try it Free <ArrowRight className="flex items-center size-6 pl-2 "/></button>

                        <a href="#how-it-works" className="border-2 border-[#0d0d0d] tracking-wide rounded-lg transition hover:cursor-pointer  text-[#0d0d0d] flex py-4 hover:-translate-y-[1px] px-6">See How <ArrowDown className="flex items-center size-6 pl-2 "/></a>
                    </div>
                </section>

                <section className="border-l-2 border-black">
                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1775521808/hero-pic_pfkamt.png" alt="bg-hero" className=" lg:pt-16  h-screen w-full object-cover" />
                </section>
            </div>
        </section>
    )
}