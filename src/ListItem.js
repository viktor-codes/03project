const ListItem = ({ item }) => {
  return (
    <li className="list-item my-2">
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem
