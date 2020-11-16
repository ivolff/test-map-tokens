<template>
    <div>
        <div
            class="map"
            :style="{'background-image': 'url('+path+')'}"
        >
        </div>
        <button class="butt" @click="changePath">change</button>
    </div>
</template>

<script>
export default {
    name: 'map',
    data: () => ({
        num: '2',
        path: require('../assets/bg/tmp1.png')
    }),
    methods: {
        changePath: function() {
            if (this.num === '1') {
                this.num = '2';
                this.path =  require('../assets/bg/tmp2.png')
            } else {
                this.num = '1';
                this.path =  require('../assets/bg/tmp1.png')
            }
            console.log(this.path)
            return;
        }
    }
}
</script>

<style>
  .map {
    height: 600px;
    width: 1000px;
    padding: 50px;
    margin: 30px auto 5px;
    border: 1px solid gray;
    border-radius: 10px;  
    font-size:10px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .butt {
    background-color: rgb(82, 186, 179);
    border-radius: 10px;
    border: none;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    cursor: pointer;
    height: 35px;
    width: 100px;
    padding: 5px 10px;
    margin: 10px 5px;
    font-size:15px;
  }
</style>