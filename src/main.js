import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import "./styles/index.css"

export const API = "http://localhost:5000/";
export let TOKEN = "";
export let UID = "";

export function setToken(token) {
    TOKEN = token;
    localStorage.setItem("TOKEN", token);
}

export function setUID(uid) {
    UID = uid;
    localStorage.setItem("UID", uid);
}


TOKEN = localStorage.getItem("TOKEN");
UID = localStorage.getItem("UID");

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
