import {configureStore} from '@reduxjs/toolkit';

import { ImgSlice } from './slices/addslice';

import { UserLoginSlices } from './loginslice/logindet';

export default configureStore({
    reducer:{
        user: UserLoginSlices.reducer          
    }
})