import React, { useState } from "react"
import Image from "../../assets/images/graphic.png"
import "./Index.scss"
import myResume from "../../assets/documents/Yana's Resume.pdf"
import { language } from "../../data"
import SkillIcon from "../Skillicon/Index"

const Home = () => {
  const [btnText, setBtnText] = useState("Download Resume")
  const [download, setDownload] = useState(false)

  return (
    <div className="px-8 lg:pl-20">
      <div className="flex flex-col justify-around mt-0 lg:justify-center lg:content-center lg:items-center lg:flex-row-reverse lg:mt-2 min-h-[85vh]">
        <div className="mx-auto lg:h-1/2">
          <img src={Image} alt="" className="rounded-full graphic" />
        </div>
        <div className="w-full lg:w-1/2 lg:h-1/2">
          <span>Hi👋</span>
          <h1 className="text-8xl font-semibold">I'm Yana</h1>
          <p className="text-6xl font-light py-3 lg:text-3xl lg:py-0">
            I am a Full Stack Developer. I am currently doing my B.tech in
            Information Techology at IIITM Gwalior.
          </p>
          <a
            download="Yana's Resume"
            href={myResume}
            className={`animated-button my-6 ${
              download ? `text-2xl` : `text-3xl`
            }`}
            onClick={() => {
              setBtnText("Thank for downloading!")
              setDownload(true)
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {btnText}
          </a>
        </div>
      </div>
      <div id="techstack" className="">
        <h1 className="text-6xl font-semibold py-2 my-2">TechStacks 👩‍💻</h1>
        <div className="grid grid-cols-4 gap-4 px-2 md:grid-cols-4 px-4 lg:grid-cols-8 px-6 xl:grid-cols-9 px-8">
          {language.map((item, index) => {
            return <SkillIcon key={index} item={item} size={50} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
