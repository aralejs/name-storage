# nameStorage

---

nameStorage 是类似 sessionStroage 的键值对数据存储工具，但是可以跨域。

技术上，nameStorage 使用 window.name 存储数据。
数据的生存周期为窗口会话的生存周期，同一个窗口可以通过 nameStorage 共享数据。

## 出生证明

`window.name` 非常有用，`window.name` 不可滥用。
为了规范、简单便利的使用 `window.name`，制造了这个模块。

更多请参考 [`window.name` 使用规范](docs/window.name-spec.md)。

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
