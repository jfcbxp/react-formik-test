import React, { FC } from "react";
import { Contato } from "./contato";
import ContatosForm from "./Form";
import ContatosList from "./List";
import { useContatosLogic } from "./useContatosLogic";
export const Contatos: FC = () => {

    const logic = useContatosLogic();
    const handleSubmit = (contato: Contato) => {
        console.log(contato)
    }

    return (
        <>
            <ContatosForm submeterFormulario={handleSubmit} contato={logic.contato}></ContatosForm>
            <ContatosList></ContatosList>
        </>
    )
}