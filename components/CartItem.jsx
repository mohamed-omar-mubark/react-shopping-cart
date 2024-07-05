const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  const { id } = item;
  const { name } = item;
  const { quantity } = item;

  return (
    <div className="p-4 border-1 border-gray-300 rounded-lg flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <span className="text-xl font-semibold">{name}</span>
        <p className="text-xl font-semibold">
          Quantity: <span className="font-bold text-blue-600">{quantity}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button onClick={() => increaseQuantity(id)} className="bg-blue-400">
          <i className="pi pi-plus"></i>
        </button>
        <button onClick={() => decreaseQuantity(id)} className="bg-orange-400">
          <i className="pi pi-minus"></i>
        </button>
        <button onClick={() => removeItem(id)} className="bg-red-400">
          <i className="pi pi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
