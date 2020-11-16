<template>
  <div @click="onclick">
    <movable
      class="token" 
      :style="itemImage(tkn)"
      :class="{focused: flag}"
    >
        <span>{{tkn.id}}</span>
    </movable>
  </div>
</template>

<script>
export default {
  name: 'token',
  data: () => ({
    flag: false,
  }),
  props: ['tkn'],
  methods: {
    onclick() {
      this.flag = !this.flag

    },
    itemImage(tkn) {
      return {
        background: `url(${require(`@/assets/${tkn.title}/${tkn.path}.png`)}) no-repeat center / cover`
      }
    }
  },
}
</script>

<style>
  .token {
    height: 80px;
    width: 80px;
    padding: 5px;
    margin: 5px;
    font-size:30px;
    background-size: contain;
    color: greenyellow;
  }
  .focused {
    border: 2px solid red;
  }
</style>