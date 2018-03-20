import io from 'socket.io-client';

export let socket

export const connectToSocket = () => {
    socket = io.connect("http://localhost:3030")
}

export const disconnectFromSocket = () => {
    socket.disconnect()
}