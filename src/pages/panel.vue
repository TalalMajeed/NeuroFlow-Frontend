<template>
    <div v-show="auth">
        <NavBar @trigger="setOpenMenu" />
        <div class="main">
            <div class="left" :style="shiftWidth()">
                <LeftBar @trigger="setPage" />
            </div>
            <div class="center">
                <Dashboard v-show="page == 0" :user="user" />
                <UserProfile v-show="page == 1" />
                <MyBoards v-show="page == 2" />
                <CreateBoards v-show="page == 3" :user="user" />
            </div>
        </div>
    </div>



</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { TOKEN, API, UID, setToken, setUID } from "../main";
import router from '../router';
import { ref } from 'vue';

const user = ref(null);
const auth = ref(true);
const openMenu = ref(true);
const page = ref(0);

const setPage = (p) => {
    page.value = p;
    console.log(page.value);
}


const setOpenMenu = () => {
    openMenu.value = !openMenu.value;
}

const shiftWidth = () => {
    return {
        width: openMenu.value ? "70px" : "250px",
        minWidth: openMenu.value ? "70px" : "250px",
    }
}

user.value = { "id": "AB123", "name": "Talal Majeed", "gender": "Male", "email": "m.talal.majeed@gmail.com", "description": "A Computer Science Student in NUST University Pakistan" };

/*if (!TOKEN || !UID) {
    router.push("/login");
}
if (TOKEN === "" || UID === "") {
    router.push("/login");
}

const RenewToken = async () => {
    console.log("Renewing Token")
    const response = await fetch(`${API}/renew`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            "uid": UID
        })
    });

    const data = await response.json();
    if (data["status"] === 200) {
        if (data['status'] == '200') {
            let temp = JSON.parse(data['data'])
            setToken(temp['token']);
            setUID(temp['uid']);
            router.push("/panel");
            console.log("Token Renewed")
        }
    }
    else {
        localStorage.setItem("TOKEN", "");
        localStorage.setItem("UID", "");
        router.push("/login");
    }
}

const checkToken = async () => {
    const response = await fetch(`${API}/checkauth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            "uid": UID
        })
    });
    const data = await response.json();
    console.log(data);
    if (data["status"] !== 200) {
        localStorage.setItem("TOKEN", "");
        localStorage.setItem("UID", "");
        router.push("/login");
    }
    else {
        user.value = JSON.parse(data["data"]);
        auth.value = true;
    }
}

checkToken();
setInterval(() => {
    RenewToken();
}, 1000 * 60 * 20);*/
</script>

<style scoped>
.left {
    height: 100%;
    overflow: hidden;
    transition: width 0.2s, min-width 0.2s;
}

.main {
    display: flex;
    height: 100svh;
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: var(--primary-light);
}
</style>