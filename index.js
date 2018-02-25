

// accepts a selector and returns the first element that matches.
// don't forget to return the answer!

function getFirstSelector(selector){
  return document.querySelector(selector);
}

//pulls a .target out of #nested (# -IDs)

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}



//increases the ranks in all of the .ranked-lists by n.
//You might need to make use of parseInt()

function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = (parseInt(lis[i].innerHTML)+ n)
  }
}


//that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!) LOOK AT HINTS!!

function deepestChild() {
  let firstLev = document.getElementById('grand-node')
    return firstLev.querySelectorAll('div')[3]
}

// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]
//
//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
//
//   console.log(node.innerHTML)
// }
