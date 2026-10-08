import React from 'react'
import MascotaForm from '../components/MascotaForm'
import { useState } from 'react'
import MascotasView from '../components/MascotasView';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function MascotasContainer() {
    
    const [mascotas, setMascotas] = useState([]);
    const [alertaVisible, setAlertaVisible] = useState(false);
    
    const handleCreate = (mascota) =>{
        setMascotas([...mascotas,mascota]);
    }

    const handleError = () => {
    setAlertaVisible(true);
    }

    return (
    <>
    <div className='container mt-3'>
        <div className='row'> 
            <div className='col-4'>
                <MascotaForm onCreateMascota={handleCreate} onError={handleError}> </MascotaForm>
            </div>
            <div className='col-8'>
                <MascotasView mascotas={mascotas}> </MascotasView>
            </div>    
        </div>
        
    </div>

    <Dialog open={alertaVisible} onClose={() => setAlertaVisible(false)}> 
        <DialogTitle> Campos Incompletos</DialogTitle>
        <DialogContent> 
            <DialogContentText> Debes completar todos los campos correctamente.</DialogContentText>
        </DialogContent>
        <DialogActions> 
            <Button onClick={() => setAlertaVisible(false)}> Aceptar </Button>
        </DialogActions>    
    </Dialog>
    </>
  )
}

export default MascotasContainer
