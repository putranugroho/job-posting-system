<template>
  <div class="job-list">
    <h1>Job Listings</h1>
    <div class="job-card" v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
      <p class="job-description">{{ job.description.slice(0, 100) }}...</p>
      <router-link
        :to="{ name: 'JobApply', params: { id: job.id } }"
        class="view-job-button"
        git
        pull
        origin
        main
        --rebase
        >View Job</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      const response = await axios.get("http://localhost:3000/jobs");
      this.jobs = response.data;
    },
  },
};
</script>

<style scoped>
.job-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.job-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.job-card:hover {
  transform: translateY(-5px);
}

h2 {
  color: #4caf50;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.job-description {
  color: #666;
  font-size: 1em;
  margin-bottom: 15px;
}

.view-job-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.view-job-button:hover {
  background-color: #45a049;
}
</style>
