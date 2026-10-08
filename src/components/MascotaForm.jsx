import { Card, CardContent, CardHeader, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField, FormControl, CardActions, Button, Chip, Dialog,  } from '@mui/material'
import React, { useState } from 'react'

function MascotaForm({onCreateMascota= ()=>{}, onError}) {

    const especies = [{label:"Gato", value:"gato"},
        {label: "Perro", value:"perro"},
        {label: "Conejo", value: "conejo"}
    ]
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [especie, setEspecie] = useState(especies[0].value)
    const [edad, setEdad] = useState("")
    const [energia, setEnergia] = useState(0)
    //const [dialog, setDialog] = useState(false)

    let clasif="";
    let aporte=0;
    let colorChip = "default";

    if (edad !== "" && edad <= 1) {
    clasif = "Cachorro";
    aporte = 15000;
    colorChip = "warning";
    } else if (edad !== "" && ((especie === "gato" && edad > 5) || edad > 7)) {
        clasif = "Senior";
        aporte = 0;
        colorChip = "info";
    } else if (edad !== "") {
        clasif = "Adulto";
        aporte = 15000;
        colorChip = "primary";
    }

    const limpiarForm = ()=>{
      setNombre("");
      setDescripcion("");
      setEspecie(especies[0].value);
      setEdad("");
      setEnergia(0);
    }

    const handleClick = () =>{

      if (nombre.trim() === "" || descripcion.trim() === "" || edad === "" || 
      Number(edad) < 0 || energia === null || energia < 1) {
        onError();
        return;
      }
      
      const mascota = {};
      mascota.nombre = nombre;
      mascota.descripcion = descripcion;
      mascota.especie = especie;
      mascota.edad = edad;
      mascota.energia = energia;
      mascota.clasif = clasif;
      mascota.aporte = aporte;
      onCreateMascota(mascota);
      limpiarForm();
    }

  return (
    
    <>
    <Card raised>
      <CardHeader title="Ingresa a tu mascota"> </CardHeader>

        <CardContent>
          <div className='mt-3'>
            <TextField required label="Nombre" value={nombre}
            onChange={e=>setNombre(e.target.value)}
            fullWidth id='nombre-mascota'> </TextField>
          </div>
          <div className='mt-3'>
            <TextField required multiline 
            label="Descripcion" 
            value={descripcion} 
            onChange={e=>setDescripcion(e.target.value)}
            fullWidth id='descripcion-mascota'> </TextField>
          </div>
          <div className='mt-3'>
            <FormLabel> Especie </FormLabel>
            <RadioGroup row value={especie} onChange={e=>setEspecie(e.target.value)} id='especie-mascota' > 
              { especies.map((c)=> 
                <FormControlLabel value={c.value} label={c.label} control={<Radio></Radio>}>
                </FormControlLabel>
              )}
            </RadioGroup>
          </div>
          <div className='mt-3'>
            <TextField required type='number' value={edad} 
            label="Edad" id='edad-mascota' fullWidth
            onChange={e=>setEdad(e.target.value)}> </TextField>
          </div>
          <div className='mt-3'>
              <FormControl>
                <FormLabel >Nivel de energía</FormLabel>
                <Rating value={energia}  
                onChange={(e, valor) => { setEnergia(valor);}} id='energia-mascota'> </Rating>
              </FormControl>
          </div>
          <div className='mt-3'>
              <Chip label={`${clasif} - $${aporte}`} color={colorChip} />
          </div>


        </CardContent>
        <CardActions> 
          <Button onClick={handleClick} fullWidth variant='outlined' > Registrar mascota </Button>
        </CardActions>


    </Card>
    <Dialog> </Dialog>

  </>            
  )
}

export default MascotaForm
