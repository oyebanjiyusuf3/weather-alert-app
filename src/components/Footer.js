import React from 'react'

const Footer = () => {
    let today=new Date()
  return (
   <footer className='text-character'>
    <div className='row justify-content-center mt-3 mb-4'>
    <div>
    <h5>Designed by Yusuf Oyebanji  - &copy; {today.getFullYear()}</h5>
    </div>
    </div>
    </footer>
  )
}

export default Footer


