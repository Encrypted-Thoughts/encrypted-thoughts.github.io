import{_ as c}from"./plugin-vue_export-helper.f9bdc015.js";import{r,c as d,d as t,w as l,v as i,e as m,o as p,l as f,g as h,f as u,F as w}from"./vendor.3757941e.js";const x={name:"Auth",data:()=>({code:"No Code/Token Detected"}),methods:{copyToClipboard(){navigator.clipboard.writeText(this.code)}},created:function(){const o=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.substr(1));o.get("code")?this.code=urlParams.get("code"):e.get("access_token")&&(this.code=e.get("access_token"))}},g={class:"flex flex-col h-full w-full justify-center items-center text-center"},_=t("h1",{class:"text-2xl text-white"},"Authorization Code / Access Token",-1),v={class:"flex w-full max-w-lg m-2"};function b(o,e,k,C,A,n){const a=r("font-awesome-icon");return p(),d("div",g,[_,t("div",v,[l(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>o.code=s),ref:"code",class:"flex-1 shadow-lg text-center font-bold rounded-l-md outline-none ml-2",onClick:e[1]||(e[1]=s=>this.$refs.code.select()),readonly:""},null,512),[[i,o.code]]),t("button",{onClick:e[2]||(e[2]=s=>n.copyToClipboard()),class:"flex-none bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 shadow-lg rounded-r-md mr-2"},[m(a,{icon:"copy"})])])])}var y=c(x,[["render",b]]);f.add(h);u(y).component("font-awesome-icon",w).mount("#app");
