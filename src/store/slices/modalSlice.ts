import { createSlice } from "@reduxjs/toolkit"


interface ModalState {
    isOpen: boolean
}

const initialState: ModalState = {
    isOpen: false
}

const modalSlide = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onOpen(state) {
            state.isOpen = true
        },
        onClose(state) {
            state.isOpen = false
        }
    }
})

export const { onClose, onOpen } = modalSlide.actions
export default modalSlide.reducer