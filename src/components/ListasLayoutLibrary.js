/* eslint-disable no-unused-expressions */

function _interopDefault(ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
require('react-is');
var antd = require('antd');
var sapal_component_library = require('./ListasComponentLibrary.js');

var IconContext = /*#__PURE__*/React.createContext({});

function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally {
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
                if (o) throw n;
            }
        }
        return a;
    }
}

function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
}

function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}

function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
        r,
        i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
    /*!
        Copyright (c) 2018 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

        var hasOwn = {}.hasOwnProperty;

        function classNames() {
            var classes = '';

            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg) {
                    classes = appendClass(classes, parseValue(arg));
                }
            }

            return classes;
        }

        function parseValue(arg) {
            if (typeof arg === 'string' || typeof arg === 'number') {
                return arg;
            }

            if (typeof arg !== 'object') {
                return '';
            }

            if (Array.isArray(arg)) {
                return classNames.apply(null, arg);
            }

            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                return arg.toString();
            }

            var classes = '';

            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes = appendClass(classes, key);
                }
            }

            return classes;
        }

        function appendClass(value, newClass) {
            if (!newClass) {
                return value;
            }

            if (value) {
                return value + ' ' + newClass;
            }

            return value + newClass;
        }

        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        } else {
            window.classNames = classNames;
        }
    }());
});

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [{
    index: 7,
    opacity: 0.15
}, {
    index: 6,
    opacity: 0.25
}, {
    index: 5,
    opacity: 0.3
}, {
    index: 5,
    opacity: 0.45
}, {
    index: 5,
    opacity: 0.65
}, {
    index: 5,
    opacity: 0.85
}, {
    index: 4,
    opacity: 0.9
}, {
    index: 3,
    opacity: 0.95
}, {
    index: 2,
    opacity: 0.97
}, {
    index: 1,
    opacity: 0.98
}];
// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b;
    var hsv = rgbToHsv(r, g, b);
    return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
    };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b;
    return "#".concat(rgbToHex(r, g, b, false));
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
}
function getHue(hsv, i, light) {
    var hue;
    // 根据色相不同，色相转向不同
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}
function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    var saturation;
    if (light) {
        saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
    } else {
        saturation = hsv.s + saturationStep2 * i;
    }
    // 边界值修正
    if (saturation > 1) {
        saturation = 1;
    }
    // 第一格的 s 限制在 0.06-0.1 之间
    if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
    }
    if (saturation < 0.06) {
        saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
    var value;
    if (light) {
        value = hsv.v + brightnessStep1 * i;
    } else {
        value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
        value = 1;
    }
    return Number(value.toFixed(2));
}
function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
        var hsv = toHsv(pColor);
        var colorString = toHex(inputToRGB({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true)
        }));
        patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
        var _hsv = toHsv(pColor);
        var _colorString = toHex(inputToRGB({
            h: getHue(_hsv, _i),
            s: getSaturation(_hsv, _i),
            v: getValue(_hsv, _i)
        }));
        patterns.push(_colorString);
    }

    // dark theme patterns
    if (opts.theme === 'dark') {
        return darkColorMap.map(function (_ref3) {
            var index = _ref3.index,
                opacity = _ref3.opacity;
            var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
            return darkColorString;
        });
    }
    return patterns;
}

var presetPrimaryColors = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];

    // dark presetPalettes
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
        theme: 'dark',
        backgroundColor: '#141414'
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var blue = presetPalettes.blue;

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}

function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root, n) {
    if (!root) {
        return false;
    }

    // Use native if support
    if (root.contains) {
        return root.contains(n);
    }

    // `document.contains` not support with IE11
    var node = n;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        mark = _ref.mark;
    if (mark) {
        return mark.startsWith('data-') ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) {
        return option.attachTo;
    }
    var head = document.querySelector('head');
    return head || document.body;
}
function getOrder(prepend) {
    if (prepend === 'queue') {
        return 'prependQueue';
    }
    return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function (node) {
        return node.tagName === 'STYLE';
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!canUseDom()) {
        return null;
    }
    var csp = option.csp,
        prepend = option.prepend,
        _option$priority = option.priority,
        priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === 'prependQueue';
    var styleNode = document.createElement('style');
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        // If is queue `prepend`, it will prepend first style and then append rest style
        if (isPrependQueue) {
            var existStyle = (option.styles || findStyles(container)).filter(function (node) {
                // Ignore style which not injected by rc-util with prepend
                if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
                    return false;
                }

                // Ignore style which priority less then new style
                var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
                return priority >= nodePriority;
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }

        // Use `insertBefore` as `prepend`
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function (node) {
        return node.getAttribute(getMark(option)) === key;
    });
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);

    // Find real container when not cached or cached container removed
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS('', option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
        styles: styles
    });

    // Sync real parent
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
            existNode.innerHTML = css;
        }
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}

function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}

/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
    preWarningFns.push(fn);
};

/**
 * Warning if condition not match.
 * @param valid Condition
 * @param message Warning message
 * @example
 * ```js
 * warning(false, 'some error'); // print some error
 * warning(true, 'some error'); // print nothing
 * warning(1 === 2, 'some error'); // print some error
 * ```
 */
