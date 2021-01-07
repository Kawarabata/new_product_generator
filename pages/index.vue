<template>
  <div class="home">
    <div class="title">
      <img src="@/assets/images/logo.svg" alt="logo" />
      <h1>
        <span class="blue">New</span><span class="green"> Product</span>
        <br />Generator
      </h1>
    </div>
    <button @click="shuffle">GENERATE</button>
    <div class="result">
      <span class="target">{{ randomTarget }}</span> の<br />
      <span class="service">{{ randomService }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    randomTargetIndex: 0,
    randomServiceIndex: 0,
  }),
  computed: {
    targetList() {
      return this.$store.state.targetList
    },
    serviceList() {
      return this.$store.state.serviceList
    },
    randomTarget() {
      return this.targetList[this.randomTargetIndex]
    },
    randomService() {
      return this.serviceList[this.randomServiceIndex]
    },
  },
  methods: {
    shuffle() {
      this.randomTargetIndex = Math.floor(
        Math.random() * this.targetList.length
      )
      this.randomServiceIndex = Math.floor(
        Math.random() * this.serviceList.length
      )
    },
  },
}
</script>

<style scoped lang="postcss">
.home {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  background-color: #f6f5f6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & img {
    display: block;
    margin: 0 auto 24px;
  }

  & h1 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;

    & .blue {
      color: #4d719e;
    }

    & .green {
      color: #a9c967;
    }
  }

  & button {
    padding: 12px 16px;
    margin-bottom: 42px;
    background-color: #e5bf27;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.1em;
    cursor: pointer;

    &::after {
      margin-left: 4px;
      content: url('../assets/images/triangle.svg');
    }
  }

  & .result {
    font-size: 24px;
  }

  & .target,
  & .service {
    font-weight: bold;
    padding-left: 24px;
    padding-right: 24px;
  }

  & .target {
    border-bottom: 5px solid #4d719e;
  }

  & .service {
    display: inline-block;
    margin-top: 24px;
    border-bottom: 5px solid #a9c967;
  }
}
</style>
