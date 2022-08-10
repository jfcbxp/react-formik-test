import React from "react";
import { Contato } from "./contato";
import { List, ListItem, Grid, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DeleteIcon from '@mui/icons-material/Delete';

interface ContatosListProps {
    list: Contato[],
    onDelete: (contato: Contato) => void;

}
const ContatosList: React.FC<ContatosListProps> = ({
    list, onDelete
}: ContatosListProps) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <List>
                    {
                        list.map((contato: Contato) => {
                            return (
                                <ListItem key={contato.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccessibilityNewIcon></AccessibilityNewIcon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={contato.nome}
                                        secondary={`Idade: ${contato.idade}`}>

                                    </ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" arial-label="delete" onClick={() => onDelete(contato)}>
                                            <DeleteIcon></DeleteIcon>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>

                            )
                        })

                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default ContatosList