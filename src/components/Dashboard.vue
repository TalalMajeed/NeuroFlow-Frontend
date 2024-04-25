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
        <div class="smallercontainer">
        <div class="box1" @mouseover="hoverBox(1)" @mouseleave="leaveBox(1)">
            <v-card class="mx-auto" hover>
                <v-img height="200px" src="@/assets/Data1.png" cover></v-img>
                <v-text-field class="textfield1" variant="underlined" placeholder="ERD 1"></v-text-field>
                <v-card-actions>
                    <v-btn class="view1" text="View"></v-btn>
                    <img class="genailogo" height="30px" width="30px" src="C:\Users\Lenovo\OneDrive\Desktop\NeuroFlow Project\NeuroFlow-Frontend\src\assets\logo genai.png" cover></img>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>
        <div class="box2" @mouseover="hoverBox(2)" @mouseleave="leaveBox(2)">
        <v-card class="mx-auto" hover>
          <v-img height="200px" src="@/assets/Data2.png" cover></v-img>
          <v-text-field class="textfield2" variant="underlined" placeholder="ERD 2"></v-text-field>
          <v-card-actions>
            <v-btn class="view2" text="View"></v-btn>
            <img class="genailogo" height="30px" width="30px" src="C:\Users\Lenovo\OneDrive\Desktop\NeuroFlow Project\NeuroFlow-Frontend\src\assets\logo genai.png" cover></img>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
      <div class="box3" @mouseover="hoverBox(3)" @mouseleave="leaveBox(3)">
        <v-card class="mx-auto" hover>
          <v-img height="200px" src="@/assets/Data3.png" cover></v-img>
          <v-text-field class="textfield3" variant="underlined" placeholder="ERD 3"></v-text-field>
          <v-card-actions>
            <v-btn class="view3" text="View" color=""></v-btn>
            <img class="genailogo" height="30px" width="30px" src="C:\Users\Lenovo\OneDrive\Desktop\NeuroFlow Project\NeuroFlow-Frontend\src\assets\logo genai.png" cover></img>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
    </div>

    <div class="container2">
    <div class="side-by-side">
      <v-card class="manageprofile" max-width="344" hover>
        <v-card-item>
          <v-card-title class="cardmanageprofileheader">
            Manage Profile
          </v-card-title>
        </v-card-item>
        <v-card-text>
          Easily customize your profile with options for updating personal information, preferences, and security settings. Streamline user experience, ensuring data accuracy and privacy. Accessible across devices for seamless profile management.
        </v-card-text>
      </v-card>
      <div class="spacer"></div>
      <v-card class="createboard" max-width="344" hover>
        <v-card-item>
          <v-card-title class="cardcreateboardheader">
            Create Board
          </v-card-title>
        </v-card-item>
        <v-card-text>
          Effortlessly generate flowcharts with an intuitive interface, code integration, and collaboration tools. Streamline workflows, enhance code quality, and facilitate effective communication among team members. 
        </v-card-text>
      </v-card>
    </div>
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
        overflow-y: scroll;
        margin: 20px;
        padding-bottom: 90px;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        color: var(--secondary);
    }

    .card {
        padding: 20px;
        width: 100%;
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

    .smallercontainer {
        margin-top: 20px;
    }

    .box1 {
        margin-top: 20px;
    }
    .smallercontainer {
  display: flex;
  justify-content: space-between;
}

.box1,
.box2,
.box3 {
  margin: 60px 20px 0;
  height: 200px;
  width: 380px; /* Fixed typo */
  transition: box-shadow 0.3s ease;
}

.placeholder-padded::placeholder {
  padding-left: 5px;
}

.genailogo {
  margin-bottom: 5px;
  margin-left: 265px;
}

.view3,
.view2,
.view1 {
  margin-bottom: 5px;
  font-weight: bold;
  color: #0D6274;

}

.textfield1,
.textfield2,
.textfield3 {
  margin-left: 5px;
}

.side-by-side {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.spacer {
  width: 50px;
}

.manageprofile {
  align-self: flex-end;
  margin-top: 170px;
  width: 344px;
  height: 188px;
}

.createboard {
  align-self: flex-end;
  width: 344px;
  height: 188px;
}

.cardmanageprofileheader,
.cardcreateboardheader {
  color: #0D6274;
}

.container2{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>
