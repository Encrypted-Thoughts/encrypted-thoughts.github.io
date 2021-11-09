import{_ as b}from"./plugin-vue_export-helper.f9bdc015.js";import{h as p,i as h,c as n,d as r,w as i,v as a,j as g,k as y,p as w,b as _,o as u,t as m,f as v,F as x}from"./vendor.16661bc6.js";const f="icyqwwpy744ugu5x4ymyt6jqrnpxso",C={name:"ChatHistory",data:()=>({code:"rrqze800uc5uwpvwqr69mzqpocmbub",username:"rnjoy",vod_filter:"",start_filter:"",end_filter:"",user_filter:"",message_filter:"",vods:[],filteredVods:[],comments:[],filteredComments:[]}),methods:{getToken(){window.location.href=`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${f}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`},formatDate(t){if(t)return p(String(t)).format("YYYY/MM/DD hh:mm:ss A")},filterVods(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.filteredVods=this.vods.filter(this.compareVod)},200)},compareVod(t){return!(!t.title.toLowerCase().includes(this.vod_filter.toLowerCase())&&this.vod_filter!==""||p(t.created_at).isBefore(this.start_filter)&&this.start_filter!==""||p(t.created_at).isAfter(this.end_filter)&&this.end_filter!=="")},filterComments(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.filteredComments=this.comments.filter(this.compareComment)},200)},compareComment(t){return!(!t.commenter.display_name.toLowerCase().includes(this.user_filter.toLowerCase())&&this.user_filter!==""||!t.message.body.toLowerCase().includes(this.message_filter.toLowerCase())&&this.message_filter!=="")},async getUserId(){const t={"Client-ID":f,Authorization:"Bearer "+this.code};return(await h.get(`https://api.twitch.tv/helix/users?login=${this.username}`,{headers:t})).data.data[0].id},async getVods(){var t=await this.getUserId(),e="";this.vods=[],this.filteredVods=[];do{const d={"Client-ID":f,Authorization:"Bearer "+this.code},l=await h.get(`https://api.twitch.tv/helix/videos?user_id=${t}&first=100&after=${e}`,{headers:d});if(this.vods.push(...l.data.data),this.filteredVods.push(...l.data.data.filter(this.compareVod)),l.data.pagination.cursor)e=l.data.pagination.cursor;else break}while(e);this.filterVods()},async getComments(t){const e={"Client-ID":f},d=`https://api.twitch.tv/v5/videos/${t.target.value}/comments`;var l="";this.comments=[],this.filteredComments=[];do{var c=l===null||l===""?`${d}?content_offset_seconds=0`:`${d}?cursor=${l}`;const o=await h.get(c,{headers:e});if(this.comments.push(...o.data.comments),this.filteredComments.push(...o.data.comments.filter(this.compareComment)),o.data._next)l=o.data._next;else break}while(l);this.filterComments()}},created:function(){const t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.substr(1));t.get("code")?this.code=urlParams.get("code"):e.get("access_token")&&(this.code=e.get("access_token"))}},V=t=>(w("data-v-0278f151"),t=t(),_(),t),I={class:"flex flex-wrap h-full w-full text-white p-2"},U={class:"h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4"},k={class:"flex flex-col h-full min-w-full gap-2"},T={class:"flex flex-wrap gap-2 max-w-full"},S={class:"flex gap-2 min-w-full max-h-full"},D={class:"flex gap-2 min-w-full"},E=["disabled"],A={class:"flex gap-2 min-w-full"},L=["value"],$={class:"h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2"},P={class:"overflow-y-auto overflow-x-auto h-full rounded-md border-3 border-gray-600 bg-gray-900"},M={class:"table-auto bg-gray-900 text-left w-full"},z={class:"border-b-4 border-gray-600"},B=V(()=>r("th",{class:"p-2 w-52 min-w-52"},"TIMESTAMP",-1)),j={class:"p-2 w-60 border-l-3 border-gray-600"},q={class:"p-2 border-l-3 border-gray-600"},F={class:"even:bg-gray-800"},O={class:"pl-2 pr-2"},Y={class:"pl-2 pr-2"},H={class:"pl-2 pr-2"};function N(t,e,d,l,c,o){return u(),n("div",I,[r("div",U,[r("div",k,[r("div",T,[r("div",S,[r("button",{onClick:e[0]||(e[0]=s=>o.getToken()),class:"bg-gray-900 border-2 border-gray-600 w-1/3 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md"}," GET TOKEN "),i(r("input",{id:"code","onUpdate:modelValue":e[1]||(e[1]=s=>t.code=s),type:"text",class:"form-input bg-gray-900 px-4 py-2 rounded-md w-2/3",placeholder:"Enter Access Token"},null,512),[[a,t.code]])]),r("div",D,[i(r("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.username=s),type:"text",class:"form-input bg-gray-900 px-4 py-2 rounded-md w-2/3",placeholder:"Enter Username"},null,512),[[a,t.username]]),r("button",{onClick:e[3]||(e[3]=s=>o.getVods()),disabled:!this.username||!this.code,class:"bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md w-1/3 disabled:opacity-50 disabled:hover"}," POPULATE VOD LIST ",8,E)]),i(r("input",{onInput:e[4]||(e[4]=s=>o.filterVods()),id:"vod-filter","onUpdate:modelValue":e[5]||(e[5]=s=>t.vod_filter=s),type:"text",class:"form-input bg-gray-900 px-4 py-2 rounded-md min-w-full disabled:opacity-50",placeholder:"Filter on VOD name..."},null,544),[[a,t.vod_filter]]),r("div",A,[i(r("input",{onInput:e[6]||(e[6]=s=>o.filterVods()),id:"start_time","onUpdate:modelValue":e[7]||(e[7]=s=>t.start_filter=s),type:"datetime-local",class:"flex-1 form-input bg-gray-900 px-4 py-2 rounded-md disabled:opacity-50",placeholder:"Start time filter..."},null,544),[[a,t.start_filter]]),i(r("input",{onInput:e[8]||(e[8]=s=>o.filterVods()),id:"end_time","onUpdate:modelValue":e[9]||(e[9]=s=>t.end_filter=s),type:"datetime-local",class:"flex-1 form-input bg-gray-900 px-4 py-2 rounded-md disabled:opacity-50",placeholder:"End time filter..."},null,544),[[a,t.end_filter]])])]),r("select",{onChange:e[10]||(e[10]=s=>o.getComments(s)),size:"20",class:"h-full w-full p-2 border-2 border-gray-600 bg-gray-900 rounded-md overflow-y-auto bg-none"},[(u(!0),n(g,null,y(t.filteredVods,(s,G)=>(u(),n("option",{value:s.id,class:"rounded-sm even:bg-gray-800"},m(o.formatDate(s.created_at))+": "+m(s.title),9,L))),256))],32)])]),r("div",$,[r("div",P,[r("table",M,[r("thead",z,[r("tr",null,[B,r("th",j,[i(r("input",{onInput:e[11]||(e[11]=s=>o.filterComments()),id:"user_filter","onUpdate:modelValue":e[12]||(e[12]=s=>t.user_filter=s),type:"text",class:"form-input bg-gray-900 rounded-md w-full placeholder-white",placeholder:"USERNAME"},null,544),[[a,t.user_filter]])]),r("th",q,[i(r("input",{onInput:e[13]||(e[13]=s=>o.filterComments()),id:"message_filter","onUpdate:modelValue":e[14]||(e[14]=s=>t.message_filter=s),type:"text",class:"form-input bg-gray-900 rounded-md w-full placeholder-white",placeholder:"MESSAGE"},null,544),[[a,t.message_filter]])])])]),r("tbody",null,[(u(!0),n(g,null,y(t.filteredComments,s=>(u(),n("tr",F,[r("td",O,m(o.formatDate(s.created_at)),1),r("td",Y,m(s.commenter.display_name),1),r("td",H,m(s.message.body),1)]))),256))])])])])])}var R=b(C,[["render",N],["__scopeId","data-v-0278f151"]]);v(R).component("font-awesome-icon",x).mount("#app");
