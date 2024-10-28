import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos";

export default function Home() {
  
  const [listaHome, setLista] = useState([]);

  useEffect(() => { 
    const receberListaProdutos = async () => {
        try { 
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
    } catch (erro) {
        console.error("ERRO");
      }
    };
    receberListaProdutos();
  }, []);

  return (
    <>
    <ListaProdutos lista = {listaHome}/>
    </>
  )
}