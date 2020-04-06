<template>
  <section>
    <div class="container" id="refugio">
      <h1 class="title is-1 mt-8">Refugio</h1>
      <!-- Vision -->
      <div class="grid grid-cols-2">
        <div>
          <p>
            Pellentesque lacinia vel diam ac ultrices. Nam hendrerit tortor
            pharetra commodo pulvinar. Cras vitae nisl vulputate, tincidunt
            lacus pretium, mattis risus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            posuere odio et sagittis pretium. Duis vestibulum a felis eget
            fringilla.
          </p>
          <div class="content">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <h1 class="title is-5 mt-8">Refugios registrados</h1>
          <div class="inline-flex align-center">
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <button class="button is-text mt-3 mx-1">Ver todos</button>
          </div>
          <div class="pt-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-primary">
                <strong>Registrarme</strong>
              </router-link>
              <a class="button is-light" @click="login">Iniciar sesión</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container" id="adoptante">
      <h1 class="title is-1 mt-8">Adoptante</h1>
      <!-- Vision -->
      <div class="grid grid-cols-2">
        <div>
          <p>
            Pellentesque lacinia vel diam ac ultrices. Nam hendrerit tortor
            pharetra commodo pulvinar. Cras vitae nisl vulputate, tincidunt
            lacus pretium, mattis risus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            posuere odio et sagittis pretium. Duis vestibulum a felis eget
            fringilla.
          </p>
          <div class="content">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <h1 class="title is-3 mt-8">137</h1>
          <h1 class="title is-5 mt-2">Adopciones exitosas</h1>
          <div class="pt-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-primary">
                <strong>Registrarme</strong>
              </router-link>
              <a class="button is-light" @click="login">Iniciar sesión</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container" id="voluntario">
      <h1 class="title is-1 mt-8">Voluntario</h1>
      <!-- Vision -->
      <div class="grid grid-cols-2">
        <div>
          <p>
            Pellentesque lacinia vel diam ac ultrices. Nam hendrerit tortor
            pharetra commodo pulvinar. Cras vitae nisl vulputate, tincidunt
            lacus pretium, mattis risus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            posuere odio et sagittis pretium. Duis vestibulum a felis eget
            fringilla.
          </p>
          <div class="content">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <h1 class="title is-3 mt-8">172</h1>
          <h1 class="title is-5 mt-2">Voluntarios dispuestos a ayudar</h1>
          <div class="pt-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-primary">
                <strong>Registrarme</strong>
              </router-link>
              <a class="button is-light" @click="login">Iniciar sesión</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container" id="veterinaria">
      <h1 class="title is-1 mt-8">Clínica Veterinaria</h1>
      <!-- Vision -->
      <div class="grid grid-cols-2">
        <div>
          <p>
            Pellentesque lacinia vel diam ac ultrices. Nam hendrerit tortor
            pharetra commodo pulvinar. Cras vitae nisl vulputate, tincidunt
            lacus pretium, mattis risus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            posuere odio et sagittis pretium. Duis vestibulum a felis eget
            fringilla.
          </p>
          <div class="content">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <h1 class="title is-5 mt-8">Veterinarias registradas</h1>
          <div class="inline-flex align-center">
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
            </figure>
            <button class="button is-text mt-3 mx-1">Ver todos</button>
          </div>
          <div class="pt-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-primary">
                <strong>Registrarme</strong>
              </router-link>
              <a class="button is-light" @click="login">Iniciar sesión</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoProfiles"
};
</script>
