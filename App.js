
import React, { useState, useEffect, useCallback, useMemo } from 'react';


function App() {


  const [tarefas, setTarefas ] = useState(['Pagar conta de luz', 'Estudar React']);
  const [input, setInput] = useState('');     

const handleAdd = useCallback(()=> {
  setTarefas([...tarefas, input]);
  setInput('');
}, [input, tarefas]);

const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);

  return(
    <div>
      <ul>
        {tarefas.map(tarefa =>(                                                           
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>

      );
    }
     
    export default App;