import React from 'react'

export const ListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
      {children}
    </div>
  )
}
