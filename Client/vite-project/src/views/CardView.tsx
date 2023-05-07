import { FC, useEffect, useState } from "react";
import { ISing } from '../inteface/ISing';
import { Api } from "../Api/Api";
import { Container, Typography } from "@mui/material";
import { CardSing } from "../components/CardSing";
import Grid from '@mui/material/Grid';
import { makeStyles } from "tss-react/mui";

interface Props {
    
}
 
export const CardView :FC<Props> = () => {
    const [sings,setSings]=useState<ISing[]>([])
    useEffect(()=>{
        const fetchData=async()=>{
            const {data}=await Api.get("")
            setSings(data)
        }
        fetchData()
    },[sings])
    
  const useStyles=makeStyles()((_theme)=>{
    return{
        main:{margin:20}
          }
  })
  const {classes}=useStyles()
    return (
    <Container>
        {sings.length ?<Grid className={classes.main} spacing={5}  container>
            {sings.map((s)=>{
            return (
            <Grid md={12} lg={6}><CardSing sing={s}/></Grid>)
        })}
        </Grid>
:<Typography variant="h6">Añada un Cantante</Typography>}
    </Container>);
}
 
