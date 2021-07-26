<script>
export default {
  data() {
    return {
      augend: 2,
      addend: 3,
      result: undefined,
    }
  },

  methods: {
    addNumbers() {
      this.result = String(this.augend) + this.addend
    },
  },
}
</script>

<template>
  <section>
    <h1>Sources Tab</h1>
    <p>
      Use the sources tab to debug the wrong behaviour in this application that
      adds two numbers.
    </p>

    <table>
      <tbody>
        <tr>
          <td>
            <label for="augend">Augend</label>
          </td>
          <td>
            <input type="number" id="augend" v-model="augend" />
          </td>
        </tr>

        <tr>
          <td>
            <label for="addend">Addend</label>
          </td>
          <td>
            <input type="number" id="addend" v-model="addend" />
          </td>
        </tr>

        <tr>
          <td colspan="2" class="right-aligned">
            <button @click="addNumbers">Add</button>
          </td>
        </tr>

        <tr>
          <td colspan="2" v-if="result" class="result">
            {{ augend }} + {{ addend }} = {{ result }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.right-aligned {
  text-align: right;
}

.result {
  padding: 1em 0;
  font-size: 2rem;
}
</style>