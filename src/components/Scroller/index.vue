<template>
  <div class="wrapper"
       ref="movie_body">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'componentScroller',
  props: {
    handleToScroll: {
      type: Function,
      default: function () { }
    },
    handleToTouchEnd: {
      type: Function,
      default: function () { }
    }
  },
  mounted () {
    var scroll = new BScroll(this.$refs.movie_body, {
      tap: true,
      probeType: 1
    })
    this.scroll = scroll
    scroll.on('scroll', (pos) => {
      this.handleToScroll(pos)
    });
    scroll.on('touchEnd', (pos) => {
      this.handleToTouchEnd(pos)
    })
  },
  methods: {
    toScrollTop (y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>