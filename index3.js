// Part 3: Thinking Critically

function makeOlder(obj) {
  if (!obj.age) {
    obj.age = 0;
  }

  obj.age += 1;
  obj.updated_at = new Date().toUTCString();
}

function makeCopyOlder(obj) {
  let stringifiedObj = JSON.stringify(obj);
  let copiedObj = JSON.parse(stringifiedObj);

  if (!copiedObj.age) {
    copiedObj.age = 0;
  }

  copiedObj.age += 1;
  copiedObj.updated_at = new Date().toUTCString();

  return copiedObj;
}

boy = {
  name: "Gary",
};

girl = {
  name: "Mindy",
  age: 7,
};

console.log(boy);
makeOlder(boy);
let newBoy = makeCopyOlder(boy);
console.log(boy);
console.log(newBoy);

console.log(girl);
makeOlder(girl);
let newGirl = makeCopyOlder(girl);
console.log(girl);
console.log(newGirl);
