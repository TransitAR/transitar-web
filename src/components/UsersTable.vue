<template>
  <div class="pricing-table">
    <div class="pricing-plan is-info">
      <div class="plan-header">Refugio</div>
      <div class="plan-price">
        <figure class="image is-48x48 inline-block m-auto">
          <img src="../assets/png/035-cat-1.png" />
        </figure>
      </div>
      <div class="plan-items">
        <div class="plan-item">
          <strong>¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Publicar mascotas</div>
        <div class="plan-item">Contactar adoptantes</div>
        <div class="plan-item">Recibir donaciones</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Ver más</button>
      </div>
    </div>

    <div class="pricing-plan is-active">
      <div class="plan-header">Adoptante</div>
      <div class="plan-price">
        <figure class="image is-48x48 inline-block m-auto">
          <img src="../assets/png/001-smartphone.png" />
        </figure>
      </div>
      <div class="plan-items">
        <div class="plan-item">
          <strong>¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Buscar mascotas</div>
        <div class="plan-item">Adoptar</div>
        <div class="plan-item">Dar tránsito</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Ver más</button>
      </div>
    </div>

    <div class="pricing-plan is-warning">
      <div class="plan-header">Voluntario</div>
      <div class="plan-price">
        <figure class="image is-48x48 inline-block m-auto">
          <img src="../assets/png/volunteer.png" />
        </figure>
      </div>
      <div class="plan-items">
        <div class="plan-item">
          <strong>¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Ofrecer traslados</div>
        <div class="plan-item">Realizar donaciones</div>
        <div class="plan-item">Ayudar en emergencias</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Ver más</button>
      </div>
    </div>

    <div class="pricing-plan is-danger">
      <div class="plan-header">Clínica Veterinaria</div>
      <div class="plan-price">
        <figure class="image is-48x48 inline-block m-auto">
          <img src="../assets/png/033-doctor.png" />
        </figure>
      </div>
      <div class="plan-items">
        <div class="plan-item">
          <strong>¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Publicar servicios</div>
        <div class="plan-item">Recibir donaciones</div>
        <div class="plan-item">Ayudar a refugios</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Ver más</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "table"
};
</script>
