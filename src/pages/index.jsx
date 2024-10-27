import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../components/Button";

const Teste = () => {
    const [idade, auterarIdade] = useState(23); //exemplo use state(), estado inicial: retornar um array com duas opções [estado, função para auteralo]
    const [nome, auterarNome] = useState("Rafa");

    const mudarIdade = useCallback(() => {
        const novaIdade = 10 * idade;
        console.log("Idade Atual", idade, novaIdade)
        auterarIdade(prev => prev === 23 ? 24 : 23);
    }, [idade]);

    const mudarNome = useCallback(() => {
        auterarNome(prev => prev === "Rafa" ? "Neko" : "Rafa");
    }, []);

    //Primeiro uma função e dps o array de dependencias
    useEffect(()=> {
        mudarIdade();
    }, []);

    //evita que algo seja sempre refeito ao renderizar a tela
    /*const calculo = useMemo(() => {
        console.log("Calc", idade);
        return 10 * idade;
    }, [idade]);*/

    //console.log("renderizou", calculo);
    return (
        <div>
            <p>Idade: {idade} </p>
            <p>Nome: {nome} </p>
            <Button onClick={mudarIdade} title="Auterar Idade"/>
            <Button onClick={mudarNome} title="Auterar Nome"/>
        </div>
    );
};

export default Teste;