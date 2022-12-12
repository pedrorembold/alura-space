import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import Banner from './banner.png'
import styles from './PaginaInicial.module.scss'


export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={Banner} alt="" />
          </div>
        </section>
      </main>
      <div className={styles.galeria}>
        <Galeria />
      </div>
      <Rodape />
    </>
  )
}