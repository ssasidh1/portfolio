import styles from './FrontPage.module.css'

export function FrontPage(){

    return (
        <>
          <h1 className={styles['hOne']}> Srinidhi's Portfolio </h1>
          <h2 className={styles['hOne']}>Checkout my Sites</h2>
          <div className={styles['sites']}>
          <a href="https://jot.nidhiworks.com" className={styles['app1']}>
            <span className={styles['notesEmo']}>🗒️</span>
            Jot - More than a note taking app 🚀</a>
          </div>
        </>
      )
}