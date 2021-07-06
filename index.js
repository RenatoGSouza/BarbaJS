
barba.hooks.leave(data => {
  console.log('This is a global hook!');
});

function transitionFuc(helo, obj) {
  console.log(helo);
  obj.subFunction();
}

barba.use(barbaCss);

barba.init({
  requestError: (trigger, action, url, response) => {
    if(response.status == 404)
      barba.go('./NotFound.html');
    return false;
  },
  views: [{
    namespace: 'dino1',
    beforeLeave() {
      console.log('beforeLeave dino1');
    }
  },
  {
    namespace: 'dino3',
    afterEnter() {
      console.log('afterEnter dino3');
    }
  }
],
  transitions:[
    {
      name: 'Amazing transition',
      from: {
        namespace:['dino3']
      },
      enter(data) {
        console.log('amzing Transition has benn applied!');
      }
    },
    {
      name: 'Gorgeous transition',
      from: {
        namespace: ['dino1']
       },
       to: {
         namespace: ['dino2']
       }, 
       enter(data) {
        console.log('Gorgeous transition has been applied!');
       }
    },
    {
      name: 'Beautiful transition'
    },
  ]
})