import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./assets/css/DetalleProducto.css";

const DetalleProducto = () => {
  const { SKU } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const q = query(collection(db, "productos"), where("SKU", "==", SKU));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productoData = querySnapshot.docs[0].data();
          setProducto(productoData);
        } else {
          console.log("Producto no encontrado");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      }
    };

    fetchProducto();
  }, [SKU]);

  const formatoPrecio = (price) => {
    return new Intl.NumberFormat('es-ES').format(price);
  };

  const handleAddToCart = () => {
    setMensaje(`Producto añadido al carrito`);
    setTimeout(() => setMensaje(""), 4000); 
  };

  const handleBuyNow = () => {
    setMensaje(`Compra realizada correctamente`);
    setTimeout(() => setMensaje(""), 4000); 
  };

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid">
            {loading ? (
              <div className="text-center">
                <p>Cargando producto...</p>
              </div>
            ) : producto ? (
              <div className="card shadow mt-4">
                <div className="card-header py-3">
                  <h2 className="m-0 font-weight-bold text-primary">{producto.nombre}</h2>
                </div>
                <div className="card-body">
                  {mensaje && (
                    <div className="alert alert-success text-center mt-3" role="alert">
                      {mensaje}
                    </div>
                  )}

                  <div className="row">
                    <div className="col-md-5 image-container">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="product-image"
                      />
                    </div>

                    <div className="col-md-7">
                      <p>
                        <strong>Descripción:</strong> {producto.descripcion}
                      </p>
                      <p>
                        <strong>Precio:</strong>{" "}
                        <span className="product-price">${formatoPrecio(producto.precio)}</span>
                      </p>
                      <p>
                        <strong>Disponibles:</strong> {producto.cantidad}
                      </p>
                      <p>
                        <strong>SKU:</strong> {producto.SKU}
                      </p>

                      <div className="button-container">
                        <button className="btn btn-success" onClick={handleAddToCart}>
                          Añadir al Carrito
                        </button>

                        <button className="btn btn-primary" onClick={handleBuyNow}>
                          Comprar Ahora
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="row t">
                <div class="col-lg-12">
                  <div className="alert alert-danger text-center mt-3" role="alert">
                    Producto no encontrado.
                  </div>
                </div>

                <div class="col-lg-6 text-center">
                  <div class="card shadow mb-4">
                      <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-secconndary">Lo sentimos...</h6>
                      </div>
                      <div class="card-body">
                        <p>No pudimos encontrar productos que coincidan con tu búsqueda.</p>
                        <p>Sigue explorando nuestro catálogo para encontrar lo que necesitas.</p>
                        <a href="/productos" class="btn btn-primary">Ver productos</a>
                      </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;