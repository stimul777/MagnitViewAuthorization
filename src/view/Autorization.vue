<template>
    <v-container class='wrapper' >
      <h2> Авторизация </h2>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.5349C0 10.6627 1.51145 7.01671 4.25839 4.26557C7.00282 1.51444 10.6416 0 14.5061 0H48V7.3862H14.5061C12.6134 7.3862 10.8247 8.13274 9.47131 9.48757C8.11665 10.8462 7.37159 12.6384 7.37159 14.5349L7.32769 26.9332C6.98526 30.226 4.508 32.8829 1.30448 33.373L0 33.5729V14.5349Z" fill="#E30613"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 48.0002V40.614H33.4939C35.3879 40.614 37.1753 39.8662 38.5274 38.5101C39.8808 37.1553 40.6272 35.3644 40.6272 33.4666L40.6359 21.6979C40.6359 18.194 43.2411 15.1538 46.6968 14.6272L48 14.4286V33.4666C48 37.3388 46.4886 40.9848 43.7416 43.7346C40.9972 46.4858 37.3584 48.0002 33.4939 48.0002H0Z" fill="#E30613"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3645 33.5983V24.0504L23.9982 29.2762L19.632 24.0504V33.5983H13.8496V14.8066H19.3284L23.9982 20.8493L28.668 14.8066H34.1469V33.5983H28.3645Z" fill="#E30613"/>
      </svg>
      
      <div class='wrapper-select'>
        <v-text-field
          class = "text-field"
          label="Введите логин"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          class = "text-field"
          label="Пароль"
          outlined
          dense
        ></v-text-field>
         
        <v-btn class="btn-enter"> Войти </v-btn>
      </div>
      <p>Забыли пароль или ID?</p>
    </v-container>
</template>

<script>

</script>

<style scoped>
.wrapper {
 border: 1px solid black;
}

.wrapper-select{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.text-field {
  width: 394px;
  height: 48px;
}

.btn-enter {
  width: 394px;
  height: 48px;
  color: #FFFFFF;
  background: #E30613 !important;
}
</style>
