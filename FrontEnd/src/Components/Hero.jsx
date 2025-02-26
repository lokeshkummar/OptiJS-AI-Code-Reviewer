import React from 'react'
import Threads from './Ui/Threads'
import TrueFocus from "./Ui/TrueFocus"

const Hero = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='absolute top-40 flex flex-col justify-center gap-7 mb-10'>
                <TrueFocus

                    sentence="JS Code Reviewer"

                    manualMode={false}

                    blurAmount={5}

                    borderColor="yellow"

                    animationDuration={2}

                    pauseBetweenAnimations={1}

                />
                <div className='z-40 flex flex-col gap-7 justify-center'>
                    <p className='px-[30%] text-center font-bold text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni similique numquam minus dolor sit harum omnis, temporibus natus. Omnis?</p>
                    <button className='active:scale-90 ease-in-out duration-200'>
                        <a href="#" className='text-neutral-400 font-bold px-6 shadow-2xl shadow-white rounded-full hover:bg-neutral-600 hover:text-white ease-in-out duration-300 py-3 border border-neutral-500'>Try Now 🚀</a>
                    </button>
                </div>
            </div>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>

                <Threads

                    amplitude={1}

                    distance={0}

                    enableMouseInteraction={true}

                />

            </div>
        </div>
    )
}

export default Hero