<template>
  <div>
    <Token
        v-for="tok in toks"
        :key="tok.id"
        :tkn="tok"
    />
    <Map v-bind:dir="mapdir" v-bind:name="mapname" />
    <input v-model="tmptitle" id="type">
    <input v-model="tmppath" id="name">
    <button @click="adinterface">add token</button>
    <button @click="changeback">change back</button>
    <span>{{mapdir}}</span>
    <span>{{mapname}} </span>
  </div>
</template>

<script>
import Map from '@/components/Map'
import Token from '@/components/Token'

export default {
  name: 'home',
  components: {
    Map, Token
  },
  data: () => ({
    count: 3,
    mapdir: "bg",
    mapname: "Deerbarrow",
    tmptitle: "tkn",
    tmppath: "tmp1",
    toks: [
      {title: "tkn", id: 1, path: "Bonfire"},
      {title: "tkn", id: 2, path: "Tree"}
    ]
  }),
  methods: {
    addToken: function(type, name) {
      this.toks.push({
        title: type,
        id: this.count++,
        path: name
      })
    },
    adinterface: function() {
      this.addToken(this.tmptitle, this.tmppath)
    },
    changeback: function() {
      this.mapdir = this.tmptitle
      this.mapname = this.tmppath
    }
  },
}
</script>
