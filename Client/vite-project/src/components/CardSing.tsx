import { Button, Card, CardActions, CardContent, CardMedia, TextField} from "@mui/material";
import {  ChangeEvent, FC, useState } from 'react';
import { ISing } from "../inteface/ISing";
import { Textarea } from "@mui/joy";
import { Typography } from '@mui/material';
import { Api } from "../Api/Api";

interface Props {
    sing:ISing
}
 
export const CardSing: FC<Props> = ({sing}) => {
  const [edit,setEdit]=useState(false)
  const [input,setInput]=useState(
    { id:sing.id,
      name:sing.name,
      date:sing.date,
      biography:sing.biography,
      photo:sing.photo,
      genere:sing.genere
      
    }
  )
  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name}=e.target
    const {value}=e.target
    setInput({...input,[name]:value})
    
  }
  const handleDelete=()=>{
    Api.delete(`/${sing.id}`,)
  }
  const handleUpdate=()=>{
    if(input.name && input.photo && input.genere && input.date && input.biography){
      Api.put("",input)
      console.log(input)
      setEdit(false)
    }

  }
  
    return (
        <Card sx={{ width: 300}}>
          
        <CardMedia
          sx={{ height: 200 }}
          image={sing.photo}
          title="prueba"
        />
        <CardContent >
          {
            edit?<TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{handleChange(e)}} value={input.name}  
            name="name"
            label="Nombre"
            type="text" size="small"/>:
          <Typography gutterBottom variant="h5" component="div">
            {sing.name}
          </Typography>
          }
          
          {
            edit?<TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{handleChange(e)}} value={input.date} 
            name="date"
            type="date" size="small"/>:<Typography color="text.secondary">
           {sing.date}
          </Typography>}
          {
            edit?<TextField onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>handleChange(e)}
            value={input.genere} 
            name="genere"
            label="Genero"
            type="text" size="small"/>:<Typography  variant="body2" gutterBottom color="text.secondary" >
            {sing.genere}
          </Typography>}
          {
            edit?<Textarea onChange={(e)=>handleChange(e)} 
            name="biography"
            value={input.biography}
            placeholder="Escribe la biografia aqui"
            />:<Typography  variant="body2"  >
          {sing.biography}
          </Typography>}
        </CardContent>
        <CardActions>
          <Button onClick={()=>handleDelete()} variant="outlined" color="error"  size="small">X</Button>
          {edit?<Button onClick={()=>handleUpdate()} variant="outlined" color="success"  size="small">Hecho</Button>:<Button onClick={()=>setEdit(true)} variant="outlined" color="primary"  size="small">Editar</Button>}
        </CardActions>
      </Card>
      );
}
 
