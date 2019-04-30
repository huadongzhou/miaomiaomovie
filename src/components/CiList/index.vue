<template>
  <div class="cinema_body">
    <Loading v-if="isShow" />
    <Scroller v-else>
      <ul>
        <li v-for="cinema in cinemaList"
            :key="cinema.id">
          <div>
            <span>{{cinema.nm}}</span>
            <span class="q"><span class="price">{{cinema.sellPrice}}</span> 元起</span>
          </div>
          <div class="address">
            <span>{{cinema.addr}}</span>
            <span>{{cinema.distence}}</span>
          </div>
          <div class="card">
            <div v-for="(num,key) in cinema.tag"
                 :key="key"
                 v-if="num === 1"
                 :class="key | formatColor">{{key | formatCard}}</div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
  name: 'componentCiList',
  data () {
    return {
      cinemaList: [],
      isShow: true,
      cityId: -1
    }
  },
  activated () {
    var cityid = this.$store.state.city.id
    if (this.cityId === cityid) { return; }
    console.log('456')
    this.axios.get('/api/cinemaList?cityId=' + cityid).then((res) => {
      console.log(res)
      var msg = res.data.msg
      if (msg === 'ok') {
        this.cinemaList = res.data.data.cinemas
        this.isShow = false
        this.cityId = cityid
      }
    })
  },
  filters: {
    formatCard (key) {
      var card = [
        { key: 'allowRefund', value: '改' },
        { key: 'endorse', value: '退' },
        { key: 'sell', value: '折扣卡' },
        { key: 'snack', value: '小吃' }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    },
    formatColor (key) {
      var card = [
        { key: 'allowRefund', value: 'bl' },
        { key: 'endorse', value: 'bl' },
        { key: 'sell', value: 'or' },
        { key: 'snack', value: 'or' }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    }
  }
}
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
