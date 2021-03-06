// import socketIO from "socket.io-client"
import io from 'socket.io-client'

import { SIO_URL } from '../constants/constants.js'

export const socket = io(SIO_URL, {
    autoConnect: false  // only open connection once the user is logged in
})
