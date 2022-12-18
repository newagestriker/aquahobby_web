import { ChangeEventHandler } from 'react'
import styles from '../styles/Toggler.module.scss'
export interface ITogglerProps {
    checked: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}
export default function Toggler({ checked, onChange }: ITogglerProps) {
    return <label className={styles.switch}>
        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={onChange} />
        <span className={styles.slider}></span>
    </label>
}