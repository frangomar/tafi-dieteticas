const db = require('../database/models');


const carritoController = {
    list: async (req, res) => {

        let productos = await db.Productos.findAll({
            //where: {
               // id: req.params.id,
                //usuario_id: req.session.userLogged
            //}
        }, );
        let totalPrice = 0;
        productos.forEach(producto => {
            totalPrice = Number(producto.price)/* Number(producto.subtotal)*/
        })

        return res.render("carritoDeCompras", {
            productos,
            totalPrice
        });

    },
}

module.exports = carritoController