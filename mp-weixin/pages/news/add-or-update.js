(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/add-or-update"],{"1fc1":function(e,n,t){"use strict";t.r(n);var r=t("4fdc"),o=t("6ec7");for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);t("b035");var a,i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"2bc29d2e",null,!1,r["a"],a);n["default"]=u.exports},"4fdc":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},o=function(){var e=this,n=e.$createElement;e._self._c},s=[]},"66e5":function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("1fc1"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"6ec7":function(e,n,t){"use strict";t.r(n);var r=t("7942"),o=t.n(r);for(var s in r)"default"!==s&&function(e){t.d(n,e,(function(){return r[e]}))}(s);n["default"]=o.a},7942:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(c){return void t(c)}i.done?n(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){s(a,r,o,i,u,"next",e)}function u(e){s(a,r,o,i,u,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{cross:"",ro:{newsName:!1,newsTypes:!1,newsPhoto:!1,insertTime:!1,newsContent:!1,newsDelete:!1,createTime:!1},ruleForm:{newsName:"",newsTypes:"",newsValue:"",newsPhoto:"",insertTime:"",newsContent:"",newsDelete:"",createTime:""},user:{},newsTypesOptions:[],newsTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return a(r.default.mark((function t(){var o,s,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o={page:1,limit:100,dicCode:"news_types"},t.next=3,n.$api.page("dictionary",o);case 3:if(s=t.sent,n.newsTypesOptions=s.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("news",n.ruleForm.id);case 9:a=t.sent,n.ruleForm=a.data;case 11:e.newsId&&(n.ruleForm.newsId=e.newsId);case 12:case"end":return t.stop()}}),t)})))()},methods:{newsTypesChange:function(e){this.newsTypesIndex=e.target.value,this.ruleForm.newsValue=this.newsTypesOptions[this.newsTypesIndex].indexName,this.ruleForm.newsTypes=this.newsTypesOptions[this.newsTypesIndex].codeIndex},newsPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.newsPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.newsName){t.next=3;break}return n.$utils.msg("公告信息标题不能为空"),t.abrupt("return");case 3:if(n.ruleForm.newsPhoto){t.next=6;break}return n.$utils.msg("公告信息图片不能为空"),t.abrupt("return");case 6:if(!n.ruleForm.id){t.next=11;break}return t.next=9,n.$api.update("news",n.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,n.$api.save("news",n.ruleForm);case 13:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 15:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,o=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,o=o>9?o:"0"+o,"".concat(t,"-").concat(r,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};n.default=u}).call(this,t("543d")["default"])},"8dc2":function(e,n,t){},b035:function(e,n,t){"use strict";var r=t("8dc2"),o=t.n(r);o.a}},[["66e5","common/runtime","common/vendor"]]]);