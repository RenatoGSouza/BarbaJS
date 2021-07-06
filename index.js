
barba.use(barbaCss);

barba.init({
  transitions: [{
    enter() {
      //This code will not be executed
      console.log("Hello, I'm the enter hook!");
    },
    afterEnter() {
     //This code will be executed
     console.log("Hello, I'm the beforeEnter hook!");
    }
}]
});