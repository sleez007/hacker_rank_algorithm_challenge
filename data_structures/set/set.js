function Set(){
    this.datastore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data){
    if(this.datastore.indexOf(data) < 0){
        this.datastore.push(data);
        return true;
    }else{
        return false;
    }
}

function remove(data){
    const pos = this.datastore.indexOf(data);
    if(pos > -1){
        this.datastore.splice(pos, 1);
        return true;
    }else{
        return false;
    }
}

function show(){
    return this.datastore;
}

function contains(data){
    if(this.datastore.indexOf(data) > -1){
        return true;
    }else{
        return false;
    }
}

function union(set){
    let tempSet = new Set();
    for(let i = 0; i < this.datastore.length; ++i){
        tempSet.add(this.datastore[i])
    }

    for(var i =0; i < set.datastore.length; ++i){
        if(!tempSet.contains(set.datastore[i])){
            tempSet.datastore.push(set.datastore[i])
        }
    }

    return tempSet;
}

function intersect(set){
    let tempSet = new Set();
    for(let i = 0; i < this.datastore.length; ++i){
        if(set.contains(this.datastore[i])){
            tempSet.add(this.datastore[i]);
        }
    }

    return tempSet;
}

function subset(set){
    if(this.size() > set.size()){
        return false;
    }

    for(let i = 0; i < this.datastore.length; ++i) {
        const member = this.datastore[i];
        if (!set.contains(member)) { 
            return false;
        } 
    }

    return true;
}

function size(){
    return this.datastore.length;
}

function difference(set){
    let tempSet = new Set();
    for(let i = 0; i < this.datastore.length; ++i){
        if(!set.contains(this.datastore[i])){
            tempSet.add(this.datastore[i]);
        }
    }

    return tempSet;
}






// var cis = new Set(); 
// cis.add("Mike"); 
// cis.add("Clayton"); 
// cis.add("Jennifer"); 
// cis.add("Raymond"); 
// var dmp = new Set(); 
// dmp.add("Raymond"); 
// dmp.add("Cynthia"); 
// dmp.add("Bryan");
// var inter = cis.union(dmp); 
// console.log(inter.show()); // displays Raymond



// var it = new Set();
// it.add("Cynthia"); 
// it.add("Clayton"); 
// it.add("Jennifer"); 
// it.add("Danny"); 
// it.add("Jonathan"); 
// it.add("Terrill"); 
// it.add("Raymond"); 
// it.add("Mike");
// var dmp = new Set();
//  dmp.add("Cynthia"); 
//  dmp.add("Raymond");
//   dmp.add("Jonathan"); 
//   if (dmp.subset(it)) {
//     console.log("DMP is a subset of IT.");
//  }
//  else {
//  console.log("DMP is not a subset of IT.");
//  }


var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show()
      + "] -> [" + diff.show() + "]");