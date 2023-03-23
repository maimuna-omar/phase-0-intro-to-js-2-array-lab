// Write your solution here!
const cats =['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name="Ralph") {
    cats.push(`${name}`);
  }
  
function destructivelyPrependCat(name="Bob") {
    cats.unshift(`${name}`);
  }

  function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  
  function removeFirstCat() {
    return cats.slice(1);
  }
  
  

  
  


  

  
