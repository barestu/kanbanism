import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBgRWIUgy4UeW4MwnY0xoXw1P9iZXGGn3s',
  authDomain: 'kanbanism.firebaseapp.com',
  databaseURL: 'https://kanbanism.firebaseio.com',
  projectId: 'kanbanism',
  storageBucket: 'kanbanism.appspot.com',
  messagingSenderId: '226839173640'
})

export const db = app.database()
export const tasksRef = db.ref('tasks')
