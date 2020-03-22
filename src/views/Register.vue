<template>
  <div class="container">
    <div class="steps" id="stepsDemo">
      <div class="step-item is-active is-primary">
        <div class="step-marker">1</div>
        <div class="step-details">
          <p class="step-title">Cuenta</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-marker">2</div>
        <div class="step-details">
          <p class="step-title">Perfil</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-marker">3</div>
        <div class="step-details">
          <p class="step-title">Social</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-marker">4</div>
        <div class="step-details">
          <p class="step-title">Terminar</p>
        </div>
      </div>
      <div class="steps-content">
        <div class="step-content has-text-centered is-active">
          <div class="hero-body">
            <div class="columns is-centered">
              <div class="column is-half">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="steps-actions">
        <div class="steps-action">
          <a href="#" data-nav="previous" class="button is-light">Anterior</a>
        </div>
        <div class="steps-action">
          <a href="#" data-nav="next" class="button is-light">Siguiente</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "home",
  components: { Form }
};
</script>