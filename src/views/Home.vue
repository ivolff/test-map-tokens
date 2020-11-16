<template>
  <div>
    <Map />
    <Tokens />
  </div>
</template>

<script>
import Map from '@/components/Map'
import Token from '@/components/Token'
import Tokens from '@/components/Tokens'

export default {
  name: 'home',
  components: {
    Map, Token, Tokens
  },
}
</script>
