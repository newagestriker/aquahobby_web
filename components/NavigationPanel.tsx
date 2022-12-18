import Link from 'next/link'
import { ChangeEvent, useContext } from 'react'
import ThemeContext, { IThemeActionType, setDarkTheme, setLightTheme, Theme } from '../providers/theme-context'
import styles from '../styles/NavigationPanel.module.scss'
import Toggler from './Toggler'
export default function NavigationPanel() {
    const themeContext = useContext(ThemeContext)
    const currentTheme = themeContext?.currentTheme.value ?? Theme.dark
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        e.target.checked ? themeContext?.setCurrentTheme(setDarkTheme()) : themeContext?.setCurrentTheme(setLightTheme())
    }
    return (
        <div className={styles[`container--${currentTheme}`]}>
            <Link className={styles.link} href='/'>AquaHobby</Link>
            <Link className={styles.link} href='/plant-list'>Plants Database</Link>
            <Toggler checked={currentTheme === Theme.dark} onChange={handleOnChange} />
        </div>
    )
}