import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FC, useState } from 'react';
import { Container, Typography} from "@mui/material";
import { Textarea } from "@mui/joy";
import { makeStyles } from "tss-react/mui";
import { Api } from "../Api/Api";
interface Props {
    
}
 
export const Form:FC<Props> = () => {
  const [error,setError]=useState(false)
  const [input,setInput]=useState(
    {
      name:"",
      date:"",
      biography:"",
      photo:"",
      genere:"",
      
    }
  )

  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name}=e.target
    const {value}=e.target
    setInput({...input,[name]:value})
    console.log(input)
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!input.name || !input.photo || !input.genere || !input.date || !input.biography)setError(true)
      else {
        Api.post("",input)
      setInput({
        name:"",
        date:"",
        biography:"",
        photo:"",
        genere:"",
        
      })
    setError(false)}
  }
  const useStyles=makeStyles()((_theme)=>{
    return{
        btn:{
          width:510
        },
        
        area:{
          width:500,
          marginLeft:10
        }
          }
  })
  const {classes}=useStyles() 

  return (
    <Container>
       
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Grid spacing={3} container >
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
            onChange={(e)=>handleChange(e)}
              id="name-input"
              name="name"
              label="Nombre"
              type="text"
              value={input.name}
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
            value={input.date}
              onChange={(e)=>handleChange(e)}
              name="date"
              type="date"
              
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
            value={input.photo}
            onChange={(e)=>handleChange(e)}
              name="photo"
              label="Foto(URL)"
              type="text"
              
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
            value={input.genere}
            onChange={(e)=>handleChange(e)}
              name="genere"
              label="Genero"
              type="text"
              
            />
          </Grid>
          <Grid lg={12} item>
          <Textarea value={input.biography} onChange={(e)=>handleChange(e)} className={classes.area} name="biography" placeholder="Escribe la biografia aqui" variant="outlined" minRows={3} />
           
          </Grid>
          <Grid lg={12} item>
          <Button  className={classes.btn} variant="contained" color="primary" type="submit">
            Añadir
          </Button>
          {error?<Typography  color="danger">Faltan Campos</Typography>:<></>}

          </Grid>
        </Grid>
      </form>
      </Container>
    );
  };  ;

 
