import "./App.css";
import { useState } from "react";

function App() {
  const [folha, setFolha] = useState("");
  const [salario, setSalario] = useState("");

  function calcularFolha() {

    let salarioBase = parseFloat(salario);
    let inss = 0;
    if (salarioBase <= 2000) {
      inss = salarioBase * 0.08;
    }

    return (
      <div>
        <div className=" flex flex-row gap-1 items-center">
          <h1 className="font-bold">INSS</h1>
          <p className="bg-amber-50 border-1 w-fit p-1 rounded-md">{inss}</p>
        </div>
        <div className=" flex flex-row gap-1 items-center">
          <h1 className="font-bold">FGTS</h1>
          <p className="bg-amber-50 border-1 min-w-fit p-1 rounded-md">{salario}</p>
        </div>
        <div className=" flex flex-row gap-1 items-center">
          <h1 className="font-bold">IRRF</h1>
          <p className="bg-amber-50 border-1 w-fit p-1 rounded-md">{salario}</p>
        </div>
        <div className="flex items-center flex-row gap-1">
          <label htmlFor="">Salário Líquido</label>
          <p className="bg-amber-50 border-1 w-fit p-1 rounded-md">{salarioBase - inss  }</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-400 w-screen h-screen flex items-center flex-col ">
      <h1 className="mt-20 text-white font-bold text-4xl ">Calculadora Folha</h1>
      <div className="bg-yellow-200 w-3/6 mt-4 p-4 rounded-md grid gap-4 justify-center">
        <div className="grid gap-2 w-72">
          <label htmlFor="" className="font-bold">
            Nome do trabalhador:
          </label>
          <input type="text" className="bg-amber-50 border-1 rounded-md" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="" className="font-bold">
            Ano/Mês de referência:
          </label>
          <input type="month" className="bg-amber-50 border-1 rounded-md" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="" className="font-bold">
            Salário base:
          </label>
          <input
            type="text"
            className="bg-amber-50 border-1 rounded-md"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <button
          className="font-bold bg-amber-50 w-fit p-2 rounded-md border-1 flex m-auto cursor-pointer hover:bg-amber-300"
          onClick={() => {
            setFolha(calcularFolha);
          }}
        >
          Calcular Folha
        </button>
        {folha}
      </div>
    </div>
  );
}

export default App;
