import axios from 'axios'

// Don't love 3 args but seems necessary
export const sendEmailAndPassword = async (email, password, path) => {
  const fullURL = `${process.env.REACT_APP_BACKEND_URL}users${path}`
  try {
    const result = await axios.post(fullURL, { email, password })
    return result
  } catch (error) {
    console.error('Error', error)
  }
  return null
}

export const sendSketchToDB = async (uuid, sketch) => {
  const fullURL = `${process.env.REACT_APP_BACKEND_URL}sketch/save`
  try {
    const result = await axios.post(fullURL, { uuid, sketch })
    return result
  } catch (error) {
    console.error('Error', error)
  }
  return null
}

export const retrieveSketchesFromDB = async (uuid) => {
  const fullURL = `${process.env.REACT_APP_BACKEND_URL}sketch/${uuid}`
  try {
    const result = await axios.get(fullURL)
    return result
  } catch (error) {
    console.error('Error', error)
  }
  return null
}

export const deleteSketchFromDB = async (uuid, sketchId) => {
  const fullURL = `${process.env.REACT_APP_BACKEND_URL}sketch/${uuid}/delete`
  try {
    const result = await axios.delete(fullURL, { data: { sketchId } })
    return result
  } catch (error) {
    console.error('Error', error)
  }
  return null
}

export const signOut = async () => {
  const fullURL = `${process.env.REACT_APP_BACKEND_URL}users/sign-out`
  try {
    const result = await axios.delete(fullURL)
    return result
  } catch (error) {
    console.error('Error', error)
  }
  return null
}
