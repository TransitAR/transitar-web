<template>
  <div class="pricing-table ">
    <div class="pricing-plan is-info">
      <div class="plan-header">Refugio</div>
      <div class="plan-price">
        <figure class="image is-48x48 inline-block m-auto">
          <img src="../assets/png/035-cat-1.png" />
        </figure>
      </div>
      <div class="plan-items">
        <div class="plan-item">
          <strong class="has-text-info">¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Publicar mascotas</div>
        <div class="plan-item">Contactar adoptantes</div>
        <div class="plan-item">Ofrecer pandoros</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Soy refugio</button>
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
          <strong class="has-text-primary">¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Buscar mascotas</div>
        <div class="plan-item">Ayudar refugios</div>
        <div class="plan-item">Ofrecer traslados</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Soy adoptante</button>
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
          <strong class="has-text-danger">¡ES GRATIS!</strong>
        </div>
        <div class="plan-item">Publicar servicios</div>
        <div class="plan-item">Recibir donaciones</div>
        <div class="plan-item">Ayudar a refugios</div>
      </div>
      <div class="plan-footer">
        <button class="button is-fullwidth">Soy veterinaria</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "table"
};
</script>
