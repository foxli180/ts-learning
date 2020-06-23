function hello(thing) {
  console.log(this + ' says hello ' + thing);
}
hello.call('Fox', 'World');

hello('Test');

const person = {
  name: 'Brendan Eich',
  hello: function(thing) {
    console.log(this.name + ' says hello ' + thing);
  },
};

const boundHello = function(thing) {
  return person.hello.call(person, thing);
};

boundHello('world');
