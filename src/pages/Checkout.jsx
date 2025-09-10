import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Box from "../components/Box";
import MyText from "../components/Text";  // <-- Import correcto
import Counter from "../components/Counter";

function Checkout() {
    const { cart } = useContext(CartContext);

    const totalAmount = cart.reduce((acc, item) => acc + item.prod.amount * item.quantity, 0);

    return (
        <Box className="checkout__container">
            <MyText as='h3'>Productos seleccionados</MyText>
            {cart.map(({ prod, quantity }) => (
                <Box key={prod.id} className="d-flex align-center space-between">
                    <MyText as='h4'>{prod.name}</MyText>
                    <Counter product={prod} />
                    <MyText as='b'>{`$ ${prod.amount * quantity}`}</MyText>
                </Box>
            ))}
            <Box className="d-flex align-center space-between">
                <MyText as='h4'>Total:</MyText>
                <MyText as='b'>{`$ ${totalAmount}`}</MyText>
            </Box>
        </Box>
    );
}

export default Checkout;
