import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleUserTypes } from "../../store/types";

export default function SingleUser() {
  const {id} = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: singleUserTypes.LOAD_USER, id: id})
  }, [])
  const user = useSelector(state => state.singleUser)
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Username: {user.username}</h3>
      <p>Email: {user.email}</p>
      <span>Address: {user.address}</span>
    </div>
  )
}