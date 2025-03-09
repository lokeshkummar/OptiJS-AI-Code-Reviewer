import Threads from './Ui/Threads'
import TrueFocus from "./Ui/TrueFocus"
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='absolute top-60 md:top-44 flex flex-col justify-center gap-5'>
                <TrueFocus

                    sentence="JS Code Reviewer"

                    manualMode={false}

                    blurAmount={5}

                    borderColor="yellow"

                    animationDuration={2}

                    pauseBetweenAnimations={1}

                />
                <div className='z-10 flex flex-col gap-10 md:gap-7 justify-center'>
                    <p className='px-5 md:px-[30%] text-center font-bold text-neutral-500'><q>OptiJS - AI powered code reviewer. Get instant feedback, best practices, and smart suggestions to write cleaner, optimized code effortlessly.💡✨ </q></p>
                    <button >
                        <Link to="/try-now" className='text-neutral-400 font-bold px-7 md:px-6 shadow-2xl shadow-white rounded-full hover:bg-neutral-600 hover:text-white ease-in-out duration-300 py-4 md:py-3 border-2 border-neutral-700'>Try it Now 🚀</Link>
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