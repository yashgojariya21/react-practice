import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div style={{ width }} className="font-bold text-xl flex items-center">
      <span className="text-orange-500 text-2xl mr-1.5">⚡</span>
      <span className="text-gray-900 font-extrabold">
        Mega<span className="text-orange-600">Blog</span>
      </span>
    </div>
  )
}

export default Logo