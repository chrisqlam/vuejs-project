<template>
    <b-nav vertical class="ml-auto">
        <router-link :to="{name: 'Dedication'}">Dedication</router-link>
        <router-link :to="{name: 'Foreword'}">Foreword</router-link>
    </b-nav>
</template>

<style scoped>
b-nav {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

a {
  padding: 1em;
}

</style>
