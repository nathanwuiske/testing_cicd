<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <button v-on:click="test()">sss</button>

    <input v-model="someinput" type="text">

    <span>{{storeNum}}</span>

    <div v-if="error">
   
       <b-alert variant="danger" show>
      {{ errorMessage}} 
    </b-alert>
      
      </div>

    <div v-if="loading"> <b-spinner label="Loading..."></b-spinner>  Loading  </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data()
  {
    return {
      posts: [],
      loading: false,
      error: false,
      errorMessage: '',
      storeNum: 0,
      someinput: '',
    }
  },
  computed: {
    billingValue()
    {
      return this.$store.getters.getbillingValue;
    }
  },
  methods: {
    helloWorld()
    {
      this.loading = true;
      setTimeout(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>
      {
        this.posts = response.data;
        this.loading = false;

      }).catch(error => {
        console.log(error);
         this.loading = false;
         this.error = true;
         this.errorMessage = error;
      })
      }, 3000);
   
    },
    async test()
    {
       await axios.put('http://127.0.0.1:8000/api/settings', {
        id: '1',
        billingtype: this.someinput
      });
      this.$store.dispatch("setBilling");

    setTimeout(() => {
      this.storeNum = this.$store.getters.getbillingValue;

      console.log(this.storeNum)
    }, 1000)

      
    }
  },
  created()
  {
   
   
     
  },
  mounted()
  {
   
    
    // this.helloWorld();
    // this.$store.dispatch("setBillingValue");
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
