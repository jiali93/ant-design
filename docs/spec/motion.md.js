webpackJsonp([14,366],{861:function(e,t,d){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=d(1),a=o(i),n=d(2),c=o(n);e.exports={content:["article",["p","\u4f9d\u636e\u300e\u5de7\u7528\u8fc7\u6e21\u300f\u7684\u8bbe\u8ba1\u539f\u5219\uff0cAnt Design \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9884\u8bbe\u7684\u7ec4\u4ef6\u52a8\u753b\u548c\u7f13\u52a8\u51fd\u6570\u3002"],["blockquote",["p","\u793a\u4f8b\u5ef6\u957f\u4e86\u52a8\u753b\u65f6\u957f\u4ee5\u4fbf\u5c55\u793a\u3002"]],function(){var e=d(216),t=d(241),o=t.Select,i=o.Option,n=o.OptGroup,r=[];r=r.concat([[{name:"\u6de1\u5165",value:"fade",direction:"enter",type:"\u6e10\u9690"},{name:"\u6de1\u51fa",value:"fade",direction:"leave",type:"\u6e10\u9690"}]]),r=r.concat([[{name:"\u4e2d\u5fc3\u653e\u5927",value:"zoom",direction:"enter",type:"\u7f29\u653e"},{name:"\u4e2d\u5fc3\u7f29\u5c0f",value:"zoom",direction:"leave",type:"\u7f29\u653e"},{name:"\u4e0a\u65b9\u653e\u5927",value:"zoom-up",direction:"enter",type:"\u7f29\u653e"},{name:"\u4e0a\u65b9\u7f29\u5c0f",value:"zoom-up",direction:"leave",type:"\u7f29\u653e"},{name:"\u4e0b\u65b9\u653e\u5927",value:"zoom-down",direction:"enter",type:"\u7f29\u653e"},{name:"\u4e0b\u65b9\u7f29\u5c0f",value:"zoom-down",direction:"leave",type:"\u7f29\u653e"},{name:"\u5de6\u65b9\u653e\u5927",value:"zoom-left",direction:"enter",type:"\u7f29\u653e"},{name:"\u5de6\u65b9\u7f29\u5c0f",value:"zoom-left",direction:"leave",type:"\u7f29\u653e"},{name:"\u53f3\u65b9\u653e\u5927",value:"zoom-right",direction:"enter",type:"\u7f29\u653e"},{name:"\u53f3\u65b9\u7f29\u5c0f",value:"zoom-right",direction:"leave",type:"\u7f29\u653e"}]]),r=r.concat([[{name:"\u4e0a\u65b9\u6ed1\u5165",value:"move-up",direction:"enter",type:"\u79fb\u52a8"},{name:"\u4e0a\u65b9\u6ed1\u51fa",value:"move-up",direction:"leave",type:"\u79fb\u52a8"},{name:"\u4e0b\u65b9\u6ed1\u5165",value:"move-down",direction:"enter",type:"\u79fb\u52a8"},{name:"\u4e0b\u65b9\u6ed1\u51fa",value:"move-down",direction:"leave",type:"\u79fb\u52a8"},{name:"\u5de6\u65b9\u6ed1\u5165",value:"move-left",direction:"enter",type:"\u79fb\u52a8"},{name:"\u5de6\u65b9\u6ed1\u51fa",value:"move-left",direction:"leave",type:"\u79fb\u52a8"},{name:"\u53f3\u65b9\u6ed1\u5165",value:"move-right",direction:"enter",type:"\u79fb\u52a8"},{name:"\u53f3\u65b9\u6ed1\u51fa",value:"move-right",direction:"leave",type:"\u79fb\u52a8"}]]),r=r.concat([[{name:"\u4e0a\u65b9\u5c55\u5f00",value:"slide-up",direction:"enter",type:"\u4f38\u7f29"},{name:"\u4e0a\u65b9\u7f29\u56de",value:"slide-up",direction:"leave",type:"\u4f38\u7f29"},{name:"\u4e0b\u65b9\u5c55\u5f00",value:"slide-down",direction:"enter",type:"\u4f38\u7f29"},{name:"\u4e0b\u65b9\u7f29\u56de",value:"slide-down",direction:"leave",type:"\u4f38\u7f29"},{name:"\u5de6\u65b9\u5c55\u5f00",value:"slide-left",direction:"enter",type:"\u4f38\u7f29"},{name:"\u5de6\u65b9\u7f29\u56de",value:"slide-left",direction:"leave",type:"\u4f38\u7f29"},{name:"\u53f3\u65b9\u5c55\u5f00",value:"slide-right",direction:"enter",type:"\u4f38\u7f29"},{name:"\u53f3\u65b9\u7f29\u56de",value:"slide-right",direction:"leave",type:"\u4f38\u7f29"}]]),r=r.concat([[{name:"\u6447\u6446",value:"swing",direction:"enter",type:"\u5176\u4ed6"}]]);var l="-leave",u=a["default"].createClass({displayName:"Test",handleChange:function(t){var d=this,o=t;o&&(this.demoNode.style.visibility="",e(this.demoNode,o,function(){o.slice(-l.length)===l&&(d.demoNode.style.visibility="hidden")}))},componentDidMount:function(){this.demoNode=c["default"].findDOMNode(this.refs.demo)},render:function(){var e=[a["default"].createElement(i,{value:"",key:"placeholder"},"\u8bf7\u9009\u62e9\u9884\u8bbe\u52a8\u753b")].concat(r.map(function(e,t){var d=e.map(function(e,t){return a["default"].createElement(i,{key:t,value:e.value+"-"+e.direction},e.name+" "+e.value)});return a["default"].createElement(n,{key:t,label:e[0].type},d)}));return a["default"].createElement("div",null,a["default"].createElement("div",{className:"motion-container"},a["default"].createElement("div",{ref:"demo",className:"motion-example"})),a["default"].createElement("div",{className:"motion-select-wrapper"},a["default"].createElement(o,{value:"",className:"motion-select",onChange:this.handleChange},e)))}});return a["default"].createElement(u,{key:"motion"})},["h2","\u7ec4\u4ef6\u52a8\u753b"],["table",["thead",["tr",["th","\u7ec4\u4ef6"],["th","\u4e2d\u6587\u540d"],["th","\u91c7\u7528\u52a8\u753b"]]],["tbody",["tr",["td","Popover"],["td","\u6c14\u6ce1\u6d6e\u51fa"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Popconfirm"],["td","\u6c14\u6ce1\u786e\u8ba4"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Tooltip"],["td","\u6587\u5b57\u63d0\u793a"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Modal"],["td","\u5f39\u51fa\u6846"],["td",["code","zoom"]]],["tr",["td","Badge"],["td","\u5fbd\u6807\u6570"],["td",["code","zoom"]]],["tr",["td","message"],["td","\u4fe1\u606f\u63d0\u793a\u6761"],["td",["code","move-up"]]],["tr",["td","notification"],["td","\u901a\u77e5\u6846"],["td",["code","move-right"]," & ",["code","slide-up"]]],["tr",["td","Dropdown"],["td","\u4e0b\u62c9\u83dc\u5355"],["td",["code","slide-up"]]],["tr",["td","Select"],["td","\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","Cascader"],["td","\u7ea7\u8054\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","TreeSelect"],["td","\u6811\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","DatePicker"],["td","\u65e5\u671f\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","TatePicker"],["td","\u65e5\u671f\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","Alert"],["td","\u8b66\u544a\u63d0\u793a"],["td",["code","slide-up"]]],["tr",["td","Menu"],["td","\u5bfc\u822a\u83dc\u5355"],["td",["code","slide-up"]]]]],["p","\u5728 React \u7684\u524d\u7aef\u5b9e\u73b0\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/react-component/animate"},"rc-animate"]," \u7684 ",["a",{title:null,href:"http://react-component.github.io/animate/examples/simple.html"},"transitionName"]," \u5c5e\u6027\u6765\u7ed9\u4efb\u610f\u5143\u7d20\u6307\u5b9a\u52a8\u753b\u3002"],["h2","\u7f13\u52a8\u51fd\u6570"],["blockquote",["p",["code","move@enter"]," \u8868\u793a ",["code","\u79fb\u52a8@\u8fdb\u5165"],"\u3002"]],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u5e94\u7528\u52a8\u753b"]]],["tbody",["tr",["td","@ease-out"],["td",["code","cubic-bezier(0.215,0.61,0.355,1);"]],["td","\u9ed8\u8ba4\u540e\u7f13\u52a8"],["td"]],["tr",["td","@ease-in"],["td",["code","cubic-bezier(0.55,0.055,0.675,0.19);"]],["td","\u9ed8\u8ba4\u524d\u7f13\u52a8"],["td"]],["tr",["td","@ease-in-out"],["td",["code","cubic-bezier(0.645,0.045,0.355,1);"]],["td","\u9ed8\u8ba4\u524d\u540e\u7f13\u52a8"],["td"]],["tr",["td","@ease-out-back"],["td",["code","cubic-bezier(0.18,0.89,0.32,1.28);"]],["td","\u7ed3\u675f\u56de\u52a8"],["td"]],["tr",["td","@ease-in-back"],["td",["code","cubic-bezier(0.6,-0.3,0.74,0.05);"]],["td","\u5f00\u59cb\u56de\u52a8"],["td"]],["tr",["td","@ease-in-out-back"],["td",["code","cubic-bezier(0.68,-0.55,0.27,1.55);"]],["td","\u524d\u540e\u56de\u52a8"],["td"]],["tr",["td","@ease-out-circ"],["td",["code","cubic-bezier(0.08,0.82,0.17,1);"]],["td","\u5706\u5f62\u540e\u7f13\u52a8"],["td",["code","move@enter"]," ",["code","zoom@enter"]]],["tr",["td","@ease-in-circ"],["td",["code","cubic-bezier(0.6,0.04,0.98,0.34);"]],["td","\u5706\u5f62\u524d\u7f13\u52a8"],["td",["code","move@leave"]]],["tr",["td","@ease-in-out-circ"],["td",["code","cubic-bezier(0.78,0.14,0.15,0.86);"]],["td","\u5706\u5f62\u524d\u540e\u7f13\u52a8"],["td",["code","zoom@leave"]]],["tr",["td","@ease-out-quint"],["td",["code","cubic-bezier(0.23, 1, 0.32, 1);"]],["td","quint \u540e\u7f13\u52a8"],["td",["code","slide@enter"]]],["tr",["td","@ease-in-quint"],["td",["code","cubic-bezier(0.755, 0.05, 0.855, 0.06);"]],["td","quint \u524d\u7f13\u52a8"],["td",["code","slide@leave"]]],["tr",["td","@ease-in-out-quint"],["td",["code","cubic-bezier(0.86, 0, 0.07, 1);"]],["td","quint \u524d\u540e\u7f13\u52a8"],["td"]]]]],meta:{category:"\u8bbe\u8ba1\u57fa\u7840",order:5,chinese:"\u7ec4\u4ef6\u52a8\u753b",english:"Motion",filename:"docs/spec/motion.md"},toc:["ul",["li",["a",{href:"#\u7ec4\u4ef6\u52a8\u753b"},"\u7ec4\u4ef6\u52a8\u753b"]],["li",["a",{href:"#\u7f13\u52a8\u51fd\u6570"},"\u7f13\u52a8\u51fd\u6570"]]]}}});