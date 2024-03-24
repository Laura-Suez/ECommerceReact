import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1>Gracias... tu numero es {orderId} </h1>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
            autoComplete="on"
          />

          <input
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={capturar}
            name="phone"
            autoComplete="on"
          />

          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
            autoComplete="on"
          />

          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};
