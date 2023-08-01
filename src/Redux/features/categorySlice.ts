import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction} from '@reduxjs/toolkit'



export interface CategoryState{
    value: number
}


const initialState: CategoryState = {
    value: 0,
}


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, incrementByAmount } = categorySlice.actions

export default categorySlice.reducer