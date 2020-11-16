<template>
    <movable
      class="token" 
      :style="{'background-image': 'url('+tkn.path+')'}"
      :class="{focused: flag}"
      @click="changeFlag"
    >
        <span>{{tkn.id}}</span>
    </movable>
</template>

<script>
export default {
  name: 'token',
  data: () => ({
    flag: false,
  }),
  props: ['tkn'],
  methods: {
    changeFlag: function() {
      this.flag = !this.flag;
      return;
    },
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
    border: 5px solid red;
    border-radius: 50px;  
  }
</style>