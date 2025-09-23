import React from 'react'

function CrossButton({onClick}) {
  return (
    <>
     <button className="font-bold  px-3 py-1 rounded cursor-pointer text-yellow  text-2xl" onClick={onClick}>
          x
        </button>
    </>
  )
}

export default CrossButton