(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[35],{245:function(e,s,n){"use strict";function r(e){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,(function(e,n){return"(?:"+s[+n]+")"}))}function n(e,n,r){return RegExp(s(e,n),r||"")}function r(e,s){for(var n=0;n<s;n++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",t="class enum interface struct",o="add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",i="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=c(t),l=RegExp(c(a+" "+t+" "+o+" "+i)),d=c(t+" "+o+" "+i),p=c(a+" "+t+" "+i),g=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=r(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,f=s(/<<0>>(?:\s*<<1>>)?/.source,[h,g]),m=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[d,f]),k=/\[\s*(?:,\s*)*\]/.source,y=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,b,k]),w=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[y]),v=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,m,k]),x={keyword:l,punctuation:/[<>()?,.:[\]]/},$=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,_=/"(?:\\.|[^\\"\r\n])*"/.source,B=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[B]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[_]),lookbehind:!0,greedy:!0},{pattern:RegExp($),greedy:!0,alias:"character"}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[m]),lookbehind:!0,inside:x},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,v]),lookbehind:!0,inside:x},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[u,f]),lookbehind:!0,inside:x},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[m]),lookbehind:!0,inside:x},{pattern:n(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:n(/(\b(?:is|as)\s+)<<0>>/.source,[v]),lookbehind:!0,inside:x},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+in))/.source,[v,p,h]),inside:x}],keyword:l,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:x},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[v,m]),inside:x,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[v]),lookbehind:!0,inside:x,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,g]),inside:{function:n(/^<<0>>/.source,[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:x}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,f,h,v,l.source]),lookbehind:!0,inside:{keyword:l,"class-name":{pattern:RegExp(v),greedy:!0,inside:x},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=_+"|"+$,R=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*[\s\S]*?\*\/|<<0>>/.source,[E]),S=r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[R]),2),z=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,j=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[m,S]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[z,j]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[z]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[S]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=/:[^}\r\n]+/.source,J=r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[R]),2),F=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[J,A]),N=r(s(/[^"'/()]|\/(?!\*)|\/\*.*?\*\/|<<0>>|\(<<self>>*\)/.source,[E]),2),U=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[N,A]);function Z(s,r){return{interpolation:{pattern:n(/([^{](?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[r,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[F]),lookbehind:!0,greedy:!0,inside:Z(F,J)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[U]),lookbehind:!0,greedy:!0,inside:Z(U,N)}]})}(e),e.languages.dotnet=e.languages.cs=e.languages.csharp}e.exports=r,r.displayName="csharp",r.aliases=["dotnet","cs"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_csharp.e1950c7b.chunk.js.map