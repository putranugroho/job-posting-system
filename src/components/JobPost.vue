<template>
  <div class="job-post">
    <div class="post-card">
      <h1>Post a New Job</h1>
      <form @submit.prevent="postJob" class="job-form">
        <label for="title">Job Title</label>
        <input
          id="title"
          v-model="job.title"
          placeholder="Enter the job title"
          required
        />

        <label for="description">Job Description</label>
        <textarea
          id="description"
          v-model="job.description"
          placeholder="Enter the job description"
          required
        ></textarea>

        <button type="submit" class="submit-button">Post Job</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      job: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    async postJob() {
      await axios.post("http://localhost:3000/jobs", this.job);
      alert("Job posted successfully!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.job-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-card {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.job-form {
  display: flex;
  flex-direction: column;
}

.job-form label {
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #4caf50;
}

.job-form input,
.job-form textarea {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.job-form input:focus,
.job-form textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

textarea {
  resize: vertical;
  min-height: 150px;
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
