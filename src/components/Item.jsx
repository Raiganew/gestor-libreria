import { formatearDinero } from "../helpers"
export const Item = ({ data, fn, boton }) => {
  return (
    <div className="group relative border p-4 rounded-md shadow-sm">
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" ></span>
              {data.nombre}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{data.clasificacion}</p>
          <p className="mt-1 text-sm text-gray-500">{data.formato}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-medium text-gray-900">{formatearDinero(data.precio)}</p>
          <button
            className="mt-1 p-2 bg-blue-500 text-white rounded"
            onClick={fn}
          >
            {boton}
          </button>
        </div>
      </div>
    </div>
  )
}
