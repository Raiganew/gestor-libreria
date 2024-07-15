import { useState, useEffect } from "react"
import { Item } from "./components/Item"
import { formatearDinero } from "./helpers";

function App() {
  const [items, setItems] = useState([]);
  const [selectItems, setSelectItems] = useState([]);
  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {

    fetch("http://localhost:3000/items").then(response => response.json())
      .then(json => setItems(json))
      .catch(error => console.log(error));
  }, [])

  function handleSelect(item) {
    setSelectItems(prev => [...prev, item])
    const prevItems = items.filter(it => it.id !== item.id);
    setItems([...prevItems])
    setTotalPagar(totalPagar + item.precio);
  }

  function handleDelete(item) {
    setItems(prev => [...prev, item])
    const prevItems = selectItems.filter(it => it.id !== item.id);
    setSelectItems([...prevItems])
    setTotalPagar(totalPagar - item.precio);
  }
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Pagina</h1>
      </nav>

      <div className="flex flex-1">

        <div className="flex-1 bg-white p-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Catalogo</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items.map((item, index) => (
              <Item key={index} data={item} fn={() => handleSelect(item)} boton="Agregar" />
            ))}
          </div>
        </div>

        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Compras</h2>
          <p>Total: {formatearDinero(totalPagar)}</p>
          <ul>
            {selectItems.map((item, index) =>
              <Item key={index} data={item} fn={() => handleDelete(item)} boton="Eliminar" />
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
