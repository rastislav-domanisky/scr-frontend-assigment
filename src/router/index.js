import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from '../screens/HomeScreen';
import BlogScreen from '../screens/BlogScreen';
import ContactScreen from '../screens/ContactScreen';
import ArticleScreen from '../screens/ArticleScreen';

const routes = [
  {
    path: "/",
    name: "",
    component: HomeScreen,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogScreen,
  },
  {
    path: "/blog/:id",
    name: "Article",
    component: ArticleScreen,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
