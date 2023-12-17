import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-4 px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-8 font-semibold text-md">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
