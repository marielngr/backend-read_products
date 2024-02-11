import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  //hier noch Fall abdecken, dass ID noch undefined ist
  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length ? <Comments reviews={data.reviews} /> : null}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
