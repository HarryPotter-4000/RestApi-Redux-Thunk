import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import styles from './CreateCard.module.css'
import CreateUser from "./CreateUser";


export default function UserList() {
  const users = useSelector((state) => state.users);

  return (
    <div className={styles.container}>
      <CreateUser />
      <div className={styles.container}>
        {users.map(user => {
          return (
            <UserItem
              name={user.name}
              username={user.username}
              avatar={user.avatar}
              key={ user.id }/>
          )
        })}
        </div>
    </div>
  );
}


