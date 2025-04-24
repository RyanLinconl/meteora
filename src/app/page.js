import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";


async function fetchProdutosApi() {
  const res = await fetch(
     "https://api.npoint.io/5ce361b8a7fccfe63d6a/produtos"
  );

  if (!res.ok) {
    throw new Error("Não foi possível obter os dados")
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch("http://localhost:3000/api/categorias");

  if (!res.ok) {
    throw new Error("Não foi possível obter os dados")
  }

  const produtos = await res.json();

  return produtos;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const { categorias } = fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
