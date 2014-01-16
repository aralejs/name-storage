// nameStorage
//
// 利用 window.name 实现跨页面跨域的数据传输。
this.nameStorage || function(win) {
    var SCHEME = "nameStorage:";
    //var RE_NAMES = /^nameStorage:([^?]*)(?:\?(?:([^=]+)=([^&]*))*)?/g;
    var RE_PAIR = /^([^=]+)(?:=(.*))?$/;
    var Q = "?";
    var EQ = "=";
    var AND = "&";
    var encode = encodeURIComponent;
    var decode = decodeURIComponent;
    var STORAGE = {};
    var ORIGIN_NAME;
    var nameStorage = {};
    // 解析并初始化 name 数据。
    // 标准的 nameStorage 数据格式为 `nameStorage:origin-name?key=value`
    // @param {String} name.
    (function parse(name) {
        if (name && name.indexOf(SCHEME) === 0) {
            var match = name.split(/[:?]/);
            match.shift();
            // scheme: match[0];
            ORIGIN_NAME = decode(match.shift()) || "";
            // match[1]
            var params = match.join("");
            // match[2,...]
            var pairs = params.split(AND);
            for (var i = 0, pair, key, value, l = pairs.length; i < l; i++) {
                pair = pairs[i].match(RE_PAIR);
                if (!pair || !pair[1]) {
                    continue;
                }
                key = decode(pair[1]);
                value = decode(pair[2]) || "";
                STORAGE[key] = value;
            }
        } else {
            ORIGIN_NAME = name || "";
        }
    })(win.name);
    // 写入数据。
    // @param {String} key, 键名。
    // @param {String} value, 键值。
    nameStorage.setItem = function(key, value) {
        if (!key || "undefined" === typeof value) {
            return;
        }
        STORAGE[key] = String(value);
        save();
    };
    // 读取数据。
    // @param {String} key, 键名。
    // @return {String} 键值。如果不存在，则返回 `null`。
    nameStorage.getItem = function(key) {
        return STORAGE.hasOwnProperty(key) ? STORAGE[key] : null;
    };
    // 移除数据。
    // @param {String} key, 键名。
    nameStorage.removeItem = function(key) {
        if (!STORAGE.hasOwnProperty(key)) {
            return;
        }
        STORAGE[key] = null;
        delete STORAGE[key];
        save();
    };
    // 清空 nameStorage。
    nameStorage.clear = function() {
        STORAGE = {};
        save();
    };
    nameStorage.valueOf = function() {
        return STORAGE;
    };
    nameStorage.toString = function() {
        var name = win.name;
        return name.indexOf(SCHEME) === 0 ? name : SCHEME + name;
    };
    // 保存数据到 window.name
    // 如果没有存储数据，则恢复原始窗口名称(window.name)。
    function save() {
        var pairs = [];
        var empty = true;
        var value;
        for (var key in STORAGE) {
            if (!STORAGE.hasOwnProperty(key)) {
                continue;
            }
            empty = false;
            value = STORAGE[key] || "";
            pairs.push(encode(key) + EQ + encode(value));
        }
        win.name = empty ? ORIGIN_NAME : SCHEME + encode(ORIGIN_NAME) + Q + pairs.join(AND);
    }
    win.nameStorage = nameStorage;
    // 兼容 XMD
    if ("function" === typeof define) {
        define("arale/name-storage/1.0.0/name-storage-debug", [], function(require, exports, module) {
            module.exports = nameStorage;
        });
    }
}(this);
