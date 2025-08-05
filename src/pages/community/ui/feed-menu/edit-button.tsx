type Props = {
  onClick: () => void
}

export const EditButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="body-large w-full px-3 py-3.5 text-left font-medium"
      onClick={onClick}
    >
      Edit
    </button>
  )
}
