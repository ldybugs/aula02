import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos( {lista} ){
    return(
        <ul>
        {lista.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: ${produto.price}</p>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
    )
}