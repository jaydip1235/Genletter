import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <button className={`${styles.btn}`}>
        {props.content}
    </button>
  )
}
