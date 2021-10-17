import React from 'react'
import { FixedSizeList } from 'react-window';
import {
  Box,
} from '@mui/material'
import ListItems from './ListItems'

const List = ({ sketches, editor, handleClose }) => (
  <Box
    sx={
        {
          width: '100%',
          height: 400,
          maxWidth: 360,
          bgcolor: 'background.paper',
          justifyContent: 'center',
        }
      }
  >
    {sketches
      && (
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={sketches.data.length}
        overscanCount={5}
        itemData={{
          sketchData: sketches.data, editor, handleClose,
        }}
      >
        {ListItems}
      </FixedSizeList>
      )}
  </Box>
)

export default List
