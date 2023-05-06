import { FC } from "react";
import { Form } from "../components/Form";
import { makeStyles } from "tss-react/mui";
import { Typography } from "@mui/material";

interface Props {
    
}
 
export const FormView :FC<Props> = () => {
    
  const useStyles=makeStyles()((_theme)=>{
    return{
        root:{
            width:600
        },
        title:{
            marginBottom:20
        }
          }
  })
  const {classes}=useStyles()
    return (
    <div className={classes.root}>
        <Typography className={classes.title} variant="h4">Añade Tu Cantante Favorito</Typography>
        <Form/>
    </div>
    );
}