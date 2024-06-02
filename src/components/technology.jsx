import { RiReactjsLine}  from "react-icons/ri";
import { RiNodejsLine}  from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FcDebian } from "react-icons/fc";
import { FaUbuntu } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
const technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-indigo-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGolang className="text-7xl text-cyan-500"/>
            </div><br />
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400"/>
            </div>
           
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaUbuntu className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcDebian className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-cyan-400"/>
            </div>
            </div>
    </div>
  )
}

export default technology
