<template>
<div>
    <Token
        v-for="tok in toks"
        :key="tok.id"
        :tkn="tok"
    />
    <button class="butt" @click="addToken">ADD</button>
</div>
</template>

<script>
import Token from '@/components/Token'

export default {
  name: 'tokens',
  data: () => ({
      count: 3,
      toks: [
          {title: "name1", id: 1, path: require('../assets/tkn/tmp1.png')},
          {title: "name2", id: 2, path: require('../assets/tkn/tmp2.png')}
      ]
  }),
  methods: {
      addToken: function() {
          this.toks.push({
              title: "name3",
              id: this.count++,
              path: require('../assets/tkn/tmp2.png')
          })
          return;
      }
  },
  components: {
    Token,
  }
}
</script>
