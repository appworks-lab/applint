module.exports = {
  rules: {
    // 禁止使用 eval
    'no-eval': 'warn',

    // 禁止使用 Function 构造函数创建函数
    'no-new-func': 'warn',

    // 优先使用 . 访问对象的属性
    'dot-notation': ['error', {
      allowKeywords: true,
    }],

    // 对象中不使用重复的 key
    'no-dupe-keys': 'warn',

    // 在数组方法中必须在回调函数 callback 中包含 return 语句，保证任何情况下都有返回
    'array-callback-return': ['warn', {
      allowImplicit: true,
    }],

    // 禁止使用不必要的转义字符
    'no-useless-escape': 'warn',

    // 用括号包裹立即执行的函数标识(IIFE)
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 禁止使用重复的参数名称
    'no-dupe-args': 'warn',

    // case 或 default 字句出现词法声明时，必须用块包裹
    'no-case-declarations': 'warn',

    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 'warn',

    // 禁止使用 new Number/String/Boolean
    'no-new-wrappers': 'warn',

    // 使用 parseInt() 方法时总是带上基数
    radix: 'warn',
  }
}