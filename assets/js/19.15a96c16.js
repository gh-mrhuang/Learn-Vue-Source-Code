(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),n("p",[s._v("到现在，模板编译的三大阶段就已经全部介绍完毕了，接下来本篇文章，就以宏观角度回顾并梳理一下模板编译整个流程是怎样的。")]),s._v(" "),n("p",[s._v("首先，我们需要搞清楚模板编译的最终目的是什么，它的最终目的就是：把用户所写的模板转化成供"),n("code",[s._v("Vue")]),s._v("实例在挂载时可调用的"),n("code",[s._v("render")]),s._v("函数。或者你可以这样简单的理解为：模板编译就是一台机器，给它输入模板字符串，它就输出对应的"),n("code",[s._v("render")]),s._v("函数。")]),s._v(" "),n("p",[s._v("我们把模板编译的最终目的只要牢记在心以后，那么模板编译中间的所有的变化都是在为达到这个目的而努力。")]),s._v(" "),n("p",[s._v("接下来我们就以宏观角度来梳理一下模板编译的整个流程。")]),s._v(" "),n("h2",{attrs:{id:"_2-整体流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-整体流程"}},[s._v("#")]),s._v(" 2. 整体流程")]),s._v(" "),n("p",[s._v("上文说了，模板编译就是把模板转化成供"),n("code",[s._v("Vue")]),s._v("实例在挂载时可调用的"),n("code",[s._v("render")]),s._v("函数。那么我们就从"),n("code",[s._v("Vue")]),s._v("实例挂载时入手，一步一步从后往前推。我们知道，"),n("code",[s._v("Vue")]),s._v("实例在挂载时会调用全局实例方法——"),n("code",[s._v("$mount")]),s._v("方法(关于该方法后面会详细介绍)。那么我们就先看一下"),n("code",[s._v("$mount")]),s._v("方法，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$mount")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果用户没有手写render函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取模板，先尝试获取内部模板，如果获取不到则获取外部模板")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" template "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("template\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             template "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOuterHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" staticRenderFns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            shouldDecodeNewlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            shouldDecodeNewlinesForHref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            delimiters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delimiters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            comments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comments\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" render\n        options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" staticRenderFns\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("从上述代码中可以看到，首先从"),n("code",[s._v("Vue")]),s._v("实例的属性选项中获取"),n("code",[s._v("render")]),s._v("选项，如果没有获取到，说明用户没有手写"),n("code",[s._v("render")]),s._v("函数，那么此时，就像上一篇文章中说的，需要"),n("code",[s._v("Vue")]),s._v("自己将模板转化成"),n("code",[s._v("render")]),s._v("函数。接着获取模板，先尝试获取内部模板，如果获取不到则获取外部模板。最后，调用"),n("code",[s._v("compileToFunctions")]),s._v("函数将模板转化成"),n("code",[s._v("render")]),s._v("函数，再将"),n("code",[s._v("render")]),s._v("函数赋值给"),n("code",[s._v("options.render")]),s._v("。")]),s._v(" "),n("p",[s._v("显然，上面代码中的核心部分是调用"),n("code",[s._v("compileToFunctions")]),s._v("函数生成"),n("code",[s._v("render")]),s._v("函数的部分，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" staticRenderFns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        shouldDecodeNewlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        shouldDecodeNewlinesForHref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        delimiters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delimiters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        comments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comments\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("将模板"),n("code",[s._v("template")]),s._v("传给"),n("code",[s._v("compileToFunctions")]),s._v("函数就可以得到"),n("code",[s._v("render")]),s._v("函数，那这个"),n("code",[s._v("compileToFunctions")]),s._v("函数是怎么来的呢？")]),s._v(" "),n("p",[s._v("我们通过代码跳转发现"),n("code",[s._v("compileToFunctions")]),s._v("函数的出处如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" compile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compileToFunctions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("我们发现，"),n("code",[s._v("compileToFunctions")]),s._v("函数是 "),n("code",[s._v("createCompiler")]),s._v(" 函数的返回值对象中的其中一个，"),n("code",[s._v("createCompiler")]),s._v(" 函数顾名思义他的作用就是创建一个编译器。那么我们再继续往前推，看看"),n("code",[s._v("createCompiler")]),s._v(" 函数又是从哪来的。")]),s._v(" "),n("p",[n("code",[s._v("createCompiler")]),s._v(" 函数出处位于源码的"),n("code",[s._v("src/complier/index.js")]),s._v("文件中，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" createCompiler "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompilerCreator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompilerOptions")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompiledResult "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 优化阶段：遍历AST，找出其中的静态节点，并打上标记；")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("optimize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码生成阶段：将AST转换成渲染函数；")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    staticRenderFns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("可以看到，"),n("code",[s._v("createCompiler")]),s._v("函数是又 调用"),n("code",[s._v("createCompilerCreator")]),s._v(" 函数返回得到的，"),n("code",[s._v("createCompilerCreator")]),s._v(" 函数接收一个"),n("code",[s._v("baseCompile")]),s._v("函数作为参数。我们仔细看这个"),n("code",[s._v("baseCompile")]),s._v("函数，这个函数就是我们所说的模板编译三大阶段的主函数。将这个函数传给"),n("code",[s._v("createCompilerCreator")]),s._v(" 函数就可以得到"),n("code",[s._v("createCompiler")]),s._v("函数，那么我们再往前推，看一下"),n("code",[s._v("createCompilerCreator")]),s._v(" 函数又是怎么定义的。")]),s._v(" "),n("p",[n("code",[s._v("createCompilerCreator")]),s._v(" 函数的定义位于源码的"),n("code",[s._v("src/complier/create-compiler.js")]),s._v("文件中，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompilerCreator")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseCompile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("可以看到，调用"),n("code",[s._v("createCompilerCreator")]),s._v(" 函数会返回"),n("code",[s._v("createCompiler")]),s._v("函数，同时我们也可以看到"),n("code",[s._v("createCompiler")]),s._v("函数的定义，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      compile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      compileToFunctions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompileToFunctionFn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("createCompiler")]),s._v("函数的内部定义了一个子函数"),n("code",[s._v("compile")]),s._v("，同时返回一个对象，其中这个对象的第二个属性就是我们在开头看到的"),n("code",[s._v("compileToFunctions")]),s._v("，其值对应的是"),n("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数的返回值，那么我们再往前推，看看"),n("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数又是怎么样的。")]),s._v(" "),n("p",[n("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数的出处位于源码的"),n("code",[s._v("src/complier/to-function.js")]),s._v("文件中，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompileToFunctionFn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compile")]),s._v("\n    \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFunction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fnGenErrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFunction")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" errors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" noop\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("可以看到，调用"),n("code",[s._v("createCompileToFunctionFn")]),s._v("函数就可以得到"),n("code",[s._v("compileToFunctions")]),s._v("函数了，终于推到头了，原来最开始调用"),n("code",[s._v("compileToFunctions")]),s._v("函数是在这里定义的，那么我们就来看一下"),n("code",[s._v("compileToFunctions")]),s._v("函数内部都干了些什么。")]),s._v(" "),n("p",[n("code",[s._v("compileToFunctions")]),s._v("函数内部会调用传入的"),n("code",[s._v("compile")]),s._v("函数，而这个"),n("code",[s._v("compile")]),s._v("函数是"),n("code",[s._v("createCompiler")]),s._v("函数内部定义的子函数，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("errors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" errors\n    compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tips "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tips\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" compiled\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("compile")]),s._v("函数内部又会调用传入的"),n("code",[s._v("baseCompile")]),s._v("函数，而这个"),n("code",[s._v("baseCompile")]),s._v("函数就是我们所说的模板编译三大阶段的主线函数，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompilerOptions")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompiledResult "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 优化阶段：遍历AST，找出其中的静态节点，并打上标记；")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("optimize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码生成阶段：将AST转换成渲染函数；")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    staticRenderFns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("那么现在就清晰了，最开始调用的"),n("code",[s._v("compileToFunctions")]),s._v("函数内部调用了"),n("code",[s._v("compile")]),s._v("函数，在"),n("code",[s._v("compile")]),s._v("函数内部又调用了"),n("code",[s._v("baseCompile")]),s._v("函数，而"),n("code",[s._v("baseCompile")]),s._v("函数返回的是代码生成阶段生成好的"),n("code",[s._v("render")]),s._v("函数字符串。所以在"),n("code",[s._v("compileToFunctions")]),s._v("函数内部调用"),n("code",[s._v("compile")]),s._v("函数就可以拿到生成好的"),n("code",[s._v("render")]),s._v("函数字符串，然后在"),n("code",[s._v("compileToFunctions")]),s._v("函数内部将"),n("code",[s._v("render")]),s._v("函数字符串传给"),n("code",[s._v("createFunction")]),s._v("函数从而变成真正的"),n("code",[s._v("render")]),s._v("函数返回出去，最后将其赋值给"),n("code",[s._v("options.render")]),s._v("。")]),s._v(" "),n("p",[s._v("以上，就是模板编译的整体流程。")])])}),[],!1,null,null,null);t.default=e.exports}}]);