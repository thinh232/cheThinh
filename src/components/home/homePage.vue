<template>
    <div>
        <headerView></headerView>
        <div class="slider">
            <div class="title">Che thjnh</div>
            <div class="images" :style="{ '--rotate': rotate + 'deg' }">
                <div v-for="(item, index) in images" :key="index" class="item" :style="{ '--i': index + 1 }">
                    <img :src="item.src" />
                </div>
            </div>
            <div class="content">
                <div v-for="(item, index) in contents" :key="index" :class="{ item: true, active: active === index }">
                    <h1>{{ item.title }}</h1>
                    <div class="des">{{ item.description }}</div>
                    <router-link to="detail"><button style="cursor: pointer;">See more</button></router-link>
                </div>
            </div>
            <button id="prev" @click="prevSlider">◄</button>
            <button id="next" @click="nextSlider">►</button>
        </div>
    </div>

</template>

<script>
import headerView from './headerView.vue';
export default {
    data() {
        return {
            activeTab: 'Home',
            active: 0,
            rotate: 0,
            images: [
                { src: require('../img/6.png') },
                { src: require('../img/2.png') },
                { src: require('../img/3.png') },
                { src: require('../img/4.png') },
                { src: require('../img/5.png') },
                { src: require('../img/1.png') },
            ],
            contents: [
                {
                    title: 'CHE CARAMEN',
                    description: 'Chè Thái Caramen là sự kết hợp hoàn hảo giữa vị béo ngậy của nước cốt dừa, vị ngọt thanh của sữa, vị đắng nhẹ của cà phê và vị thơm ngon của thạch caramen. Món chè này là lựa chọn tuyệt vời cho những ai yêu thích hương vị ngọt ngào và béo ngậy.',
                },
                {
                    title: 'DUA THAI',
                    description: 'Chè Dừa Thái Lan là món tráng miệng thơm ngon, thanh mát, được nhiều người yêu thích. Món chè được nấu từ nước cốt dừa béo ngậy, kết hợp với thạch dừa dai dai, thơm thơm, cùng với trân châu dẻo dẻo, tạo nên hương vị hấp dẫn khó cưỡng. Chè Dừa Thái Lan là lựa chọn hoàn hảo cho những ngày nóng bức, giúp bạn giải nhiệt và thư giãn.',
                },
                {
                    title: 'DUA DAM',
                    description: 'Chè Dừa Dầm Thái là sự kết hợp độc đáo giữa hai món ăn vặt quen thuộc: Chè Thái và Dừa Dầm. Món chè này mang đến hương vị thanh mát, béo bùi và đầy hấp dẫn, chinh phục thực khách ngay từ những lần đầu thưởng thức.',
                },
                {
                    title: 'SAU HOA QUA',
                    description: 'Chè Thái Sầu Hoa Quả là sự kết hợp độc đáo và sáng tạo giữa món Chè Thái truyền thống với những loại trái cây tươi ngon và vị béo ngậy, thơm lừng đặc trưng của sầu riêng. Món chè này nhanh chóng trở thành “cơn sốt” trong giới trẻ bởi hương vị mới lạ, độc đáo và vô cùng hấp dẫn.',
                },
                {
                    title: 'CHE BUOI',
                    description: 'Chè Thái Bưởi là món ăn vặt quen thuộc được nhiều người yêu thích bởi hương vị thơm ngon, thanh mát và giá cả bình dân. Nếu bạn đang tìm kiếm một món ăn thanh mát để giải nhiệt cho ngày hè, hãy thử thưởng thức món Chè Thái Bưởi nhé!',
                },
                {
                    title: 'KHOAI DEO',
                    description: 'Chè Thái Khoai Dẻo là sự kết hợp độc đáo giữa món Chè Thái truyền thống với những viên khoai dẻo dai, thơm ngon, tạo nên một món ăn vặt hấp dẫn và đầy lôi cuốn. Món chè này nhanh chóng trở thành sự yêu thích của giới trẻ bởi hương vị mới lạ, độc đáo và vô cùng “đã miệng”.',
                },
            ],
        };
    },
    computed: {
        rotateAdd() {
            return 360 / this.images.length;
        },
    },
    methods: {
        nextSlider() {
            this.active = (this.active + 1) % this.images.length;
            this.rotate += this.rotateAdd;
        },
        prevSlider() {
            this.active = (this.active - 1 + this.images.length) % this.images.length;
            this.rotate -= this.rotateAdd;
        },
    },
    mounted() {
        // Uncomment the line below to enable automatic sliding
        // this.autoNext = setInterval(this.nextSlider, 3000);
    },
    components:{
        headerView
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Numans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Share+Tech+Mono&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

body {
    margin: 0;
    font-family: Poppins;
}

header {
    position: absolute;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid #fff4;
    font-family: Poppins;

}

header ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
}

header li {
    padding: 20px 40px;
    color: #ffffff;
    cursor: pointer;
}

header li.active,
header li:hover {
    border-bottom: 2px solid #fff;
}

.slider {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #222831;
    overflow: hidden;
}

.slider::before {
    position: absolute;
    width: 50%;
    height: 100vh;
    content: "";
    top: 0;
    left: 0;
    background-image: linear-gradient(#393E46 , #00ADB5)  ;
    filter: blur(2px);
}

.title {
    position: absolute;
    top: 15%;
    right: 55%;
    text-align: right;
    color: #fff;
    font-size: 130px;
    width: 50%;
    font-family: "Pacifico", cursive;
    text-shadow: 3px 5px 0px #478860;
    line-height: 0.9em;
    transform: rotate(-5deg);
}

.images {
    position: absolute;
    bottom: 0%;
    left: 50%;
    --rotate: 0deg;
    transform: translate(-75%, 63%) rotate(var(--rotate)) scale(0.9);
    width: 1300px;
    height: 1300px;
    border-radius: 50%;
    transition: transform 0.5s ease-in-out;
    outline: 1px dashed #fff5;
    outline-offset: -100px;
}

.images .item {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    rotate: calc(60deg * var(--i));
}

.images .item img {
    height: 420px;
}

.content {
    color: #EEEEEE;
    position: absolute;
    top: 15%;
    left: 60%;
    text-align: justify;
    width: 350px;
    font-family: "Numans", sans-serif;
}

.content h1 {
    color: #e88735;
    font-size: xxx-large;
    font-family: Poppins;
}

.content button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #e88735;
    color: #fff;
    border: none;
    float: right;
}

.content .item {
    display: none;
}

.content .item.active {
    display: block;
}

@keyframes showContent {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
    }
}

.content .item.active h1 {
    opacity: 0;
    animation: showContent 0.5s ease-in-out 1 forwards;
}

.content .item.active .des {
    opacity: 0;
    animation: showContent 0.5s 0.3s ease-in-out 1 forwards;
}

.content .item.active button {
    opacity: 0;
    animation: showContent 0.5s 0.6s ease-in-out 1 forwards;
}

#prev,
#next {
    position: absolute;
    border: none;
    bottom: 10%;
    right: 320px;
    font-size: 20px;
    font-family: cursive;
    background-color: transparent;
    color: #000000;
    font-weight: bold;
    opacity: 0.3;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px 15px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

#next {
    left: unset;
    right: 250px;
}

#next:hover,
#prev:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
}
</style>