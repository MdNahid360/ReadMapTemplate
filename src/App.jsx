import { useState } from 'react'
import './App.css'

function App() {
  const [on, setOn] = useState(true)
  return (
    <>
    <h1 className='text-[black] pb-12'>ROAD MAP</h1>
      <button className="first-box bg-black text-white relative after:absolute after:left-0 after:right-0 after:bottom-[-70px] after:w-[2px] after:h-[70px] after:bg-[#c0c0c0] after:m-auto">
         fundamentals
      </button>

      <ul className="second-box p-4 bg-[#efeded] w-[300px] m-auto mt-[70px] border rounded-lg">
         <li>
            <button className='bg-black w-full relative '>item 1</button>

            <button className='bg-black text-white w-full relative mt-3'>item 2
               {/* this line shape */}
               <img
               src="/public/left.svg"
               alt=""
               className='absolute right-[-100px] top-[-23px] bottom-0 my-auto w-[100px] '
               />
               {/* sub items in a single item */}
                <ul className='bg-[#80808094] p-3 w-[230px] rounded-lg absolute right-[-330px] top-[-70px]'>
                   <li className="bg-black p-3 text-white rounded-md mt-2">item1</li>
                   <li className="bg-black p-3 text-white rounded-md mt-2">item2</li>
                </ul>
            </button>

             <button className=' bg-black w-full relative mt-3'>item 3</button>
             <button className=' bg-black w-full relative mt-3'>item 4</button>
             <button className=' bg-black w-full relative mt-3'>item 5</button>

            <button onClick={()=> setOn(!on)} className='bg-black text-white w-full relative mt-3'>item 6 || this is toggle 🙂
              {/* this is line shape */}
             {on ? <img
              src="/public/right.svg"
              alt=""
              className='absolute left-[-110px] top-[-165px]'
              /> : ''}
              {/* sub items in a single item */}
                {
                  on ? 
                   <ul className='bg-[#80808094] p-3 w-[230px] rounded-lg absolute left-[-340px] top-[-234px]'>
                   <li className="bg-black p-3 text-white rounded-md mt-2">item1</li>
                   <li className="bg-black p-3 text-white rounded-md mt-2">item2</li>
                </ul>
                  : ''
                }
            </button>
         </li>
      </ul>
    </>
  )
}

export default App
