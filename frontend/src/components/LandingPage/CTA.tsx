import { ArrowRight } from "lucide-react";

export default function CTA (){

    return(
        <section className="border-t-2 border-black py-16 bg-[#2d6bff]">
            <main className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="flex flex-col text-[4.2rem] leading-[4.2rem] font-cabinet font-bold text-white text-center">
                    <h1 >Stop guessing.</h1>
                    <h1>Start knowing.</h1>
                </div>

                <p className="font-satoshi text-gray-300 ">No sign-up needed. Paste your docs and get answers in seconds.</p>

                <button className="flex bg-primary tracking-wide rounded-lg transition  text-dark font-bold font-satoshi py-4 border-[3px] border-black hover:-translate-y-[1px] px-7 ">Analyze a Document for free<ArrowRight className="flex items-center size-6 pl-2 "/></button>
            </main>
        </section>
    )
}