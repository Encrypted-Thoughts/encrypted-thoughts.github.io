import{_ as I}from"./plugin-vue_export-helper.f9bdc015.js";import{h as g,i as b,r as S,c as h,d as r,n as p,w as l,j as _,e as w,v as u,k as y,m as C,a as x,o as f,t as c,q as V,l as v,s as k,u as z,x as F,f as L,F as P}from"./vendor.62028223.js";const T={name:"ChatHistory",data:()=>({client_id:"icyqwwpy744ugu5x4ymyt6jqrnpxso",code:"",username:"",vod_filter:"",start_filter:"",end_filter:"",user_filter:"",message_filter:"",vods:[],filteredVods:[],comments:[],filteredComments:[],loadedComments:[],loadedCommentIndex:0,cancelCommentFetch:!1,commentFetchInProgress:!1,selectSize:window.innerHeight<800?0:20}),methods:{handleWindowResize(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isMobile()?this.selectSize=0:this.selectSize=window.innerHeight<800?0:20},100)},isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},formatDate(e){if(e)return g(String(e)).format("YYYY-MM-DD")},formatTime(e){if(e)return g(String(e)).format("hh:mm:ss A")},filterVods(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.target.id==="vod-filter"?this.vod_filter=e.target.value:e.target.id==="start-time"?this.start_time=e.target.value:e.target.id==="end-filter"&&(this.end_time=e.target.value),this.$refs.vodSelect[0].selected=!0,this.filteredVods=this.vods.filter(this.compareVod)},200)},compareVod(e){return!(!e.title.toLowerCase().includes(this.vod_filter.toLowerCase())&&this.vod_filter!==""||g(e.created_at).isBefore(this.start_filter)&&this.start_filter!==""||g(e.created_at).isAfter(this.end_filter)&&this.end_filter!=="")},filterComments(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.target.id==="user-filter"?this.user_filter=e.target.value:e.target.id==="message-filter"&&(this.message_filter=e.target.value),this.loadedCommentIndex=0,this.loadedComments=[],this.filteredComments=this.comments.filter(this.compareComment),this.loadedComments=this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex,this.loadedCommentIndex+1001)),this.loadedCommentIndex=this.loadedComments.length},200)},onCommentScroll({target:{scrollTop:e,clientHeight:s,scrollHeight:a}}){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{if(e+s>=a){var i=this.loadedComments.length;this.loadedComments=this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex,this.loadedCommentIndex+1001)),this.loadedCommentIndex+=this.loadedComments.length-i}},200)},compareComment(e){return!(!e.username.toLowerCase().includes(this.user_filter.toLowerCase())&&this.user_filter!==""||!e.message.toLowerCase().includes(this.message_filter.toLowerCase())&&this.message_filter!=="")},async getUserId(){const e={"Client-ID":this.client_id,Authorization:"Bearer "+this.code};return(await b.get(`https://api.twitch.tv/helix/users?login=${this.username}`,{headers:e})).data.data[0].id},async getVods(){var e=await this.getUserId(),s="";this.vods=[],this.filteredVods=[];do{const i={"Client-ID":this.client_id,Authorization:"Bearer "+this.code},d=await b.get(`https://api.twitch.tv/helix/videos?user_id=${e}&first=100&after=${s}`,{headers:i});var a=d.data.data.map(o=>({id:o.id,created_at:o.created_at,title:o.title}));if(this.vods.push(...a),this.filteredVods.push(...a.filter(this.compareVod)),d.data.pagination.cursor)s=d.data.pagination.cursor;else break}while(s)},async getComments(e){if(this.commentFetchInProgress)for(this.cancelCommentFetch=!0;this.commentFetchInProgress;)await new Promise(t=>setTimeout(t,1e3));const s={"Client-ID":this.client_id},a=`https://api.twitch.tv/v5/videos/${e.target.value}/comments`;var i="";this.comments=[],this.filteredComments=[],this.loadedComments=[],this.loadedCommentIndex=0,this.commentFetchInProgress=!0;do{var d=i===null||i===""?`${a}?content_offset_seconds=0`:`${a}?cursor=${i}`;const t=await b.get(d,{headers:s});var o=t.data.comments.map(n=>({created_at:n.created_at,username:n.commenter.display_name,message:n.message.body,user_color:n.message.user_color,vod_link:`https://www.twitch.tv/videos/${e.target.value}?t=${Math.floor(n.content_offset_seconds/3600)}h${Math.floor(n.content_offset_seconds/60)}m${Math.floor(n.content_offset_seconds%60)}s`}));this.comments.push(...o);var m=o.filter(this.compareComment);if(this.filteredComments.push(...m),this.loadedComments.length<1e3&&this.loadedComments.push(...m),!t.data._next||this.comments.length>1e4)break;i=t.data._next}while(i&&!this.cancelCommentFetch);this.loadedCommentIndex=this.loadedComments.length,this.commentFetchInProgress=!1,this.cancelCommentFetch=!1}},created:function(){const e=new URLSearchParams(window.location.search),s=new URLSearchParams(window.location.hash.substr(1));e.get("code")?this.code=urlParams.get("code"):s.get("access_token")&&(this.code=s.get("access_token")),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},destroyed(){window.removeEventListener("resize",this.handleWindowResize)}},D={class:"flex flex-wrap h-full w-full text-white p-2"},A={class:"h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4"},U={class:"flex flex-col h-full w-full gap-2"},M={class:"flex flex-wrap gap-2 min-w-full"},B={class:"flex gap-2 min-w-full max-h-full pb-2 border-b-5 border-gray-600"},E=["href"],$={class:"text-xs md:text-base xl:text-lg"},O={class:"text-xs md:text-base xl:text-lg"},R=x("ALLOWED "),W=["disabled"],H={class:"text-xs md:text-base xl:text-lg"},j=x("VODS "),Y={class:"flex gap-2 min-w-full"},q=["disabled","size"],N={ref:"defaultOption",value:"",disabled:"",hidden:"",selected:"",class:"rounded-sm even:bg-gray-800 w-full p-1 pl-3"},G=["value"],J={class:"h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2"},K={class:"flex flex-col rounded-md h-full border-3 border-gray-600 bg-gray-900"},Q={class:"flex w-full border-b-4 border-gray-600"},X={class:"w-full bg-gray-900 text-left"},Z={class:"w-full"},ee={class:"flex even:bg-gray-800"},te={class:"px-3 py-1 w-full self-center"},se=["href"],re=["href"];function oe(e,s,a,i,d,o){const m=S("font-awesome-icon");return f(),h("div",D,[r("div",A,[r("div",U,[r("div",M,[r("div",B,[r("a",{href:`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${e.client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`,class:p([e.code?"":"animate-pulse","w-1/4 text-center bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md"])},[l(r("span",$,"ALLOW ACCESS",512),[[_,!e.code]]),l(r("span",O,[R,w(m,{icon:"check",class:"text-green-600"})],512),[[_,e.code]])],10,E),l(r("input",{onInput:s[0]||(s[0]=t=>e.username=t.target.value),"onUpdate:modelValue":s[1]||(s[1]=t=>e.username=t),type:"text",class:"form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md w-2/4",placeholder:"Enter a username..."},null,544),[[u,e.username]]),r("button",{onClick:s[2]||(s[2]=t=>o.getVods()),disabled:!e.username||!e.code,class:"bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md w-1/4 disabled:opacity-50"},[r("span",H,[j,w(m,{icon:"search"})])],8,W)]),r("div",Y,[l(r("input",{onInput:s[3]||(s[3]=t=>o.filterVods(t)),id:"vod-filter","onUpdate:modelValue":s[4]||(s[4]=t=>e.vod_filter=t),type:"text",class:"w-1/3 focus:outline-none focus:ring-0 focus:border-green-700 form-input bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50",placeholder:"Filter on VOD name..."},null,544),[[u,e.vod_filter]]),l(r("input",{onInput:s[5]||(s[5]=t=>o.filterVods(t)),id:"start_time","onUpdate:modelValue":s[6]||(s[6]=t=>e.start_filter=t),type:"datetime-local",class:p([e.start_filter?"":"start-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"Start time filter..."},null,34),[[u,e.start_filter]]),l(r("input",{onInput:s[7]||(s[7]=t=>o.filterVods(t)),id:"end_time","onUpdate:modelValue":s[8]||(s[8]=t=>e.end_filter=t),type:"datetime-local",class:p([e.end_filter?"":"end-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"End time filter..."},null,34),[[u,e.end_filter]])])]),r("select",{ref:"vodSelect",onChange:s[9]||(s[9]=t=>o.getComments(t)),disabled:e.vods.length===0,size:e.selectSize,class:p([e.selectSize>0?"bg-none p-0":"","focus:outline-none focus:ring-0 focus:border-green-800 h-full w-full border-2 border-gray-600 bg-gray-900 rounded-md scrollbar-thin scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500 break-words whitespace-normal"])},[r("option",N,"Select a vod...",512),(f(!0),h(y,null,C(e.filteredVods,(t,n)=>(f(),h("option",{value:t.id,class:"rounded-sm even:bg-gray-800 w-full p-1 pl-3"},c(o.formatDate(t.created_at))+": "+c(t.title),9,G))),256))],42,q)])]),r("div",J,[r("div",K,[r("div",Q,[l(r("input",{onInput:s[10]||(s[10]=t=>o.filterComments(t)),id:"user_filter","onUpdate:modelValue":s[11]||(s[11]=t=>e.user_filter=t),type:"text",class:"w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on username..."},null,544),[[u,e.user_filter]]),l(r("input",{onInput:s[12]||(s[12]=t=>o.filterComments(t)),id:"message_filter","onUpdate:modelValue":s[13]||(s[13]=t=>e.message_filter=t),type:"text",class:"w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on message..."},null,544),[[u,e.message_filter]])]),r("div",{onScroll:s[14]||(s[14]=(...t)=>o.onCommentScroll&&o.onCommentScroll(...t)),class:"h-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-500 scrollbar scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500"},[r("div",X,[r("div",Z,[(f(!0),h(y,null,C(e.loadedComments,t=>(f(),h("div",ee,[r("div",te,[r("a",{class:"text-gray-400 pr-1",href:t.vod_link,target:"_blank",rel:"noopener noreferrer"},c(o.formatTime(t.created_at)),9,se),r("a",{style:V({color:t.user_color}),href:`https://www.twitch.tv/${t.username}`,target:"_blank",rel:"noopener noreferrer"},c(t.username),13,re),r("span",null,": "+c(t.message),1)])]))),256))])])],32)])]),l(w(m,{icon:"spinner",pulse:"",class:"absolute bottom-5 right-7"},null,512),[[_,e.commentFetchInProgress]])])}var ie=I(T,[["render",oe],["__scopeId","data-v-33da9e80"]]);v.add(k);v.add(z);v.add(F);L(ie).component("font-awesome-icon",P).mount("#app");
