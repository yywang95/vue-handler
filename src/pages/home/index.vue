<template>
    <div>
        <h3>这是首页</h3>
        <img src="../../assets/images/test.jpg" />
        <button @click="handleClick">点击获取数据</button>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/basic/footer';

export default {
    components: { Footer },
    methods: {
        async handleClick() {
            try {
                const data = await this.$request.get('http://doclever.cn:8090/mock/5bf6ca4e999a3220765f7468/user/userInfo');

                console.log(data);
            } catch (e) {
                console.error(e);
            }
        },
    },
};
</script>
