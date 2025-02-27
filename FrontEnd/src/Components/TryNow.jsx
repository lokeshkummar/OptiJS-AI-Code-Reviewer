import { useEffect, useState } from 'react'
import axios from "axios"
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import LazyLoading from './LazyLoading'

const TryNow = () => {

    const [code, setCode] = useState(`function sum(){
        return 1+2;
        }`)

    const [review, setReview] = useState(``)
    const [isLoading, setisLoading] = useState(false)

    const reviewCode = async () => {
        setisLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/ai/get-res', { code })
            setReview(response.data);
        }
        catch (error) {
            console.error("axios error:", error.message);
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.error("Error data:", error.response.data);
                console.error("Error status:", error.response.status);
                console.error("Error headers:", error.response.headers);
            }
        }
        finally {
            setisLoading(false)
        }

    }

    useEffect(() => {
        prism.highlightAll()
    }, [])

    return (
        <div className='h-screen w-full font-bold flex gap-7 p-10 '>
            <div className='my-10 h-full w-1/2 bg-neutral-800 rounded-2xl border-2 border-neutral-600 flex flex-col' >
                <div className='h-[90%] w-full'>
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                        padding={25}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 20,
                        }}
                    />
                </div>
                <div className='h-[10%] bg-transparent rounded-full py-8 flex justify-end items-center px-3 m-2 '>
                    <button onClick={reviewCode} disabled={isLoading} className={`cursor-pointer active:scale-95 text-lg ease-in-out duration-300 px-6 rounded-full py-2 bg-yellow-300 text-black font-bold ${isLoading ? "bg-yellow-200 animate-pulse text-md " : "bg-yellow-300"} `} >{isLoading ? "Reviewing..." : "Review"}</button>
                </div>
            </div>
            <div className='overflow-scroll scroll-smooth font-normal my-10 h-full w-1/2 bg-neutral-800 py-5 px-7 leading-loose rounded-2xl border-2 border-neutral-600' >
                {
                    isLoading ? (<LazyLoading />) : (<Markdown
                        rehypePlugins={[rehypeHighlight]}
                    >{review}</Markdown>)
                }
            </div>
        </div>
    )
}

export default TryNow
