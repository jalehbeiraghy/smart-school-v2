import React from 'react'
import Image from 'next/image'

const body = () => {
  return (
    <div>
        <div className=' min-h-screen w-full flex flex-row'>
            <div className='  min-h-screen w-3/5 grid grid-cols-2 p-28'>
                
                <div className=' bg-gray-200 flex justify-center items-center m-10  rounded-lg '>
                        <p className=' text-center text-gray-600 text-2xl font-bold'> Student </p>
                    </div>
                    <div className=' bg-gray-400 flex justify-center items-center m-10 rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold'> Teacher </p>
                    </div>
                    <div className=' bg-gray-400 flex justify-center items-center m-10 rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold'> Parents </p>
                    </div>
                    <div className=' bg-gray-200 flex justify-center items-center m-10 rounded-lg  '>
                        <p className=' text-center text-gray-600 text-2xl font-bold'> Admin </p>
                    </div>

                </div>
            

            <div className='  w-2/5 flex flex-col '>
                <div className=' h-3/5 bg-orange-300'>
                     {/* <Image src='/images/2.jpg' width='800' height='800' alt='fast school' />  */}

                </div>
                <div className=' flex h-2/5 '>
            
            <div className=' w-1/2 flex flex-col'>
                <div className=' h-1/3 bg-red-600 w-full flex justify-center items-center' > 
                <p className=' text-center  text-white text-2xl font-bold'> Start today </p>
                </div>
                <div className=' h-2/3 bg-gray-200 flex items-center justify-center'>
                    <p className='font-bold text-xl text-center text-red-600'>No Blind Spot </p> 
                    </div>
            </div>
            <div className=' w-1/2 bg-yellow-500 flex items-center justify-center '> The chart </div>
            </div> 

            </div>
            </div>
       

    </div>
  )
}

export default body