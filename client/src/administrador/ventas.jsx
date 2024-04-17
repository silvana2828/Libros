export const Ventas = () => {
  return (
    <div>
      <h1 className="m-10 font-medium text-3xl border-l-2 p-2 border-[#2b3d4f] text-[#354a5f] uppercase">
        ventas
      </h1>
      <div className="flex justify-center">   
      <table className=" border-collapse border border-slate-400 w-2/3">
        <caption className="caption-top uppercase text-gris-claro">
          libros vendidos
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-300 p-3 bg-azul-medio text-white">
              Nombre
            </th>
            <th className="border border-slate-300 bg-azul-medio text-white">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 text-center p-3 text-azul-medio">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center text-azul-medio">
              <span className="font-bold">$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 text-center p-3">
              El olvido que seremos
            </td>
            <td className="border border-slate-300 p-3 text-center">
              <span>$</span>299.000
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}