
# window.name 使用规范

----

window.name 可以作为窗口级作用域的数据存储与传输工具，相比 sessionStroage
而言，多了风险性但也多了跨域支持。

nameStorage 是类似 sessionStroage 的键值对数据存储工具。

规范如下：

1. 不要直接操作 `window.name`。
1. 几乎所有的 `window.name` 操作，均应使用 nameStorage 提供的接口完成。
1. 使用 nameStorage 传输完数据后，尽量在恰当的时机使用 `removeItem()` 清理对应数据。
1. 主意：为了避免误清理其他人的数据，尽量使用 `removeItem()` 清理指定数据，
    而不是 `clear()` 清空所有数据。
