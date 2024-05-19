import React from 'react'
import Image from 'next/image'
const Card = (props) => {
  return (
    <div>
   <div className="bg-white p-6 flex flex-col md:flex-row items-center border border-gray-300 w-full md:w-3/4 lg:w-3/4 h-auto md:h-128 lg:h-128 group transition duration-300 hover:border-blue-500">
      <div className="flex-grow">
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 group-hover:text-blue-500">{props.subtitle}</h2>
        <hr className="border-gray-300 my-4 w-full group-hover:border-blue-500" />
        <p className="leading-relaxed text-base group-hover:text-blue-500">{props.description}</p>
        <br />
        <a href={props.readmore} className="inline-block group-hover:text-blue-500">Read More</a>
      </div>
      <div className="ml-auto flex-shrink-0 mt-4 md:mt-0 relative">
        <Image className="w-full" src={props.image} alt="content" width={120} height={200} />
      </div>
    </div>
    </div>
  )
}

export default Card
