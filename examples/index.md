# 演示文档

---

````javascript
seajs.use('name-storage', function(nameStorage){

  var key = "key";
  var val = "value";

  nameStorage.setItem(key, val);
  nameStorage.getItem(key);
  nameStorage.removeItem(key);
  nameStorage.clear();

});
````
