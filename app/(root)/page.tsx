import ProdutcList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = async () => {
  return (
    <>
      <ProdutcList
        data={sampleData.products}
        title="Newest Arribals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
