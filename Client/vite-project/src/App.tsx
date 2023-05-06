
import './App.css'
import { CardView } from './views/CardView'
import { FormView } from './views/FormView'
import { makeStyles } from 'tss-react/mui'


function App() {
  const useStyles=makeStyles()((_theme)=>{
    return{
        root:{
            display:"flex"
        }
          }
  })
  const {classes}=useStyles()
  return (
<div className={classes.root}>
  <FormView/>
  <CardView/>
</div>
  )
}

export default App
