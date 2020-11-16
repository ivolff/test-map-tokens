<template>
  <div @click="changeFlag">
    <movable
      class="token" 
      :style="{'background-image': 'url('+tkn.path+')'}"
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
    changeFlag: function() {
      this.flag = !this.flag;
      console.log(this.flag)
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