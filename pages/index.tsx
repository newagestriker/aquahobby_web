import WithTheme from '../components/wrappers/ThemeWrapper';
import styles from '../styles/Home.module.scss'

function Home(props: any) {
  //TODO:Explore Change to ContextConsumer
  const { themeContext } = props
  const simplifiedTheme = themeContext.currentTheme.value
  console.log(themeContext.currentTheme.value)
    return(
      <div className={styles[`container--${simplifiedTheme}`]}>
        <main className={styles.main}>
          MainPage
        </main>

        <footer className={styles.footer}>
          Aqua Hobby
        </footer>
      </div>
    )
}

export default WithTheme(Home);
