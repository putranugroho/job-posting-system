// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import JobListingPage from "./views/JobListingPage.vue";
import JobApplicationPage from "./views/JobApplicationPage.vue";
import JobPostingPage from "./views/JobPostingPage.vue";

const routes = [
  { path: "/", component: JobListingPage, name: "JobListing" },
  { path: "/apply/:id", component: JobApplicationPage, name: "JobApply" },
  { path: "/post-job", component: JobPostingPage, name: "JobPost" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
