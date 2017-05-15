import Vue from 'vue';
import Router from 'vue-router';

import Heroes from 'views/heroes';
import Hero from 'components/hero';
import Hero2 from 'components/hero-2';

import Home from 'views/home';
import NotFound from 'views/not-found';

Vue.use(Router);

export default new Router({
  'mode': 'history',
  'routes': [
    {
      'path': '/',
      'component': Home
    },
    {
      'path': '/heroes',
      'component': Heroes,
      'children': [
        { 'path': 'hero', 'component': Hero },
        { 'path': 'hero-2', 'component': Hero2 },
      ],
    },
    {
      'path': '/not-found',
      'component': NotFound
    },
    {
      'path': '*',
      'redirect': 'not-found'
    }
  ],
});
