/**Persistent group excercise from: https://eloquentjavascript.net/07_robot.html  */

class PGroup {
    constructor(members) {
      this.members = members;
    }
  
    add(value) {
        if (this.has(value)) return this;
        else return new PGroup(this.members.concat([value]));
      }
  
      delete(value) {
        if (!this.has(value)) return this;
        else return new PGroup(this.members.filter(m => m !== value));
      }
  
    has(value) {
      return this.members.includes(value);
    }
  

  }

  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false