import { defineConfig } from 'umi';

export default defineConfig({
    base: '/',
    publicPath: '/static/',
    hash: true,
    history: {
      type: 'hash',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/login', component: '@/pages/index' },
        {
          path: '/',
          component: '@/layouts/index',
          routes: [
            { path: '/home', component: '@/pages/home/index' },
            { path: '/admin', component: '@/pages/index' },
            { path: '/page1', component: '@/pages/page1/index' },
          ],
        }, 
    ],
    fastRefresh: {},
    // layout: {

    // },
    // proxy: {
    //     '/api': {
    //       'target': 'http://192.168.3.12:8028/',
    //       'changeOrigin': true,
    //       'pathRewrite': { '^/api' : '' },
    //     },
    // },
});
