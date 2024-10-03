import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }

    }, [])

    useEffect(() => {
        console.log("O estado nome Mudou");
    }, [nome])

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>O aluno {nome} foi aprovado!</p>
            )
        } else {
            return (
                <p>O aluno {nome} foi reprovado!</p>
            )
        }
    }

    return(
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario