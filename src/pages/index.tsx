import Head from 'next/head'

import { useAppStore } from "../lib/store"
import BubbleSort from "@/components/sort/BubbleSort";
import {useState} from "react";
import InsertionSort from "@/components/sort/InsertionSort";
import SelectionSort from "@/components/sort/SelectionSort";
import Image from 'next/image'
import githubLogo from '../../public/github.jpg'
export default function Home() {
    const {isProcessing} = useAppStore()
    const [currentAlgorithm, setCurrentAlgorithm] = useState("Bubble Sort" as string)
    const algorithms = ["Bubble Sort","Insertion Sort","Selection Sort"]
  return (
    <>
      <Head>
        <title>Algorithm Visualizer </title>
      </Head>
      <main >
<div >
<div className=" mt-16 mb-5 p-1 mx-auto">
    <h1 className="text-white font-semibold text-center p-3 tracking-widest	text-3xl">Algorithm Visualizer</h1>

<div className="flex justify-center gap-5 flex-wrap ">
    {algorithms.map((algorithm,index) => {
        return <button key={index} className={`px-2 py-1 text-sm  text-white rounded-lg shadow  cursor-pointer bg-gray-500 ${isProcessing ?? ' opacity-25 '}  
             ${algorithm==currentAlgorithm?'bg-background shadow-neutral-700':'bg-gray'}  `}
                       onClick={e => isProcessing ? e.preventDefault() :setCurrentAlgorithm(algorithm)}

        >
            {algorithm}</button>
    })}
</div>
</div>
</div>

          {currentAlgorithm == "Bubble Sort" && <BubbleSort/>}
          {currentAlgorithm == "Insertion Sort" && <InsertionSort/>}
          {currentAlgorithm == "Selection Sort" &&<SelectionSort/>}

      </main>

        <footer className="flex items-center justify-center text-white text-xs mt-20 gap-1">
            <a href="https://github.com/SARAH-Alzmammi" target="_blank" rel="noreferrer">
                <Image src={githubLogo} width={30}  height={30} alt="github logo"/>
            </a>
            <p> ©2023 Sarah Alzmammi</p>


        </footer>
    </>
  )
}
