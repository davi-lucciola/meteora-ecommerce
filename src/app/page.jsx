import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  // const response = await fetch("http://localhost:3000/api/produtos");
  const response = await fetch("https://api.npoint.io/8aa9f543b4ff36ab6e9f/produtos");

  if (!response.ok) {
    throw new Error("Não foi possivel obter os produtos.");
  }

  const produtos = await response.json();
  return produtos;
}

async function fetchCategoriasApi() {
  const response = await fetch("https://api.npoint.io/8aa9f543b4ff36ab6e9f/categorias");

  if (!response.ok) {
    throw new Error("Não foi possivel obter os produtos.");
  }

  const categorias = await response.json();
  return categorias;
}

export default async function Home() {
  const produtosPromise = fetchProdutosApi();
  const categoriasPromise = fetchCategoriasApi();
  const [produtos, categorias] = await Promise.all([produtosPromise, categoriasPromise])

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
