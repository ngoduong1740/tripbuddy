export interface DropdownValue {
  id: string
  value: string
}

export interface CardContentComponentProps {
  label: string
  title: string
}

export interface TPBorderlineButtonProps {
  label: string
  onClick: () => void
}

export interface TPDropdownListProps {
  label?: string
  options: DropdownValue[]
  placeholder: string
  onSelect: (item: DropdownValue) => void
}
