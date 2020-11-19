<template>
  <div>
    <section class="slider" v-for="movie in popular">
      <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="">

        <article class="slider-desc">
          <div class="container">
            <h2>{{movie.title}}</h2>
            <p class="desc">{{movie.overview}}</p>
          </div>

        </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ['popular'],
  mounted() {
    console.log(1.1);
    this.hello = 'Hello Roma'
  }
}
</script>

<style lang="scss" scoped>

  .slider{
    position: relative;
    .slider-desc{
      background: $black;
      background: -moz-linear-gradient(top,  rgba($white,0) 0%, rgba($black,1) 100%);
      background: -webkit-linear-gradient(top,  rgba($white,0) 0%,rgba($black,1) 100%);
      background: linear-gradient(to bottom,  rgba($white,0) 0%,rgba($black,1) 100%);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: $white;
      padding: 10px 0;
      h2{
        margin-bottom: 20px;
        font-size: 30px;
      }
      .desc{
        line-height: 1.5;
        font-size: 16px;
      }
    }
  }
</style>