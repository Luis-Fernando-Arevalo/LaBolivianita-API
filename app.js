const express = require("express");
const mysql = require("mysql");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());



//mysql://b9d12d02df6040:d7ce73f5@us-cdbr-east-02.cleardb.com/heroku_6ffcfba6e243185

//Route
app.get("/", (req, res) => {
  //MySql
const connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b9d12d02df6040",
  password: "d7ce73f5",
  database: "heroku_6ffcfba6e243185",
});
  res.send("Welcome to my API!");
  connection.end();
});

// METODOS Bolsas
app.get("/bolsas", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b9d12d02df6040",
    password: "d7ce73f5",
    database: "heroku_6ffcfba6e243185",
  });
  const sql = "SELECT * FROM Bolsa";
  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("No existe Bolsas registradas");
    }
  });
  connection.end();
});

app.get("/bolsas/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b9d12d02df6040",
    password: "d7ce73f5",
    database: "heroku_6ffcfba6e243185",
  });
  const { id } = req.params;
  const sql = `SELECT * FROM Bolsa WHERE id_bolsa = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("No existe la bolsa seleccionada");
    }
  });
  connection.end();

});

app.post("/addBolsa", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b9d12d02df6040",
    password: "d7ce73f5",
    database: "heroku_6ffcfba6e243185",
  });
  const sql = "INSERT INTO Bolsa SET ?";

  const bolsaObj = {
    tamanio: req.body.tamanio,
  };

  connection.query(sql, bolsaObj, (error) => {
    if (error) throw error;
    res.send("Bolsa Agregada");
  });
  connection.end();

});

app.put("/updateBolsa/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b9d12d02df6040",
    password: "d7ce73f5",
    database: "heroku_6ffcfba6e243185",
  });
  const { id } = req.params;
  const { tamanio } = req.body;
  const sql = `UPDATE Bolsa SET tamanio = '${tamanio}' WHERE id_bolsa = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Bolsa Modificada");
  });
  connection.end();

});

app.delete("/deleteBolsa/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b9d12d02df6040",
    password: "d7ce73f5",
    database: "heroku_6ffcfba6e243185",
  });
  const { id } = req.params;
  const sql = `DELETE FROM Bolsa WHERE id_bolsa = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Bolsa Eliminada");
  });
  connection.end();
});

// // METODOS FUNDAS
// app.get("/funda", (req, res) => {
//   const sql = "SELECT * FROM funda";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe fundas registradas");
//     }
//   });
// });

// app.get("/funda/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM Funda WHERE id_funda = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe la funda seleccionada");
//     }
//   });
// });

// app.post("/addFunda", (req, res) => {
//   const sql = "INSERT INTO Funda SET ?";

//   const fundaObj = {
//     tamanio: req.body.tamanio,
//   };

//   connection.query(sql, fundaObj, (error) => {
//     if (error) throw error;
//     res.send("Funda Agregada");
//   });
// });

// app.put("/updateFunda/:id", (req, res) => {
//   const { id } = req.params;
//   const { tamanio } = req.body;
//   const sql = `UPDATE Funda SET tamanio = '${tamanio}' WHERE id_funda = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Funda Modificada");
//   });
// });

// app.delete("/deleteFunda/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM Funda WHERE id_funda = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Funda Eliminada");
//   });
// });

// // METODOS Material_Maceta
// app.get("/material_maceta", (req, res) => {
//   const sql = "SELECT * FROM material_maceta";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/material_maceta/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM Material_Maceta WHERE id_material_maceta = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// app.post("/addMaterialMace", (req, res) => {
//   const sql = "INSERT INTO material_maceta SET ?";

//   const materialObj = {
//     nombre: req.body.nombre,
//   };

//   connection.query(sql, materialObj, (error) => {
//     if (error) throw error;
//     res.send("Material Agregado");
//   });
// });

// app.put("/updateMaterialMace/:id", (req, res) => {
//   const { id } = req.params;
//   const { nombre } = req.body;
//   const sql = `UPDATE material_maceta SET nombre = '${nombre}' WHERE id_material_maceta = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Material Modificado");
//   });
// });

// app.delete("/deleteMaterialMace/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM Material_Maceta WHERE id_material_maceta = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Material Eliminado");
//   });
// });

