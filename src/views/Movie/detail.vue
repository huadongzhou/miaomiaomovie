<template>
  <div id="deatailContrainer"
       class="slideClass">
    <Header title="影片详情">
      <i class="iconfont icon-right"
         @touchstart="handleBack"></i>
    </Header>
    <Loading v-if="isShow" />
    <div v-else
         id="content"
         class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"
             :style="{'background-image':' url('+detailMovie.img.replace(/w\.h/, '148.208') +')'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | setWH('140.208')">
          </div>
          <div class="detail_list_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.sc}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>{{detailMovie.src}}/ {{detailMovie.dur}}分钟</p>
            <p>{{detailMovie.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>
          {{detailMovie.dra}}
        </p>
      </div>
      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"
              v-for="(ing,index) of detailMovie.photos"
              :key="index">
            <div>
              <img :src="ing | setWH('140.127')">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'AppMovieDetail',
  props: ['movieId'],
  components: {
    Header
  },
  data () {
    return {
      detailMovie: {},
      isShow: true
    }
  },
  methods: {
    handleBack () {
      this.$router.back();
    }
  },
  mounted () {
    this.axios.get('/api/detailmovie?movieId=' + this.movieId).then((res) => {
      console.log(res)
      var msg = res.data.msg
      if (msg === 'ok') {
        console.log(res.data.data.detailMovie)
        this.detailMovie = res.data.data.detailMovie
        this.isShow = false
        this.$nextTick(() => {
          new Swiper('.detail_player', {
            slidesPerView: 'auto',
            freeMode: true,
            freeModeSticky: true
          });
        })
      }
    })
  }
}
</script>

<style scoped>
#deatailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#deatailContrainer.slideClass {
  animation: 0.3s slideRight;
}
@keyframes slideRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
#deatailContrainer.contentDetail {
  display: block;
  margin-bottom: 0;
}
#deatailContrainer .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
#content .detail_intro {
  padding: 10px;
}
#content .detail_player {
  margin: 20px;
}
.detail_player .swiper-slide {
  width: 70px;
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
}
.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999;
}
</style>
