import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './rodape.module.scss'


export default function Rodape(){
    return(
<footer className={styles.rodape}>
    <div className={styles.icones}>
        <a className={styles.icone}>
            <img src={facebook} alt=""/>
        </a>
        <a>
            <img src={twitter} alt=""/>
        </a>
        <a>
            <img src={instagram} alt=""/>
        </a>
    </div>
    <p className={styles.texto}>Desenvolvido por Pedro Rembold</p>
</footer>

    )
}