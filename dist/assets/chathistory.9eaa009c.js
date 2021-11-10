import{_ as I}from"./plugin-vue_export-helper.f9bdc015.js";import{h as g,i as p,r as V,c as f,d as o,w as a,j as _,e as y,v as d,n as w,k as C,m as v,a as b,o as c,t as h,q as k,l as x,s as F,u as S,f as D,F as P}from"./vendor.762fed3e.js";const T={name:"ChatHistory",data:()=>({client_id:"icyqwwpy744ugu5x4ymyt6jqrnpxso",code:"",username:"",vod_filter:"",start_filter:"",end_filter:"",user_filter:"",message_filter:"",vods:[],filteredVods:[],comments:[],filteredComments:[],loadedComments:[],loadedCommentIndex:0,cancelCommentFetch:!1,commentFetchInProgress:!1}),methods:{formatDate(e){if(e)return g(String(e)).format("YYYY/MM/DD hh:mm:ss A")},filterVods(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.filteredVods=this.vods.filter(this.compareVod)},200)},compareVod(e){return!(!e.title.toLowerCase().includes(this.vod_filter.toLowerCase())&&this.vod_filter!==""||g(e.created_at).isBefore(this.start_filter)&&this.start_filter!==""||g(e.created_at).isAfter(this.end_filter)&&this.end_filter!=="")},filterComments(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.loadedCommentIndex=0,this.loadedComments=[],this.filteredComments=this.comments.filter(this.compareComment),this.loadedComments=this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex,this.loadedCommentIndex+1001)),this.loadedCommentIndex=this.loadedComments.length},200)},onCommentScroll({target:{scrollTop:e,clientHeight:t,scrollHeight:i}}){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{if(e+t>=i){var l=this.loadedComments.length;this.loadedComments=this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex,this.loadedCommentIndex+1001)),this.loadedCommentIndex+=this.loadedComments.length-l}},200)},compareComment(e){return!(!e.username.toLowerCase().includes(this.user_filter.toLowerCase())&&this.user_filter!==""||!e.message.toLowerCase().includes(this.message_filter.toLowerCase())&&this.message_filter!=="")},async getUserId(){const e={"Client-ID":this.client_id,Authorization:"Bearer "+this.code};return(await p.get(`https://api.twitch.tv/helix/users?login=${this.username}`,{headers:e})).data.data[0].id},async getVods(){var e=await this.getUserId(),t="";this.vods=[],this.filteredVods=[];do{const l={"Client-ID":this.client_id,Authorization:"Bearer "+this.code},n=await p.get(`https://api.twitch.tv/helix/videos?user_id=${e}&first=100&after=${t}`,{headers:l});var i=n.data.data.map(r=>({id:r.id,created_at:r.created_at,title:r.title}));if(this.vods.push(...i),this.filteredVods.push(...i.filter(this.compareVod)),n.data.pagination.cursor)t=n.data.pagination.cursor;else break}while(t)},async getComments(e){if(this.commentFetchInProgress)for(this.cancelCommentFetch=!0;this.commentFetchInProgress;)await new Promise(s=>setTimeout(s,1e3));const t={"Client-ID":this.client_id},i=`https://api.twitch.tv/v5/videos/${e.target.value}/comments`;var l="";this.comments=[],this.filteredComments=[],this.loadedComments=[],this.loadedCommentIndex=0,this.commentFetchInProgress=!0;do{var n=l===null||l===""?`${i}?content_offset_seconds=0`:`${i}?cursor=${l}`;const s=await p.get(n,{headers:t});var r=s.data.comments.map(u=>({created_at:u.created_at,username:u.commenter.display_name,message:u.message.body,user_color:u.message.user_color}));this.comments.push(...r);var m=r.filter(this.compareComment);if(this.filteredComments.push(...m),this.loadedComments.length<1e3&&this.loadedComments.push(...m),s.data._next)l=s.data._next;else break;if(this.comments.length>1e4)break}while(l&&!this.cancelCommentFetch);this.loadedCommentIndex=this.loadedComments.length,this.commentFetchInProgress=!1,this.cancelCommentFetch=!1}},created:function(){const e=new URLSearchParams(window.location.search),t=new URLSearchParams(window.location.hash.substr(1));e.get("code")?this.code=urlParams.get("code"):t.get("access_token")&&(this.code=t.get("access_token"))}},U={class:"flex flex-wrap h-full w-full text-white p-2"},L={class:"h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4"},$={class:"flex flex-col h-full w-full gap-2"},z={class:"flex flex-wrap gap-2 min-w-full"},A={class:"flex gap-2 min-w-full max-h-full pb-2 border-b-5 border-gray-600"},B=["href"],E=b(" GET TOKEN "),j=["disabled"],N={class:"flex gap-2 min-w-full"},Y=["value"],q={class:"h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2"},H={class:"flex flex-col rounded-md h-full border-3 border-gray-600 bg-gray-900"},M={class:"flex w-full border-b-4 border-gray-600"},O={class:"w-full bg-gray-900 text-left"},G={class:"w-full"},R={class:"flex even:bg-gray-800"},K={class:"px-3 py-1 w-full self-center"},J={class:"text-gray-400"},Q=b();function W(e,t,i,l,n,r){const m=V("font-awesome-icon");return c(),f("div",U,[o("div",L,[o("div",$,[o("div",z,[o("div",A,[o("a",{href:`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${e.client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`,class:"w-1/4 text-center bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-3 shadow-lg rounded-md"},[E,a(y(m,{icon:"check",class:"text-green-600"},null,512),[[_,e.code]])],8,B),a(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.username=s),type:"text",class:"form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md w-2/4",placeholder:"Enter a username..."},null,512),[[d,e.username]]),o("button",{onClick:t[1]||(t[1]=s=>r.getVods()),disabled:!e.username||!e.code,class:"bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-3 shadow-lg rounded-md w-1/4 disabled:opacity-50"}," GET VODS ",8,j)]),o("div",N,[a(o("input",{onInput:t[2]||(t[2]=s=>r.filterVods()),id:"vod-filter","onUpdate:modelValue":t[3]||(t[3]=s=>e.vod_filter=s),type:"text",class:"w-1/3 focus:outline-none focus:ring-0 focus:border-green-700 form-input bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50",placeholder:"Filter on VOD name..."},null,544),[[d,e.vod_filter]]),a(o("input",{onInput:t[4]||(t[4]=s=>r.filterVods()),id:"start_time","onUpdate:modelValue":t[5]||(t[5]=s=>e.start_filter=s),type:"datetime-local",class:w([e.start_filter?"":"start-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"Start time filter..."},null,34),[[d,e.start_filter]]),a(o("input",{onInput:t[6]||(t[6]=s=>r.filterVods()),id:"end_time","onUpdate:modelValue":t[7]||(t[7]=s=>e.end_filter=s),type:"datetime-local",class:w([e.end_filter?"":"end-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"End time filter..."},null,34),[[d,e.end_filter]])])]),o("select",{onChange:t[8]||(t[8]=s=>r.getComments(s)),size:"20",class:"focus:outline-none focus:ring-0 focus:border-green-700 p-0 h-full w-full border-2 border-gray-600 bg-gray-900 rounded-md bg-none scrollbar-thin scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500"},[(c(!0),f(C,null,v(e.filteredVods,(s,u)=>(c(),f("option",{value:s.id,class:"rounded-sm even:bg-gray-800 w-full p-1 pl-3"},h(r.formatDate(s.created_at))+": "+h(s.title),9,Y))),256))],32)])]),o("div",q,[o("div",H,[o("div",M,[a(o("input",{onInput:t[9]||(t[9]=s=>r.filterComments()),id:"user_filter","onUpdate:modelValue":t[10]||(t[10]=s=>e.user_filter=s),type:"text",class:"w-2/6 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on username..."},null,544),[[d,e.user_filter]]),a(o("input",{onInput:t[11]||(t[11]=s=>r.filterComments()),id:"message_filter","onUpdate:modelValue":t[12]||(t[12]=s=>e.message_filter=s),type:"text",class:"w-4/6 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on message..."},null,544),[[d,e.message_filter]])]),o("div",{onScroll:t[13]||(t[13]=(...s)=>r.onCommentScroll&&r.onCommentScroll(...s)),class:"h-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-500 scrollbar scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500"},[o("div",O,[o("div",G,[(c(!0),f(C,null,v(e.loadedComments,s=>(c(),f("div",R,[o("div",K,[o("span",J,h(r.formatDate(s.created_at)),1),Q,o("span",{style:k({color:s.user_color})},h(s.username),5),b(": "+h(s.message),1)])]))),256))])])],32)])]),a(y(m,{icon:"spinner",pulse:"",class:"absolute bottom-5 right-7"},null,512),[[_,e.commentFetchInProgress]])])}var X=I(T,[["render",W],["__scopeId","data-v-e9c16fe6"]]);x.add(F);x.add(S);D(X).component("font-awesome-icon",P).mount("#app");
