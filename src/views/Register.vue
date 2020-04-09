<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div class="steps pt-6" id="stepsDemo">
        <div
          :class="`step-item is-primary ${currentStep == 1 ? 'is-active' : ''}`"
        >
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Perfil</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${currentStep == 2 ? 'is-active' : ''}`"
        >
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Vivienda</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${currentStep == 3 ? 'is-active' : ''}`"
        >
          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Social</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${currentStep == 4 ? 'is-active' : ''}`"
        >
          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Terminar</p>
          </div>
        </div>
        <div class="steps-content">
          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 1 ? 'is-active' : ''
              }`
            "
          >
            <div class="hero-body">
              <div class="columns is-centered">
                <div class="column is-half">
                  <Account />
                </div>
              </div>
            </div>
          </div>
          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 2 ? 'is-active' : ''
              }`
            "
          >
            <div class="hero-body">
              <div class="columns is-centered">
                <div class="column is-half">
                  <Home />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a class="button is-light" v-on:click="currentStep--">Anterior</a>
          </div>
          <div class="steps-action">
            <a class="button is-light" v-on:click="currentStep++">Siguiente</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Account from "../components/AccountForm";
import Home from "../components/HomeForm";

/*
  name: string; DONE
  birthDate: Date; DONE
  canTravel: boolean; DONE
  canAdopt: boolean; DONE
  canTransit: boolean; DONE
  canHelp: boolean; DONE
  alerts: boolean; DONE
  experience: boolean; 
  adults: number; DONE
  children: number; DONE
  otherPets: number; DONE
  houseType: string; DONE
  houseProtection: boolean; DONE
  hoursAway: number; DONE
  mobility: boolean;
  travelsSchedule: ITravelsSchedule;
  mobilitySchedule: IMobilitySchedule;
  hasTransportBox: boolean; DONE
  address: string;
  location: ILocation;
  pets: [string];
  createdAt: Date;
  */

export default {
  name: "home",
  components: { Account, Home },
  data: () => ({
    currentStep: 1,
    name: "",
    canTravel: null,
    canAdopt: null,
    canTransit: null,
    alerts: null,
    experience: null,
    persons: 0,
    mobility: null,
    travelsSchedule: {},
    mobilitySchedule: {},
    hasTransportBox: null,
    address: ""
  })
};
</script>
