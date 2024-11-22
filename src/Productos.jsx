import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { Link } from "react-router-dom";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const formatoPrecio = (price) => {
    return new Intl.NumberFormat('es-ES').format(price);
  };

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid productos-container">
            <h1 className="text-primary text-center mb-4">Nuestros Productos</h1>

            {loading ? (
              <div className="text-center">
                <p>Cargando productos...</p>
              </div>
            ) : (
              <div className="row">
                {productos.map((producto) => (
                  <div className="col-lg-6 mb-4" key={producto.id}>
                    <div className="card shadow">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          <Link to={`/detalle/${producto.SKU}`} className="text-primary text-decoration-none">
                            {producto.nombre}
                          </Link>
                        </h6>
                      </div>
                      <div className="card-body">
                        <p>{producto.descripcion}</p>
                        <p><strong>Precio:</strong> ${formatoPrecio(producto.precio)}</p>
                        <p><strong>Disponibles:</strong> {producto.cantidad}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
