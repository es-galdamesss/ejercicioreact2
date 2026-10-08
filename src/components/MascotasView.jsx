import { Card, CardContent, CardHeader, Chip, Rating } from '@mui/material'
import React from 'react'

function MascotasView({mascotas=[]}) {
  return (
    <div className="row g-3">
        {mascotas.map((m, index) =>
            <div className="col-12 col-md-6 col-xl-4" key={index}>
                <Card sx={{height: "100%"}}>
                    <CardHeader title={m.nombre} />
                    <CardContent>
                        <p>Descripción: {m.descripcion}</p>
                        <p>Especie: {m.especie}</p>
                        <p>Edad: {m.edad} años</p>
                        <p>Nivel de energía:</p>
                        <Rating value={m.energia} readOnly />
                        <p>
                            <Chip label={`${m.clasif} - $${m.aporte.toLocaleString("es-CL")}`}
                            color={m.clasif === "Cachorro" ? "warning" : m.clasif === "Senior" ? "info" : "primary"} />
                        </p>
                    </CardContent>
                </Card>
            </div>
        )}
    </div>
  )
}

export default MascotasView
