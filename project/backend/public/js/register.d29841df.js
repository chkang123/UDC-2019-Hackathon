(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(e,a,s){"use strict";s.r(a);var l=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{sm:"12",md:"8",lg:"6",xl:"4"}},[s("v-card",[s("v-card-text",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),s("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("v-text-field",{attrs:{"append-icon":e.show?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(a){e.show=!e.show}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("v-text-field",{attrs:{label:"Address"},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),s("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.submit}},[e._v("\n                회원가입\n                ")])],1)],1)],1)],1)],1)},t=[],i=s("bc3a"),r=s.n(i),o=s("2f62"),n={data:()=>({valid:!0,name:"",nameRules:[e=>!!e||"Name is required"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,lazy:!1,show:!1,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters"},password:"",address:""}),methods:{...Object(o["b"])(["login"]),submit(){r.a.post("http://localhost:3000/api/signup",{name:this.name,password:this.password,email:this.email,place:this.address}).then(e=>{console.log("register-response: ",e),this.login({email:email,password:password}),this.$router.push({name:"home"})}).catch(e=>{console.log("register/error")})}}},d=n,c=s("2877"),m=s("6544"),u=s.n(m),p=s("8336"),v=s("b0af"),b=s("99d9"),h=s("62ad"),f=s("4bd4"),w=s("0fd9"),x=s("8654"),g=Object(c["a"])(d,l,t,!1,null,null,null);a["default"]=g.exports;u()(g,{VBtn:p["a"],VCard:v["a"],VCardText:b["b"],VCol:h["a"],VForm:f["a"],VRow:w["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=register.d29841df.js.map