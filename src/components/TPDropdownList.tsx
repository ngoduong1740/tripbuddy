import React from 'react'
import Dropdown from './Dropdown'
import { TPDropdownListProps } from './type/types-common'

const TPDropdownList: React.FC<TPDropdownListProps> = ({ ...props }) => {
  return (
    <label className="block font-medium" htmlFor="">
      {props.label}
      <Dropdown
        options={props.options}
        onSelect={props.onSelect}
        placeholder={props.placeholder}
      />
    </label>
  )
}

export default TPDropdownList
