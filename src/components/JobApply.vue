<template>
  <div class="job-apply">
    <div class="apply-card">
      <h1>{{ job.title }}</h1>
      <p class="job-description">{{ job.description }}</p>

      <h3>Apply for this Job</h3>
      <form @submit.prevent="submitApplication" class="application-form">
        <label for="name">Your Name</label>
        <input
          id="name"
          v-model="application.name"
          placeholder="Enter your name"
          required
        />

        <label for="email">Your Email</label>
        <input
          id="email"
          v-model="application.email"
          placeholder="Enter your email"
          required
          type="email"
        />

        <label for="coverLetter">Cover Letter</label>
        <textarea
          id="coverLetter"
          v-model="application.coverLetter"
          placeholder="Write your cover letter here"
          required
        ></textarea>

        <button type="submit" class="submit-button">Submit Application</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      job: {},
      application: {
        name: "",
        email: "",
        coverLetter: "",
      },
    };
  },
  created() {
    this.fetchJobDetails();
  },
  methods: {
    async fetchJobDetails() {
      const jobId = this.$route.params.id;
      const response = await axios.get(`http://localhost:3000/jobs/${jobId}`);
      this.job = response.data;
    },
    async submitApplication() {
      const jobId = this.$route.params.id;
      await axios.post(
        `http://localhost:3000/jobs/${jobId}/apply`,
        this.application
      );
      alert("Application submitted!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.job-apply {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.apply-card {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
}

.job-description {
  color: #555;
  font-size: 1.1em;
  margin-bottom: 20px;
  line-height: 1.6;
}

h3 {
  margin-top: 30px;
  color: #4caf50;
  font-size: 1.5em;
}

.application-form {
  display: flex;
  flex-direction: column;
}

.application-form label {
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #4caf50;
}

.application-form input,
.application-form textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.application-form input:focus,
.application-form textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
