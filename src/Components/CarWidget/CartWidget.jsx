const CartWidget = () => {
return <div>
<button className="btn- btn-outline-primary position-relative">
<i className="bi bi-cart4"></i>
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    15+
    <span className="visually-hidden">Productos en carrito</span>
</span>
</button>

</div>;
};

export default CartWidget;