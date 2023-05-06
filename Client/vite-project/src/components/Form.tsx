import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import  { FC } from 'react';
import { Container} from "@mui/material";
import { Textarea } from "@mui/joy";
import { makeStyles } from "tss-react/mui";
interface Props {
    
}
 
export const Form:FC<Props> = () => {
  
  const useStyles=makeStyles()((_theme)=>{
    return{
        btn:{
          width:510
        },
        
        area:{
          width:510,
          marginLeft:20
        }
          }
  })
  const {classes}=useStyles() 

  return (
    <Container>
       
      <form>
        <Grid spacing={3} container >
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
              id="name-input"
              name="name"
              label="Nombre"
              type="text"
              
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
              
              name="date"
              label="Fecha Nacimiento"
              type="text"
              
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
              name="photo"
              label="Foto(URL)"
              type="text"
              
            />
          </Grid>
          <Grid  md={6} sm={12} lg={6} item>
            <TextField
              name="genere"
              label="Genero"
              type="text"
              
            />
          </Grid>
          <Grid lg={12} item>
          <Textarea className={classes.area} name="Outlined" placeholder="Escribe la biografia aqui" variant="outlined" minRows={3} />
           
          </Grid>
          <Grid lg={12} item>
          <Button className={classes.btn} variant="contained" color="primary" type="submit">
            Añadir
          </Button>

          </Grid>
        </Grid>
      </form>
      </Container>
    );
  };  ;

 
