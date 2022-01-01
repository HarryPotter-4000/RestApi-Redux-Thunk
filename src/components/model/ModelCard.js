import styles from './User.module.css'

const ModelCard = ({ name, username, avatar }) => {

  return (
    <div className={styles.box}>
      <img className={styles.avatar} src={avatar} alt="" />
      <div className={styles.title}>
        <p className={ styles.name }>{ name }</p>
        <p className={ styles.username }>{ username }</p>
      </div>
    </div>
	);
}

export default ModelCard;