function warning(valid, message) {
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
        }, message);
        if (finalMessage) {
            console.error("Warning: ".concat(finalMessage));
        }
    }
}

/** @see Similar to {@link warning} */
function note(valid, message) {
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
        }, message);
        if (finalMessage) {
            console.warn("Note: ".concat(finalMessage));
        }
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}

/** @see Same as {@link warning}, but only warn once for the same message */
function warningOnce(valid, message) {
    call(warning, valid, message);
}

/** @see Same as {@link warning}, but only warn once for the same message */
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;

function camelCase(input) {
    return input.replace(/-(.)/g, function (match, g) {
        return g.toUpperCase();
    });
}
function warning$1(valid, message) {
    warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function (acc, key) {
        var val = attrs[key];
        switch (key) {
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate$1(node, key, rootProps) {
    if (!rootProps) {
        return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
            return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2(_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
        return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
    var _useContext = React.useContext(IconContext),
        csp = _useContext.csp,
        prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    React.useEffect(function () {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, '@ant-design-icons', {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};

var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor,
        secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
    var icon = props.icon,
        className = props.className,
        onClick = props.onClick,
        style = props.style,
        primaryColor = props.primaryColor,
        secondaryColor = props.secondaryColor,
        restProps = _objectWithoutProperties(props, _excluded);
    var svgRef = React.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
    }
    useInsertStyles(svgRef);
    warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === 'function') {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return generate$1(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = IconBase.getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// Initial setting
// should move it to antd main repo?
setTwoToneColor(blue.primary);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var className = props.className,
        icon = props.icon,
        spin = props.spin,
        rotate = props.rotate,
        tabIndex = props.tabIndex,
        onClick = props.onClick,
        twoToneColor = props.twoToneColor,
        restProps = _objectWithoutProperties(props, _excluded$1);
    var _React$useContext = React.useContext(IconContext),
        _React$useContext$pre = _React$useContext.prefixCls,
        prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
        rootClassName = _React$useContext.rootClassName;
    var classString = classnames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/React.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/React.createElement(IconBase, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };

var LogoutOutlined$1 = function LogoutOutlined$1(props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
        ref: ref,
        icon: LogoutOutlined
    }));
};

/**![logout](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg2OCA3MzJoLTcwLjNjLTQuOCAwLTkuMyAyLjEtMTIuMyA1LjgtNyA4LjUtMTQuNSAxNi43LTIyLjQgMjQuNWEzNTMuODQgMzUzLjg0IDAgMDEtMTEyLjcgNzUuOUEzNTIuOCAzNTIuOCAwIDAxNTEyLjQgODY2Yy00Ny45IDAtOTQuMy05LjQtMTM3LjktMjcuOGEzNTMuODQgMzUzLjg0IDAgMDEtMTEyLjctNzUuOSAzNTMuMjggMzUzLjI4IDAgMDEtNzYtMTEyLjVDMTY3LjMgNjA2LjIgMTU4IDU1OS45IDE1OCA1MTJzOS40LTk0LjIgMjcuOC0xMzcuOGMxNy44LTQyLjEgNDMuNC04MCA3Ni0xMTIuNXM3MC41LTU4LjEgMTEyLjctNzUuOWM0My42LTE4LjQgOTAtMjcuOCAxMzcuOS0yNy44IDQ3LjkgMCA5NC4zIDkuMyAxMzcuOSAyNy44IDQyLjIgMTcuOCA4MC4xIDQzLjQgMTEyLjcgNzUuOSA3LjkgNy45IDE1LjMgMTYuMSAyMi40IDI0LjUgMyAzLjcgNy42IDUuOCAxMi4zIDUuOEg4NjhjNi4zIDAgMTAuMi03IDYuNy0xMi4zQzc5OCAxNjAuNSA2NjMuOCA4MS42IDUxMS4zIDgyIDI3MS43IDgyLjYgNzkuNiAyNzcuMSA4MiA1MTYuNCA4NC40IDc1MS45IDI3Ni4yIDk0MiA1MTIuNCA5NDJjMTUyLjEgMCAyODUuNy03OC44IDM2Mi4zLTE5Ny43IDMuNC01LjMtLjQtMTIuMy02LjctMTIuM3ptODguOS0yMjYuM0w4MTUgMzkzLjdjLTUuMy00LjItMTMtLjQtMTMgNi4zdjc2SDQ4OGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGgzMTR2NzZjMCA2LjcgNy44IDEwLjUgMTMgNi4zbDE0MS45LTExMmE4IDggMCAwMDAtMTIuNnoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/React.forwardRef(LogoutOutlined$1);
if (process.env.NODE_ENV !== 'production') {
    RefIcon.displayName = 'LogoutOutlined';
}

// This icon file is generated automatically.
var MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };

var MenuFoldOutlined$1 = function MenuFoldOutlined$1(props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
        ref: ref,
        icon: MenuFoldOutlined
    }));
};

/**![menu-fold](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwOCA0NDJoNDgwYzQuNCAwIDgtMy42IDgtOHYtNTZjMC00LjQtMy42LTgtOC04SDQwOGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOHptLTggMjA0YzAgNC40IDMuNiA4IDggOGg0ODBjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThINDA4Yy00LjQgMC04IDMuNi04IDh2NTZ6bTUwNC00ODZIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHptMCA2MzJIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHpNMTE1LjQgNTE4LjlMMjcxLjcgNjQyYzUuOCA0LjYgMTQuNC41IDE0LjQtNi45VjM4OC45YzAtNy40LTguNS0xMS41LTE0LjQtNi45TDExNS40IDUwNS4xYTguNzQgOC43NCAwIDAwMCAxMy44eiIgLz48L3N2Zz4=) */
var RefIcon$1 = /*#__PURE__*/React.forwardRef(MenuFoldOutlined$1);
if (process.env.NODE_ENV !== 'production') {
    RefIcon$1.displayName = 'MenuFoldOutlined';
}

// This icon file is generated automatically.
var MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };

var MenuUnfoldOutlined$1 = function MenuUnfoldOutlined$1(props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
        ref: ref,
        icon: MenuUnfoldOutlined
    }));
};

/**![menu-unfold](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwOCA0NDJoNDgwYzQuNCAwIDgtMy42IDgtOHYtNTZjMC00LjQtMy42LTgtOC04SDQwOGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOHptLTggMjA0YzAgNC40IDMuNiA4IDggOGg0ODBjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThINDA4Yy00LjQgMC04IDMuNi04IDh2NTZ6bTUwNC00ODZIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHptMCA2MzJIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHpNMTQyLjQgNjQyLjFMMjk4LjcgNTE5YTguODQgOC44NCAwIDAwMC0xMy45TDE0Mi40IDM4MS45Yy01LjgtNC42LTE0LjQtLjUtMTQuNCA2Ljl2MjQ2LjNhOC45IDguOSAwIDAwMTQuNCA3eiIgLz48L3N2Zz4=) */
var RefIcon$2 = /*#__PURE__*/React.forwardRef(MenuUnfoldOutlined$1);
if (process.env.NODE_ENV !== 'production') {
    RefIcon$2.displayName = 'MenuUnfoldOutlined';
}

function FIltrarMenuPorClaims(pItemsMenu, claims) {
    var oItemsMenuFiltrado = pItemsMenu.filter(function (item) {
        return item.lstClaim.some(function (claim) {
            return claims.includes(claim);
        }) || item.lstClaim.includes("no_need_claim");
    });
    return oItemsMenuFiltrado;
}
function FEncontrarClaimsEnLista(pListaElementos) {
    var claimsSet = new Set();
    pListaElementos.forEach(function (item) {
        item.lstClaim.forEach(function (claim) {
            claimsSet.add(claim);
        });
    });
    return Array.from(claimsSet);
}
var SplPrincipalLayoutR = function SplPrincipalLayoutR(_ref) {
    var _pApp$oItemsMenu$0$oB;
    var pApp = _ref.pApp,
        pClToken = _ref.pClToken;
    var Header = antd.Layout.Header,
        Sider = antd.Layout.Sider,
        Content = antd.Layout.Content;
    var navigate = reactRouterDom.useNavigate();
    var lstClaimsMenu = FEncontrarClaimsEnLista(pApp.oItemsMenu);
    // var vLstClaimsPermitidos = window.FIsKeyIncludedInJwt(pClToken, lstClaimsMenu);
    // pApp.oItemsMenu = FIltrarMenuPorClaims(pApp.oItemsMenu, vLstClaimsPermitidos);
    var vOItemsMenu = pApp.oItemsMenu.map(function (item, index) {
        var _div;
        return {
            key: item.target,
            icon: (_div = /*#__PURE__*/React__default.createElement("div", {
                style: {
                    height: '100%'
                }
            }, "  ", item.icon, " ")) != null ? _div : null,
            label: item.label
        };
    }).concat([{
        key: '/Logout',
        icon: /*#__PURE__*/React__default.createElement(RefIcon, null),
        label: 'Cerrar sesión'
    }]);
    var _useState = React.useState(false),
        collapsed = _useState[0],
        setCollapsed = _useState[1];
    var _useState2 = React.useState(pApp.oImgLogoMenuExpandido),
        oImgLogo = _useState2[0],
        setImgLogo = _useState2[1];
    var cBreadCrumbVacio = [{
        title: '/',
        url: ''
    }];
    var _useState3 = React.useState(pApp.oItemsMenu.length > 0 ? (_pApp$oItemsMenu$0$oB = pApp.oItemsMenu[0].oBreadCrumbItems) != null ? _pApp$oItemsMenu$0$oB : cBreadCrumbVacio : cBreadCrumbVacio),
        oItemsBreadCrumb = _useState3[0],
        setItemsBreadCrumb = _useState3[1];
    var _theme$useToken = antd.theme.useToken(),
        _theme$useToken$token = _theme$useToken.token,
        colorBgContainer = _theme$useToken$token.colorBgContainer,
        borderRadiusLG = _theme$useToken$token.borderRadiusLG;
    var _useState4 = React.useState(false),
        fgMostrarModalCerrarSesion = _useState4[0],
        setOpenModalCerrarSesion = _useState4[1];
    var _useState5 = React.useState(false),
        FgConfirmLoading = _useState5[0],
        setConfirmLoading = _useState5[1];
    var FCerrarSesion = function FCerrarSesion() {
        setOpenModalCerrarSesion(true);
    };
    var FConfirmarCerraSesion = function FConfirmarCerraSesion() {
        setConfirmLoading(true);
        window.fDestruirSesion();
        setConfirmLoading(false);
    };
    var FCancelCerrarSesion = function FCancelCerrarSesion() {
        setOpenModalCerrarSesion(false);
    };
    return /*#__PURE__*/React__default.createElement(antd.Layout, {
        style: {
            height: '100%'
        }
    }, /*#__PURE__*/React__default.createElement(Sider, {
        style: {
            width: "auto"
        },
        trigger: null,
        collapsible: true,
        collapsed: collapsed
    }, /*#__PURE__*/React__default.createElement(Header, {
        style: {
            padding: 0,
            background: '#006BA3',
            color: '#FFFF'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Row, {
        style: {
            height: '100%'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
        style: {
            backgroundColor: '#ffff',
            alignItems: 'center',
            height: '100%',
            transition: 'all 0.3s ease'
        }
    }, /*#__PURE__*/React__default.createElement("div", {
        style: {
            height: '100%'
        },
        className: "icon-container " + (collapsed ? 'collapsed' : 'expanded')
    }, /*#__PURE__*/React__default.createElement(sapal_component_library.SplIcono, {
        pImagen: oImgLogo
    }))))), /*#__PURE__*/React__default.createElement(antd.Menu, {
        onClick: function onClick(_ref2) {
            var key = _ref2.key;
            if (key === "/Logout") {
                FCerrarSesion();
            } else {
                navigate(key);
                var vItem = pApp.oItemsMenu.find(function (menuItem) {
                    return menuItem.target === key;
                });
                var vItemBreadCrumb = vItem ? vItem.oBreadCrumbItems : "";
                setItemsBreadCrumb(vItemBreadCrumb);
            }
        },
        style: {
            height: '100%',
            width: '100%'
        },
        theme: "light",
        mode: "inline",
        defaultSelectedKeys: ['1'],
        items: vOItemsMenu
    })), /*#__PURE__*/React__default.createElement(antd.Layout, null, /*#__PURE__*/React__default.createElement(Header, {
        style: {
            padding: 0,
            background: '#006BA3',
            color: '#FFFF',
            paddingLeft: '5px'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Row, {
        style: {
            width: '100%'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
        style: {
            width: '5hv',
            alignContent: 'start'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "text",
        icon: collapsed ? /*#__PURE__*/React__default.createElement(RefIcon$2, null) : /*#__PURE__*/React__default.createElement(RefIcon$1, null),
        onClick: function onClick() {
            setCollapsed(!collapsed);
            if (collapsed) setImgLogo(pApp.oImgLogoMenuExpandido); else setImgLogo(pApp.oImgLogoMenuColapsado);
        },
        style: {
            fontSize: '16px',
            width: 64,
            height: 64,
            color: '#ffff'
        }
    })), /*#__PURE__*/React__default.createElement(antd.Col, {
        style: {
            width: '95%'
        }
    }, /*#__PURE__*/React__default.createElement(sapal_component_library.SplBanner, {
        style: {
            width: '100%'
        },
        pNombreSitema: pApp.nbApp,
        pDatosSesion: pApp.oSesionUsuario
    }))), /*#__PURE__*/React__default.createElement(antd.Row, null, /*#__PURE__*/React__default.createElement(antd.Col, {
        style: {
            marginLeft: '10px'
        }
    }, /*#__PURE__*/React__default.createElement(sapal_component_library.SplBreadCrumb, {
        pBreadCrumbItems: oItemsBreadCrumb
    })))), /*#__PURE__*/React__default.createElement(Content, {
        style: {
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
        }
    }, /*#__PURE__*/React__default.createElement(Contentido, null))), /*#__PURE__*/React__default.createElement(antd.Modal, {
        title: "Cerrar sesi\xF3n",
        open: fgMostrarModalCerrarSesion,
        onOk: FConfirmarCerraSesion,
        confirmLoading: FgConfirmLoading,
        onCancel: FCancelCerrarSesion
    }, /*#__PURE__*/React__default.createElement("p", null, "\xBFSeguro que deseas cerrar sesi\xF3n?")));
    function Contentido() {
        return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactRouterDom.Routes, null, pApp.oItemsMenu.map(function (route, index) {
            return /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
                key: index,
                path: route.target,
                element: route.oContent
            });
        })));
    }
};

var SplPrincipalLayout = function SplPrincipalLayout(_ref) {
    var pApp = _ref.pApp,
        pClToken = _ref.pClToken;
    return /*#__PURE__*/React__default.createElement(SplPrincipalLayoutR, {
        pApp: pApp,
        pClToken: pClToken
    });
};

exports.SplPrincipalLayout = SplPrincipalLayout;
//# sourceMappingURL=index.js.map
