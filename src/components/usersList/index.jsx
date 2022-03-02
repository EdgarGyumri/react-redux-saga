import './style.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { allUsersTypes } from './../../store/types/index';
import UsersListItem from './../usersListItem/index';

export default function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: allUsersTypes.LOAD_USERS})
  }, [])
  const users = useSelector(state => state.users)

  return (
    <div className='users-list'>
      {
        users.map((item, index) => {
          return (
            <Link key={index} to={'user/' + item.id}>
              <UsersListItem name={item.name} />
            </Link>
          )
        })
      }
    </div>
  )
}