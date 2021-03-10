import { defineConfig } from 'umi';

export default defineConfig({
    base: '/',
    // publicPath: '/static/',
    hash: true,
    history: {
      type: 'hash',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    theme: {
        'primary-color': '#FF8899',
    },
    favicon: '/public/favicon.ico',
    title: 'hi',
    // define: {
    //     APP_MARK: 'TOCPhysical,Admin',
    //     PRODUCT_NAME: '哈哈哈哈',
    // },
    publicPath: './',
    manifest: {
      basePath: './',
    },
    targets: {
      ie: 11,
    },
    routes: [
        { path: '/login', component: '@/pages/login/index' },
        { path: '/register', component: '@/pages/register/index' },
        { path: '/registerSuccess', component: '@/pages/registerSuccess/index' },
        {
          path: '/',
          component: '@/layouts/index',
          routes: [
            { path: '/', redirect: '/login' },
            { path: '/home', component: '@/pages/home/index' },
            { path: '/page1', component: '@/pages/page1/index' },
            { path: '/orderPage', component: '@/pages/orderPageAdmin/index' },
            { path: '/orderPageDoctor', component: '@/pages/orderPageDoctor/index' },        
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
