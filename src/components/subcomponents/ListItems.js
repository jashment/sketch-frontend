import * as React from 'react';
import {
  ListItem, ListItemButton,
} from '@mui/material';
import { format } from 'date-fns'
import { fabric } from 'fabric';
import '../../App.css'
import { deleteSketchFromDB } from '../../api/apiLayer'

const ListItems = ({ data, style, index }) => {
  const setCanvas = () => {
    const dataUrl = JSON.parse(data.sketchData[index].url)
    fabric.Image.fromURL(`${dataUrl[0]}`, (oImg) => {
      oImg.set({
        top: 0,
        left: 0,
      }).scale(0.5)
      data.editor.canvas.add(oImg);
    });
    data.handleClose()
    return null
  }

  const deleteCanvas = (sketchData) => {
    // eslint-disable-next-line camelcase
    const { user_id, id } = sketchData
    deleteSketchFromDB(user_id, id)
    data.handleClose()
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton className="listItemBtn" onClick={() => setCanvas()}>
        {format(new Date(data.sketchData[index].created_at), 'yyyy-MM-dd h:m:ss aaa')}
      </ListItemButton>
      <ListItemButton onClick={() => deleteCanvas(data.sketchData[index])} className="listItemBtn listItemBtnDelete">
        Delete
      </ListItemButton>
    </ListItem>
  )
}

export default ListItems
