import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function fetchProdutoPorSlug(slug) {
  const response = await fetch("https://api.npoint.io/8aa9f543b4ff36ab6e9f/produtos");

  if (!response.ok) {
    throw new Error("Houve um error ao detalhar produto.");
  }

  const produtos = await response.json();
  const produto = produtos.find((produto) => produto.id.toString() == slug);

  return produto;
}


export default async function ProdutoPage({ params }) {
  const produto = await fetchProdutoPorSlug(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}
