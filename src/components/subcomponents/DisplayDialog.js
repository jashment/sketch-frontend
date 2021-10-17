import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import '../../App.css'
import List from './List'
import { retrieveSketchesFromDB } from '../../api/apiLayer'

const DisplayDialog = ({
  open, handleClose, user, editor,
}) => {
  const [sketches, setSketches] = useState()
  const retrieveAllCanvas = async () => {
    const userId = JSON.parse(user).data.user.id
    const result = await retrieveSketchesFromDB(userId)
    return result
  }

  useEffect(async () => {
    setSketches(await retrieveAllCanvas())
  }, [])

  return (
    <Dialog
      open={open}
      className="displayDialog"
    >
      <DialogTitle>
        Choose a Saved Sketch
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'black',
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ margin: 'auto' }}>
        <List sketches={sketches} editor={editor} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}

export default DisplayDialog
