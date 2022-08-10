import { useState } from "react";
import { Contato } from "./contato";
import { v4 as uuid } from "uuid";

export const useContatosLogic = () => {
    const newContato: Contato = {
        idade: "", nome: ""
    }
    const [contatosList, setContatosList] = useState<Contato[]>([])
    const [contato, setContato] = useState<Contato>(newContato)

    const addContato = (contato: Contato) => {
        contato.id = uuid()
        setContatosList([...contatosList, contato])
        setContato(newContato)
    }


    return {
        contato, addContato
    }
}