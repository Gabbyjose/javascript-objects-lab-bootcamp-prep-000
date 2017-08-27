var recipes = {
  flour: '2 cups'
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, recipes, {key: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, recipes, {key: value});
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}