import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-4 text-lg font-semibold">
        Your cart is empty, Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
