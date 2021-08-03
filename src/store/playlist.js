import { createSlice } from '@reduxjs/toolkit'
import data from '../data/sample'

const initialState = {
  tracks: data,
  selectedTracks: [],
  form: {
    title: '',
    description: '',
  },
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    addSelectedTracks: (state, action) => {
      state.selectedTracks.push(action.payload)
    },
    substractSelectedTracks: (state, action) => {
      const index = state.selectedTracks.indexOf(action.payload)
      state.selectedTracks.splice(index, 1)
    },
    setForm: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0]
      state.form[key] = value
    },
    clearForm: state => {
      state.form = initialState.form
    },
    clearSelectedTracks: state => {
      state.selectedTracks = []
    },
    clearState: state => {
      state = initialState
    },
  },
})

export const {
  setTracks,
  addSelectedTracks,
  substractSelectedTracks,
  clearSelectedTracks,
  setForm,
  clearState,
} = playlistSlice.actions

export default playlistSlice.reducer
