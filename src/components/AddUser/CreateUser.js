import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { postUser } from '../redux/actions';
import styles from './CreateCard.module.css'
import axios from "axios";

export default function CreateUser() {
  const [name, setName] = useState("")
  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const onCreateUser = (event) => {
    event.preventDefault();

    
    const user = {
      name,
      username,
      avatar,
    }
    axios.post("http://domer.tech:9999/users/", user)
          .then(res => console.log(res, 'Отправка успешна'))
          .then(dispatch(postUser(user)))
          .catch(err => console.log(err));
    setName("");
    setUserName("");
    setAvatar("");
  };

  return (
    <div>
      <form className={styles.form__container} onSubmit={onCreateUser}>
      <input className={styles.input}
        type="name"
        placeholder="User name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className={styles.input}
        type="username"
        placeholder="@...User nickname "
        value={username}
        onChange={(e) => {
          if (e.target.value[0] === '@') {
            setUserName(e.target.value)
          } else {
            setUserName('@'+e.target.value)
          }
        }}
      />
      <input className={styles.input}
        type="avatar"
        placeholder="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button className={styles.button}
        type="submit" onClick={onCreateUser}>
        Create
      </button>
      </form>
    </div>
  );
}