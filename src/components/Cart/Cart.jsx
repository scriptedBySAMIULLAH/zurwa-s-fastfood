import { useCart } from "../Contexts";
import CrossButton from "./CrossButton";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
function Cart() {
  const { isCartOpen, cartToogle, items } = useCart();

  //checkout

  const checkout = () => {
    if (items.length == 0) return;

    const phoneNumber = "923280033444";

    const orderDetail = items.map((item, i) => {
        const sizeCheck = item.id.split("-")[1];

        return `${i + 1}. ${item.name}  ${
          sizeCheck.includes("default") ? "" : sizeCheck
        } Quantity:${item.qty}`;
      }).join("\n");

    const message = document.getElementById("msg").value || "Not Provided";

    const Order = `
      New Order from Website:
      ----------------------
      ${orderDetail}

      Delivery Address: ${message}
    `.trim();

    //encode bc browser not allow spaces special chrs etc

    const encodedMsg = encodeURIComponent(Order);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
  };
  const styles = {
    checkout:
      "w-full bg-green-500 hover:bg-green-600 text-white py-1  sm:py-2 px-2  sm:px-4 rounded-lg font-bold transition mb-2",
  };
  return (
    <section
      className={`bg-footerBg fixed top-0 right-0  h-screen z-50 text-white w-full  transition-transform  duration-500  sm:max-w-sm flex flex-col ${
        isCartOpen ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <header className="flex justify-between items-center border-b border-slate-600 px-4 py-2 sticky top-0 bg-footerBg z-10">
        <h1 className="font-medium sm:font-bold">Your Cart</h1>
        <CrossButton onClick={cartToogle} />
      </header>
      <div className="cart-container  flex-1 overflow-y-auto px-2 py-3 space-y-3">
        {items && items.length > 0 ? (
          items.map((item, index) => <CartItem key={index} cartItem={item} />)
        ) : (
          <p className="text-gray-400 text-center">Your cart is empty</p>
        )}
      </div>
      <footer className="border-t border-slate-600 px-3 py-3 space-y-3 sticky bottom-0 bg-footerBg z-10">
        <TotalPrice />

        <textarea
          placeholder="Enter delivery address (optional)"
          className="w-full p-2 rounded resize-none h-20 text-white border"
          id="msg"
        ></textarea>

        {items.length > 0 && (
          <div>
            <button className={styles.checkout} onClick={checkout}>
              Checkout on WhatsApp
            </button>
            <p className="text-xs text-gray-400 mt-1">
              You will be redirected to WhatsApp with a pre-filled order
              message.
            </p>
          </div>
        )}
      </footer>
    </section>
  );
}

export default Cart;
