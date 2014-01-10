# nameStorage

---

nameStorage 是类似 sessionStroage 的键值对数据存储工具，但是可以跨域。

nameStorage 适用于同一窗口内跨页面数据存储与传递。

技术上，nameStorage 使用 window.name 存储数据。
数据的生存周期为窗口会话的生存周期，同一个窗口可以通过 nameStorage 共享数据。

## 出生证明

`window.name` 非常有用，但不可滥用。
为了规范、简单便利、安全的使用 `window.name`，制造了这个模块。

更多请参考 `window.name` 使用规范。

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

### toString()

返回 nameStorage 存储的数据的字符串形式。

```
    scheme                  nameStorage datas
      |                            |
------------           ------------------------
nameStorage:origin-name?key1=value1&key2=value2
            -----------
                 |
         window origin name
```

## window.name 使用规范

1. 不要直接操作 `window.name`。
1. 几乎所有的 `window.name` 操作，均应使用 nameStorage 提供的接口完成。
1. 使用 nameStorage 传输完数据后，尽量在恰当的时机使用 `removeItem()` 清理对应数据。
1. 主意：为了避免误清理其他人的数据，尽量使用 `removeItem()` 清理指定数据，
    而不是 `clear()` 清空所有数据。

## window.name maxlength

window.name 没有固定的长度限制，只受内存大小限制。

## 参考

* [Improve cross-domain communication with client-side solutions](http://www.ibm.com/developerworks/library/wa-crossdomaincomm/)
* [HTML5 sessionStorage for "every" browsers](https://code.google.com/p/sessionstorage/)

## LICENSES

MIT
