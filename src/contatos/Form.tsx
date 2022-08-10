import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Contato, validationScheme } from "./contato"
import { useFormik, FormikHelpers } from "formik"
import "./index.css"

interface ContatosFromProps {
    contato: Contato,
    submeterFormulario: (contato: Contato) => void;

}
const ContatosForm: React.FC<ContatosFromProps> = ({ contato, submeterFormulario }: ContatosFromProps) => {

    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato)
        helper.resetForm();
    }

    const formik = useFormik<Contato>({
        onSubmit: onSubmit,
        initialValues: { ...contato },
        validationSchema: validationScheme,
        validateOnChange: false
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Nome" name="nome" id="inputNome"
                        value={formik.values.nome} onChange={formik.handleChange} className="full-width" />
                    <span>{formik.errors.nome}</span>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Idade" name="idade" id="inputIdade"
                        value={formik.values.idade} onChange={formik.handleChange} className="full-width" />
                    <span>{formik.errors.idade}</span>
                </Grid>
                <Grid item xs={12}>
                    ,<Button type="submit" variant="contained" color="primary" className="full-width">Adicionar</Button>
                </Grid>
            </Grid>
        </form>
    )
}
export default ContatosForm;