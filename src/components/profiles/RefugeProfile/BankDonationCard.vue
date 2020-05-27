<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Banco {{ info.bankName }}</p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-5">{{ info.owner }}</p>
          <p>
            <strong class="mr-2">Cuenta:</strong>
            <span>{{ info.accountId }}</span>
          </p>
          <p>
            <strong class="mr-2">CBU:</strong>
            <span>{{ info.accountCBU }}</span>
          </p>
          <p>
            <strong class="mr-2">Alias:</strong>
            <span>{{ info.accountAlias }}</span>
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
</template>

<script>
export default {
  name: "BankDonationCard",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
