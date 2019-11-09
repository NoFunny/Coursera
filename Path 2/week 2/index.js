 module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.value;
};

Collection.prototype.append = function () {
 if (!(arguments.length === 0)){
   for (var i = 0; i < arguments.length; i++) {
     if (Array.isArray(arguments[i])){
       this.value = this.value.concat(arguments[i]);
     } else if (arguments[i] instanceof Collection) {
       this.value = this.value.concat(Collection.prototype.values.call(arguments[i]));
     } else this.value.push(arguments[i]);
   }
 }
};

Collection.prototype.count = function () {
  if(this.value.length > 0) {
    return this.value.length;
  }else{
    return 0;
  }
};

Collection.prototype.at = function (element) {
  if(element <= 0 || typeof element !== 'number' || element > this.value.length) {
    return null;
  }else{
    return this.value[element - 1];
  }
};

Collection.prototype.removeAt = function (element) {
  if(element <= 0 || typeof element !== 'number' || element > this.value.length) {
    return false;
  }else {
    this.value.splice(element - 1, 1);
    return true;
  }
};

// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (array) {
    var collection = new Collection;

    if(array[0] instanceof Collection) {
      collection.value = collection.value.concat(Collection.prototype.values.call(array));
    }
    if((Array.isArray(array[0])) && (array.length === 1) ) {
      collection.value = collection.value.concat(array[0]);
    }
    if(array.length > 1) {
      for(var i = 0; i < array.length; i++) {
        collection.value = collection.value.concat(array[i]);
      }
    }
    return collection;
};
