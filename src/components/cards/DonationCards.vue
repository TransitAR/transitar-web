<template>
  <div>
    <div v-if="info.hasBank">
      <div class="card">
        <header class="card-header">
          <p class="m-3">
            <font-awesome-icon icon="university" size="lg" />
            <span class="font-semibold is-6 ml-3"
              >Banco {{ info.bankName }}</span
            >
          </p>
        </header>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="subtitle is-5">{{ info.bank.owner }}</p>
              <p>
                <strong class="mr-2">Cuenta</strong>
                <span>{{ info.bank.accountId }}</span>
              </p>
              <p>
                <strong class="mr-2">CBU</strong>
                <span>{{ info.bank.accountCBU }}</span>
              </p>
              <p>
                <strong class="mr-2">Alias</strong>
                <span>{{ info.bank.accountAlias }}</span>
              </p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Copiar</a>
          <a href="#" class="card-footer-item">Guardar</a>
          <a href="#" class="card-footer-item">Compartir</a>
        </footer>
      </div>
    </div>
    <div v-if="info.hasPaypal">
      <div class="card">
        <header class="card-header">
          <p class="m-3">
            <font-awesome-icon :icon="['fab', 'paypal']" size="lg" />
            <span class="font-semibold is-6 my-2 ml-3">Paypal</span>
          </p>
        </header>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p>
                <strong class="mr-2">Link</strong>
                <span>{{ info.paypal.link }}</span>
              </p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Copiar</a>
          <a href="#" class="card-footer-item">Guardar</a>
          <a href="#" class="card-footer-item">Compartir</a>
        </footer>
      </div>
    </div>
    <div v-if="info.hasMercadopago">
      <div class="card">
        <header class="card-header">
          <p class="m-3">
            <font-awesome-icon icon="hand-holding-usd" size="lg" />
            <span class="font-semibold is-6 ml-3">Mercadopago</span>
          </p>
        </header>
        <div
          class="card-content"
          v-for="link in info.mercadopago.links"
          :key="link._id"
        >
          <div class="media">
            <div class="media-content">
              <p class="subtitle is-5">{{ link.description }}</p>
              <p>
                <strong class="mr-2">Monto</strong>
                <span>{{ link.amount }}</span>
              </p>
              <p>
                <strong class="mr-2">Link</strong>
                <span>{{ link.url }}</span>
              </p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Copiar</a>
          <a href="#" class="card-footer-item">Guardar</a>
          <a href="#" class="card-footer-item">Compartir</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationCards",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