// // METODOS Tipo Marmol
// app.get("/tipo_marmol", (req, res) => {
//   const sql = "SELECT * FROM tipo_marmol";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/tipo_marmol/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM tipo_marmol WHERE id_tipo_marmol = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// // METODOS Tipo planta
// app.get("/tipo_planta", (req, res) => {
//   const sql = "SELECT * FROM tipo_planta";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/tipo_planta/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM tipo_planta WHERE id_tipo_planta = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// // METODOS Tipo tierra
// app.get("/tipo_tierra", (req, res) => {
//   const sql = "SELECT * FROM tipo_tierra";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/tipo_tierra/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM tipo_tierra WHERE id_tipo_tierra = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// // METODOS Proveedor
// app.get("/proveedor", (req, res) => {
//   const sql = "SELECT * FROM proveedor";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/proveedor/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM proveedor WHERE id_proveedor = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// app.post("/addProveedor", (req, res) => {
//   const sql = "INSERT INTO proveedor SET ?";

//   const proveedorObj = {
//     nombre_proveedor: req.body.nombre_proveedor,
//     producto: req.body.producto,
//     telefono: req.body.telefono,
//   };

//   connection.query(sql, proveedorObj, (error) => {
//     if (error) throw error;
//     res.send("Proveedor Agregado");
//   });
// });

// app.put("/updateProveedor/:id", (req, res) => {
//   const { id } = req.params;
//   const { nombre_proveedor, producto, telefono } = req.body;
//   const sql = `UPDATE proveedor SET nombre_proveedor = '${nombre_proveedor}', producto = '${producto}', telefono = '${telefono}' WHERE id_proveedor = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Proveedor Modificado");
//   });
// });

// app.delete("/deleteProveedor/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM proveedor WHERE id_proveedor = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Proveedor Eliminado");
//   });
// });

// // METODOS Producto
// app.get("/producto ", (req, res) => {
//   const sql = "SELECT * FROM producto";
//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe registro");
//     }
//   });
// });

// app.get("/producto/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM producto WHERE id_producto = ${id}`;

//   connection.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.json(result);
//     } else {
//       res.send("No existe");
//     }
//   });
// });

// app.post("/addProducto", (req, res) => {
//   const sql = "INSERT INTO producto SET ?";
//   let producto;

//   const productoObj = {
//     id_proveedor: req.body.id_proveedor,
//     tipo_producto: req.body.tipo_producto,
//     nombre: req.body.nombre,
//     imagen: req.body.imagen,
//     cantidad: req.body.cantidad,
//     precio: req.body.precio,
//     costo_ingreso: req.body.costo_ingreso,
//     fecha_ingreso: new Date(),
//     utilidad: req.body.precio - req.body.costo_ingreso,
//     descripcion: req.body.descripcion,
//   };

//   connection.query(sql, productoObj, (error) => {
//     if (error) throw error;
//     // res.send("Proveedor Agregado");
//   });

//   const consultaProducto =
//     "SELECT id_producto FROM Producto ORDER BY id_producto DESC LIMIT 1";
//   connection.query(consultaProducto, (error, result) => {
//     if (error) throw error;
//     if (result.length > 0) {
//       producto = result[0].id_producto;
//       switch (req.body.tipo_producto) {
//         case "Planta":
//           const sql2 = "INSERT INTO planta SET ?";
//           const plantaObj = {
//             id_bolsa: req.body.id_bolsa,
//             id_funda: req.body.id_funda,
//             id_tipo_planta: req.body.id_tipo_planta,
//             id_producto: producto,
//             tamanio_planta: req.body.tamanio_planta,
//             cuidados: req.body.cuidados,
//             observaciones: req.body.observaciones,
//           };
//           connection.query(sql2, plantaObj, (error) => {
//             if (error) throw error;
//             res.send("Planta Agregada");
//           });
//           break;
//         case "Maceta":
//           const sql3 = "INSERT INTO maceta SET ?";
//           const macetaObj = {
//             id_material: req.body.id_material,
//             id_producto: producto,
//             codigo: req.body.codigo,
//             color: req.body.color,
//             dimenciones: req.body.dimenciones,
//           };
//           connection.query(sql3, macetaObj, (error) => {
//             if (error) throw error;
//             res.send("Maceta Agregada");
//           });
//           break;
//         case "Tierra":
//           const sql4 = "INSERT INTO tierra SET ?";
//           const tierraObj = {
//             id_tipo_tierra: req.body.id_tipo_tierra,
//             id_producto: producto,
//             tamanio: req.body.tamanio,
//           };
//           connection.query(sql4, tierraObj, (error) => {
//             if (error) throw error;
//             res.send("Tierra Agregada");
//           });
//           break;
//         case "Marmol":
//           const sql5 = "INSERT INTO marmol SET ?";
//           const marmolObj = {
//             id_tipo_marmol: req.body.id_tipo_marmol,
//             id_producto: producto,
//             color: req.body.color,
//             tamanio: req.body.tamanio,
//           };
//           connection.query(sql5, marmolObj, (error) => {
//             if (error) throw error;
//             res.send("Marmol Agregado");
//           });
//           break;

