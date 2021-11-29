const fs = require("fs");
const path = require("path");
const {
  validationResult
} = require('express-validator');
const db = require('../database/models');
const users = require("../database/models/Usuario")

const usersControllers = {
  //metodo para mostrar todos los usuarios (vista para admin)
  list: (req, res) => {
    db.Usuarios.findAll()
      .then(function (usuarios) {
        res.render('adminUsers', {
          usuarios: usuarios
        });
      })
  },
  //metodo para renderizar vista de formulario de registro de usuarios
  create: async (req, res) => {
    res.render("register")
  },
  //metodo para procesar y almacenar usuario registrado
  store: async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.errors,
        oldData: req.body,
      })
    } else {
      db.Usuarios.create({
        firstName: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        image: req.file ? req.file.filename : "userDefault.png",
        access_id: 1,
      })
      .then(res.redirect("/users/login"))
    }
  },
  //metodo para renderizar vista de login
  login: (req, res) => {
    return res.render("login")
  },
  //metodo de procesamiento de login
  processLogin: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let userToLogin = await db.Usuarios.findOne({
        where: {
          email: req.body.email
        }
      });
      if (userToLogin) {
        if (userToLogin.password == req.body.password) {
          req.session.userLogged = userToLogin;
          if (req.body.recordame) {
            res.cookie('usuarioId', userToLogin.id, {
              maxAge: 60000
            })
          }
          return res.redirect('/')
        }
      }
    }
    return res.render('login', {
      errors: errors.errors,
      old: req.body
    });
  },
  //metodo para renderizar vista del perfil
  profile: (req, res) => {
    res.render("profile", {
      user: req.session.userLogged
    })
  },
  //metodo para hacer logout
  logout: (req, res) => {
    req.session.destory();
    return res.redirect('/')
  },
}

module.exports = usersControllers;