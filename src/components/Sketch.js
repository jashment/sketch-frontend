import React, { useState } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import '../App.css'
import { sendSketchToDB } from '../api/apiLayer';
import DisplayDialog from './subcomponents/DisplayDialog';

const Sketch = () => {
  const [color, setColor] = useState()
  const { editor, onReady } = useFabricJSEditor();
  const user = window.sessionStorage.getItem('user')
  const [open, setOpen] = useState(false);

  const onAddCircle = () => {
    editor.addCircle();
  };

  const onAddRectangle = () => {
    editor.addRectangle();
  };

  const onDeleteSelected = () => {
    editor.deleteSelected()
  }

  const onDeleteAll = () => {
    editor.deleteAll()
  }

  const handleFillColor = (event) => {
    event.preventDefault()
    setColor(event.target.value)
  }

  const fillColor = (event) => {
    event.preventDefault()
    editor.setFillColor(color)
  }

  const saveCanvas = () => {
    const toSave = []
    const canvasToSave = document.getElementsByClassName('canvas-container').item(0).children
    const canvasItems = Array.from(canvasToSave)
    canvasItems.map((item) => {
      toSave.push(item.toDataURL('image/webp'))
      return toSave
    })
    const userId = JSON.parse(user).data.user.id
    sendSketchToDB(userId, toSave)
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      <h1>Sketch!</h1>
      <button className="btn" type="button" onClick={onAddCircle}>Add circle</button>
      <button className="btn" type="button" onClick={onAddRectangle}>Add Rectangle</button>
      <button className="btn" type="button" onClick={onDeleteSelected}>Delete Selected</button>
      <button className="btn" type="button" onClick={onDeleteAll}>Delete All</button>
      <button className="btn" type="button" onClick={saveCanvas}>Save Sketch</button>
      <button className="btn" type="button" onClick={handleClickOpen}>Choose Sketches</button>
      {open
        ? <DisplayDialog open={open} handleClose={handleClose} user={user} editor={editor} />
        : null}
      {/* This should really be a color picker but this works for demo */}
      <form onSubmit={(event) => fillColor(event)}>
        <input onChange={(event) => handleFillColor(event)} />
        <button className="btn" type="submit">Set Fill Color</button>
      </form>
      <FabricJSCanvas className="canvas" onReady={onReady} />
      {/* {console.log(document.getElementsByClassName('canvas-container').item(0).children)} */}
    </div>
  );
}

export default Sketch