//         default:
//           res.send("No se pudo agregar el producto");
//           break;
//       }
//     }
//     // else {
//     //   res.send("No existe registro");
//     // }
//   });
// });

// app.put("/updateProducto/:id", (req, res) => {
//   const { id } = req.params;
//   const {
//     //producto
//     id_proveedor,
//     tipo_producto,
//     nombre,
//     imagen,
//     cantidad,
//     precio,
//     costo_ingreso,
//     descripcion,
//     //Planta
//     id_bolsa,
//     id_funda,
//     id_tipo_planta,
//     tamanio_planta,
//     cuidados,
//     observaciones,
//     //Maceta
//     id_material,
//     codigo,
//     color_maceta,
//     dimenciones,
//     //Tierra
//     id_tipo_tierra,
//     tamanio_tierra,
//     //Marmol
//     id_tipo_marmol,
//     color_marmol,
//     tamanio_marmol,
//   } = req.body;

//   const sqlProducto = `UPDATE producto SET id_proveedor = '${id_proveedor}', tipo_producto = '${tipo_producto}', nombre = '${nombre}', imagen = '${imagen}', cantidad = '${cantidad}', precio = '${precio}', costo_ingreso = '${costo_ingreso}', utilidad = '${
//     precio - costo_ingreso
//   }', descripcion = '${descripcion}' WHERE id_producto = ${id}`;

//   const sqlPlanta = `UPDATE planta SET id_bolsa = '${id_bolsa}', id_funda = '${id_funda}', id_tipo_planta = '${id_tipo_planta}', tamanio_planta = '${tamanio_planta}', cuidados = '${cuidados}', observaciones = '${observaciones}' WHERE id_producto = ${id}`;

//   const sqlMaceta = `UPDATE maceta SET id_material = '${id_material}', codigo = '${codigo}', color = '${color_maceta}', dimenciones = '${dimenciones}' WHERE id_producto = ${id}`;

//   const sqlTierra = `UPDATE tierra SET id_tipo_tierra = '${id_tipo_tierra}', tamanio = '${tamanio_tierra}' WHERE id_producto = ${id}`;

//   const sqlMarmol = `UPDATE marmol SET id_tipo_marmol = '${id_tipo_marmol}', color = '${color_marmol}', tamanio = '${tamanio_marmol}' WHERE id_producto = ${id}`;

//   connection.query(sqlProducto, (error) => {
//     if (error) throw error;
//     // res.send("Producto Modificado");
//   });

//   switch (tipo_producto) {
//     case "Planta":
//       connection.query(sqlPlanta, (error) => {
//         if (error) throw error;
//         res.send("Planta Modificada");
//       });
//       break;
//     case "Maceta":
//       connection.query(sqlMaceta, (error) => {
//         if (error) throw error;
//         res.send("Maceta Modificada");
//       });
//       break;
//     case "Tierra":
//       connection.query(sqlTierra, (error) => {
//         if (error) throw error;
//         res.send("Tierra Modificada");
//       });
//       break;
//     case "Marmol":
//       connection.query(sqlMarmol, (error) => {
//         if (error) throw error;
//         res.send("Marmol Modificado");
//       });
//       break;

//     default:
//       res.send("No es ninguna de las categorias");
//       break;
//   }
// });

// app.delete("/deleteProducto/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM producto WHERE id_producto = ${id}`;

//   connection.query(sql, (error) => {
//     if (error) throw error;
//     res.send("Producto Eliminado");
//   });
// });

// Check connect
// connection.connect((error) => {
//   if (error) throw error;
//   console.log("Base de datos corriendo");
// });

app.listen(PORT, () => console.log(`Servicio corriendo en el puerto ${PORT}`));
