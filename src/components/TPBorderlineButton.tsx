import React from 'react'
import { TPBorderlineButtonProps } from './type/types-common'

const TPBorderlineButton: React.FC<TPBorderlineButtonProps> = ({
  ...props
}) => {
  return (
    <button
      type="button"
      className="flex items-center rounded-3xl font-medium border-[#397D54] border-2 py-2 px-6 text-[#397D54] font-urbanist"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

export default TPBorderlineButton
