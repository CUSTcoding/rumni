import {JSX} from "react";

export default function About(): JSX.Element {
    return (
        <section className=" w-screen min-h-screen flex flex-col items-center justify-center">

            <h1 className="w-full px-[3em] flex items-center justify-center">
                <span className="text-4xl pr-3">About Me</span>
                <span className=" bg-[#D4A373] rounded-md flex-1 w-full h-1 block relative bottom-0 mt-4"></span>
            </h1>

        </section>
    );
}