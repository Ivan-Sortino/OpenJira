import { useState, ChangeEvent, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';





export const NewEntry = () => {
    
    const {addNewEntry} = useContext(EntriesContext)

    const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)

    const [inputValue, setinputValue] = useState('')
    const [touch, settouch] = useState(false)

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setinputValue( event.target.value)
    }

    const onSave = ()  =>{
        if (inputValue.length === 0) return
        
        addNewEntry(inputValue)
        setIsAddingEntry(false);
        settouch(false);
        setinputValue('')
    }
    return (
    <Box sx={{marginBottom: 2, paddingX: 1}}>
        
        {
            isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{marginTop: 2, marginBottom: 1}}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText= {inputValue.length <= 0 && touch && 'Ingrese un valor'}
                        error={inputValue.length <= 0 && touch}
                        value={inputValue}
                        onChange={ onTextFieldChange}
                        onBlur={() => settouch(true)}
                    />

                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant='text'
                            onClick={() => setIsAddingEntry(false)}
                            >
                            Cancelar
                        </Button>
                        <Button 
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveIcon/>}
                            onClick={onSave}
                            >
                            Guardar
                        </Button>
                    </Box>
                </>
            )
            :(
                <Button
                    startIcon={<AddCircleOutlineIcon/>}
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar Tarea
                </Button>
            )
        }
 
    </Box>
  )
}
