

import React from 'react'

export const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className='spinner-container'>
      <div className='spinner'></div>
    </div>
  )
}

