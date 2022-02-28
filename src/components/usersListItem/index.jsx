import './style.css'

export default function UsersListItem({index, name}) {
  return (
    <div className="users-list__item">
      <p>{name}</p>
    </div>
  )
}