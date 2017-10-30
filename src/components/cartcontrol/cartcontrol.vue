<template>
  <div class="cartcontrol">
    <div class="cart-decrease " v-show="food.count>0" @click="decreaseCart"
         transition="move">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
    {{food.count}}
  </div>
</template>

<script type="text/ecmascript-6">
  //  import Vue from 'vue'
  export default {
    name: '',
    props: ['food'],
    data() {
      return {}
    },
    created() {
//      console.log(this.food)
    },
    methods: {
      addCart(){
        if (!this.food.count) {
//          this.food.count = 1
          this.$set(this.food, 'count', 1)
          console.log('1 count = ', this.food.count)
        } else {
          this.food.count++
          console.log('2count = ', this.food.count)
        }
//        console.log(this.food)
//        console.log('count = ', this.food.count)
      },
      decreaseCart(){
        this.food.count--
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-count, .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0 160 220)
    .cart-count
      vertical-align: top
      width: 12px
      padding-top: 6px
      text-align: center
      font-size: 10px
      color: rgb(147 153 159)
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      &.move-transition
        opacity: 1
        transform: translate3D(0, 0, 0)
      .inner
        line-height: 24px
        font-size: 24px
        color: rgb(0 160 220)
      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3D(24px, 0, 0)
</style>
