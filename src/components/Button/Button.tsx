import * as React from 'react'

interface Props {
  text: string
  onClick?(): any
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className='bg-primary-500 rounded-md'>
      {text}
    </button>
  )
}
