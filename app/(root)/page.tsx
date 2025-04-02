import ProdutcList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProdutcList data={latestProducts} title="Newest Arribals" limit={4} />
    </>
  );
};

export default Homepage;
