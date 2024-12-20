import React from 'react'

const Button = ({id, title, leftIcon, rightIcon, containerClass}) => {
  return (
   <button id={id} className={`group relative z-10 cursor-pointer w-fit overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
    {leftIcon}
    <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>{title}</div>
    </span>
    {rightIcon}
   </button>
  )
}

export default Button