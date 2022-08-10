import * as Yup from "yup"

export interface Contato {
    id?: string;
    nome: string;
    idade: number | '';
}

export const validationScheme = Yup.object().shape({
    nome: Yup.string()
        .required("Campo Obrigatorio")
        .min(5, "Digite pelo menos 5 caracteres"),
    idade: Yup.number()
        .required("Campo Obrigatorio")
        .min(10, "Idadde minima e 10 anos")
})