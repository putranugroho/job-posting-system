<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Job Posting System</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/post-job">Post a Job</router-link>
      </nav>
    </header>

    <main>
      <!-- This renders the active route component based on the URL -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Basic styles for layout and appearance */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

header {
  background-color: #4caf50;
  padding: 20px;
  color: white;
}

nav {
  margin: 10px 0;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
