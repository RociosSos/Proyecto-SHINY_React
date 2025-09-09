import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {

    const cart = useContext(CartContext)



    return (
        <Box>
            <Text as='h3'>Productos seleccionados</Text>
            {
                cart.map(
                    ({ prod, quantity }) =>
                        <Box className="d-flex align-center space-between">
                            <Text as='h4'>{prod.name}</Text>
                            <Counter product={prod} />
                            <Text as='b'>{`$ ${prod.amount * quantity}`}</Text>
                        </Box>
                )
            }
            <Box className="d-flex align-center space-between">
                <Text as='h4'>Total:</Text>
                <Text as='b'>{`$ ${totalAmount}`}</Text>
            </Box>
        </Box>
    )
}

export default Checkout;