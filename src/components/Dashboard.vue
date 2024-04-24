<template>
    <div class="container">
        <div class="title">Dashboard</div>
        <div class="divider">
            <v-card class="card">
                <div class="heading">User Information</div>
                <div class="divider">
                    <div class="profilecontainer">
                        <div class="usertitle">{{ props.user["name"] }}</div>
                        <div class="userid"><b>Email:</b> {{ props.user["email"] }}</div>
                        <div class="userid"><b>User ID:</b> {{ props.user["id"] }}</div>
                        <div class="userid">{{ props.user["description"] }}</div>
                    </div>
                    <div class="imgcontainer">
                        <div class="profile">
                            <v-icon>mdi-account</v-icon>
                        </div>
                        <v-btn class="button">Sign Out</v-btn>
                    </div>
                </div>
            </v-card>
            <v-card class="card">
                <div class="heading">Account Analytics</div>
                <div class="divider">

                    <div class="analyticscontainer">
                        <div class="usertitle">Usage Details</div>
                        <div class="userid"><b>Total Boards:</b> 10</div>
                        <div class="userid"><b>Total Tasks:</b> 20</div>
                        <div class="userid"><b>Total Saved Boards:</b> 3</div>
                    </div>
                    <div class="graphcontainer">
                        <Pie :options="chartOptions" :data="chartData" width="300" height="300" />
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)


const props = defineProps({
    user: Object
});
const chartData = {
    labels: ['Saved', 'Total'],
    datasets: [{
        data: [40, 20],
        backgroundColor: [
            'rgba(155, 155, 155, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(155, 155, 155, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
};
const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: ''
        }
    }
}
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 20px;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--secondary);
}

.card {
    padding: 20px;
    width: 100%;
}

.card {
    margin-top: 20px;
}

.heading {
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--secondary);
    margin-bottom: 10px;
}


.heading2 {
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--secondary);
    margin-bottom: 20px;
}


.usertitle {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--secondary);
    margin-bottom: 10px;
}

.userid {
    font-size: 1rem;
    font-weight: 400;
    color: var(--secondary);
    margin-bottom: 10px;
}

.divider {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
}

.button {
    color: white;
    font-weight: 300;
    width: 150px;
    height: 40px !important;
    background-color: var(--primary);
}

.imgcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
    height: 180px;
}

.profilecontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.analyticscontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.profile {
    background-color: var(--primary);
    color: white;
    max-width: 110px;
    max-height: 110px;
    min-width: 110px;
    min-height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}

.graphcontainer {
    height: 160px;
    width: 160px;
    min-width: 160px;
    min-height: 160px;
    overflow: hidden;
}
</style>