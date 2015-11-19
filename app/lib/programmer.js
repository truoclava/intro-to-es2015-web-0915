import Ember from 'ember';

class Programmer {
  constructor(name, language) {
    this.name = name;
    this.language = language || "Ruby";
  }
  evangelize() {
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}

export default Programmer;
export var bestLanguages = ["Ruby", "Elixir"];

export var addJavaScript = function(array){
  var obj = Ember.copy(array);
  obj.push("JavaScript");
  return obj;
};


