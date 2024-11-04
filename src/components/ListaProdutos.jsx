import styles from '../styles/listaProdutos.module.css'
import Loading from '../components/Loading'

export default function ListaProdutos( {lista} ){
  
    if(lista.length === 0){
      return (
        <>
          <Loading loading/>
        </>
      )
    }
    
    return(
      <body className={styles.body}>
        <ul className={styles.blocoLista}>
        {lista.map(produto => (
          <li className={styles.productBorder} key={produto.id}>
            <h2 className={styles.titulo}>{produto.title}</h2>
            <p className={styles.descricao}>{produto.description}</p>
            <p className={styles.preco}>Preço: ${produto.price}</p>
            <img className={styles.image} src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
      </body>
    )
}