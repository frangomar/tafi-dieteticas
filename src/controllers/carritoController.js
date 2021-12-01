const db = require('../database/models');


const carritoController = {

    list: async (req, res) => {
        let carros = await db.Carros.findAll({
            include: ["productos", "ordenes", "usuarios"],
            where: {
                order_id: null,
                user_id: req.session.userLogged.id
            }
        }, );
        let totalPrice = 0;
        carros.forEach(carro => {
            totalPrice = Number(totalPrice) + Number(carro.subtotal)
        })

        return res.render("CarritoDeCompras", {
            carros,
            totalPrice
        });

    },

    add: async (req, res) => {
        let productFound = await db.Carros.findByPk(req.params.id);
        await db.Carros.create({
            quantity: Number(req.body.quantity),
            subtotal: Number(req.body.quantity) * Number(productFound.price),
            idProduct: productFound.id,
            usuario_id: req.session.userLogged.id

        })
        return res.redirect("/productCart")
    },
    pedido: async (req, res) => {
        let productos = await db.Productos.findAll({

            include: ["producto", "orden", "usuario"],
            where: {
                usuario_id: req.session.userLogged.id,
                order_id: null
            }
        })
        let totalPrice = 0;
        productos.forEach(item => {
            totalPrice = Number(totalPrice) * Number(item.subtotal)
        })
        let pedidos = await db.Orders.findAll()
        let newId = ordersFound.length === 0 ? 1 : ordersFound[ordersFound.length - 1].id + 1
        let newOrder = await db.Orders.create({
            importe_total: totalPrice,
            usuario_id: req.session.userLogged.id,
            fecha: new Date(),
            id: newId
        })

        await db.Items.update({
            order_id: newOrder.id
        }, {
            where: {
                usuario_id: req.session.userLogged.id,
                order_id: null,
            }
        })
        return res.redirect("/productCart")
    }


}

module.exports = carritoController