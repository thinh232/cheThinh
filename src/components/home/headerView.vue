<template>
  <header>
    <ul>
      <router-link to="/"><li :class="{ active: activeTab === 'Home' }" @click="activeTab = 'Home'">Home</li></router-link>
      <li :class="{ active: activeTab === 'Contact' }" @click="activeTab = 'Contact'">Contact</li>
      <li :class="{ active: activeTab === 'Info' }" @click="activeTab = 'Info'">Info</li>
      <li :class="{ active: activeTab === 'Category' }" @click="activeTab = 'Category'">Category</li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Poppins;
}

header {
  position: absolute;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #fff4;
  font-family: Poppins;
}

header ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
}

header li {
  padding: 20px 40px;
  color: #ffffff;
  cursor: pointer;
}

header li.active,
header li:hover {
  border-bottom: 2px solid #fff;
}
</style>