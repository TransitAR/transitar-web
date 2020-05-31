<template>
  <div class="lg:flex">
    <DonationCard
      v-if="info.hasBank"
      class="m-8 flex-1"
      icon="university"
      :title="`Banco ${info.bank.bankName}`"
    >
      <p>
        <strong class="mr-2">Titular</strong>
        <span>{{ info.bank.owner }}</span>
      </p>
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
    </DonationCard>

    <DonationCard
      v-if="info.hasPaypal"
      class="m-8 flex-1"
      :icon="['fab', 'paypal']"
      title="Paypal"
    >
      <p>
        <strong class="mr-2">Link</strong>
        <span>{{ info.paypal.link }}</span>
      </p>
    </DonationCard>

    <DonationCard
      v-if="info.hasMercadopago"
      class="m-8 flex-1"
      :icon="['fab', 'paypal']"
      title="Mercadopago"
    >
      <div v-for="link in info.mercadopago.links" :key="link._id">
        <p>
          <strong class="mr-2">Descripcion</strong>
          <span>{{ link.description }}</span>
        </p>
        <p>
          <strong class="mr-2">Monto</strong>
          <span>{{ link.amount }}</span>
        </p>
        <p>
          <strong class="mr-2">Link</strong>
          <span>{{ link.url }}</span>
        </p>
      </div>
    </DonationCard>
  </div>
</template>

<script>
import DonationCard from "./DonationCard";

export default {
  name: "DonationCards",
  components: {
    DonationCard
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
