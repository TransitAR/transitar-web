<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Banco {{ info.bankAccount }}</p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-5">{{ info.accountHolder }}</p>
          <p>
            <strong>Cuenta:</strong> <span>{{ info.bankAccountID }}</span>
          </p>
          <p>
            <strong>CBU:</strong> <span>{{ info.accountCBU }}</span>
          </p>
          <p>
            <strong>Alias:</strong><span>{{ info.accountAlias }}</span>
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
