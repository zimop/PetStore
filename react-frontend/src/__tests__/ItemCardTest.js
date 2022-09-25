import { render, screen } from "@testing-library/react";
import ItemCard from "../containers/components/ItemCard";

const itemData = {
  ProductId: 3,
  ProductName: "Morbius",
  Price: 1000000000.0,
  ProductImage: "https://picsum.photos/200/200",
};

test("Test rendering", () => {
  render(<ItemCard itemData={itemData} />);
  const title = screen.getByText("Morbius");
  expect(title).toBeInTheDocument();
  const price = screen.getByText("$1000000000.00");
  expect(price).toBeInTheDocument();
});
