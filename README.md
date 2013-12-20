# nameStorage

---

使用 window.name 存储数据。

数据作用域为窗口级会话，同一个窗口。
类似 sessionStorage，但是可以跨域。

---

## 使用说明

```js
var key = "key";
var value = "value";

nameStorage.setItem(key, value);

nameStorage.getItem(key);

nameStorage.removeItem(key);
```


## API

### setItem(String key, String value)

写入数据到 nameStorage。

### getItem(String key)

读取 nameStorage 存储的指定键值数据。

### removeItem(String key)

删除 nameStorage 存储的指定键值数据。

### clear()

清空 nameStorage 存储的数据。

### valueOf()

读取 nameStorage 存储的所有数据。
