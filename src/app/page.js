import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { getCategorias } from "../lib/api";

async function fetchProdutosApi() {
  const response = await fetch("http://localhost:3000/api/produtos");

  if (!response.ok) {
    throw new Error("Não foi possivel obter os produtos.");
  }

  const data = await response.json();
  return data;
}

export default async function Home() {
  const { produtos } = await fetchProdutosApi();
  const categorias = getCategorias();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
