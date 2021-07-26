<script>
export default {
  methods: {},
}
</script>

<template>
  <section>
    <h1>Elements Tab</h1>
    <p>
      Use the browser developer tool's "elements" tab to modify the page HTML
      content and CSS rules.
    </p>

    <div>
      <h2>Find HTML</h2>
      <ul>
        <li id="first-line">Find this line by <code>id</code></li>
        <li class="second-line">Find this line by <code>class</code></li>
        <li data-qa="third-line">
          Find this line by <code>data-qa</code> attribute
        </li>
      </ul>
    </div>

    <div>
      <h2>Edit HTML</h2>
      <ul>
        <li>Edit this text to say "Hi there, name!"</li>
        <li>Hide this line</li>
        <li>Remove this line</li>
      </ul>
    </div>

    <div>
      <h2>Edit CSS</h2>
      <ul>
        <li>
          Change the color of this text to be <span class="red">red</span>
        </li>
        <li>
          Change the case of this line to be all
          <span class="uppercase">uppercase</span>
        </li>
        <li>
          create a CSS rule that renders <code>&lt;code&gt;</code> tags in
          <span class="blueviolet">blueviolet</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.red {
  color: red;
}

.blueviolet {
  color: blueviolet;
}

.uppercase {
  text-transform: uppercase;
}
</style>