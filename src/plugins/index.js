import Request from '@/http';

export default {
    install(Vue) {
        /* 后端请求 */
        Reflect.defineProperty(Vue.prototype, '$request', { value: Request });
    },
};
