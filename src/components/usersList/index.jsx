import UsersListItem from "../usersListItem";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import types from './../../store/types/index';

export default function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: types.allUsersTypes.LOAD_USERS})
  }, [])
  const users = useSelector(state => state.users);
  return (
    <div>
      {
        users.map((item, index) => {
          return (
            <Link to={'posts/' + item.id}>
              <UsersList key={index} name={item} />
            </Link>
          )
        })
      }
    </div>
  )
}