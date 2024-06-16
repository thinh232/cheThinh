<template>
  <div class="detailProduct">
    <headerView></headerView>
    <div class="detail-container">
      <div class="left-detail">
        <div class="img-detail-main">
          <img src="../img/1.png">
        </div>
      </div>
      <div class="right-detail">
        <div class="name-product-detail">
          Che Thai
        </div>
        <div class="price-detail">
          {{ fomat(price) }}
        </div>
        <div class="des-detail">
          Chè Thái Caramen là sự kết hợp hoàn hảo giữa vị béo ngậy của nước cốt dừa, vị ngọt thanh của sữa, vị đắng nhẹ
          của cà phê và vị thơm ngon của thạch caramen. Món chè này là lựa chọn tuyệt vời cho những ai yêu thích hương
          vị ngọt ngào và béo ngậy.
        </div>
        <div class="number-detail">
          <span>so luong</span>
          <input type="text">
        </div>
        <div class="btn-detail">
          <button class="btnBuy-detail">Buy</button>
          <button class="btnAdd-detail">ADD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerView from '../home/headerView.vue'
export default {
  name: 'detail-page',
  components: {
    headerView
  },
  data() {
    return {
      price: 12000
    }
  }, methods: {
    fomat(price) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 2
      });
      return formatter.format(price);
    }
  },
  props: {

  }
}
</script>

<style scoped>
.detailProduct {
  width: 100%;
  height: 700px;
  background-color: #222831;
}

.detail-container {
  position: relative;
  width: 100%;
  max-width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  top:10%;
}

.left-detail {
  width: 70%;
  height: auto;
  align-items: center;
  justify-content: center;

}

.img-detail-main img {
  width: 70%;
  height: auto;
  background-color: #fff;
  margin-left: 10%;
  margin-top:10%;
  box-shadow: rgba(15, 127, 255, 0.3) 0px 0px 0px 3px;
}

.right-detail {
  width: 50%;
  height: auto;
}

.right-detail .name-product-detail {
  color: #e88735;
  font-size: xxx-large;
  font-family: Poppins;
}

.price-detail {
  color: #28ca00;
  font-size: 22px;
  font-family: Poppins;
  margin: 10px 0px;
}

.des-detail {
  color: #EEEEEE;
  text-align: justify;
  width: 450px;
  font-family: "Numans", sans-serif;
  margin: 10px 0px;
}
.number-detail span{
  color: #07c8f8;
  font-size: 22px;
  font-family: Poppins;
  margin: 10px 0px;
}
</style>