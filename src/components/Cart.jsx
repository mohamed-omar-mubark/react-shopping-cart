// lib components
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Cart = ({
  shoppingCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  resetQuantities,
}) => {
  const productBodyTemplate = (rowData) => {
    return (
      <div className="flex-start-center gap-2">
        <img
          alt={rowData.name}
          src={`${rowData.image}`}
          width="60"
          className=" border-round-lg"
        />
        <span className="text-gray-700">{rowData.name}</span>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-plus"
          className="p-button-success"
          onClick={() => increaseQuantity(rowData.id)}
        />
        {rowData.quantity > 0 && (
          <Button
            icon="pi pi-minus"
            className="p-button-warning"
            onClick={() => decreaseQuantity(rowData.id)}
          />
        )}
        <Button
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={() => removeItem(rowData.id)}
        />
      </div>
    );
  };

  return (
    <div className="container py-4 flex flex-column gap-3">
      {shoppingCart.length === 0 && (
        <span className="flex-start-center gap-3 bg-white border-round-lg p-4">
          <i className="pi pi-shopping-cart"></i>
          <span>Your Cart Is Empty</span>
        </span>
      )}
      {shoppingCart.length > 0 && (
        <div className="p-4 bg-white border-round-lg">
          <DataTable
            value={shoppingCart}
            showGridlines
            rowHover
            tableStyle={{ minWidth: "50rem" }}
            className="mb-4">
            <Column body={productBodyTemplate} header="Product"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column body={actionBodyTemplate} header="Actions"></Column>
          </DataTable>

          <Button label="Reset" onClick={resetQuantities}></Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
