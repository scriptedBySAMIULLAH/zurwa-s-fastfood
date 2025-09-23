import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
function Spinner({loader}) {
  return (
    <>
    <MoonLoader
    color='#434325'
    loading={loader}
    size={100}
    />
    </>
  )
}

export default Spinner