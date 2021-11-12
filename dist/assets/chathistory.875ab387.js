import{_ as V}from"./plugin-vue_export-helper.f9bdc015.js";import{I as z,h as p,t as L,i as g,r as k,c as n,d as r,n as b,w as c,j as I,e as x,v as m,k as D,m as w,q as v,s as S,a as y,o as a,u as _,x as U,y as A,p as M,b as T,l as C,z as B,A as E,B as O,f as W,F}from"./vendor.cd6f4ecc.js";const H={name:"ChatHistory",components:{InfiniteLoading:z},data:()=>({client_id:"icyqwwpy744ugu5x4ymyt6jqrnpxso",global_badges:{},channel_badges:{},code:"",username:"",vod_filter:"",start_filter:"",end_filter:"",user_filter:"",message_filter:"",vods:[],infinite_id:0,selected_vod:0,filtered_vods:[],comment_cursor:"",comment_chunk_counter:0,comments:[],cancel_comment_fetch:!1,comment_fetch_in_progress:!1,select_size:window.innerHeight<800?0:20}),methods:{handleWindowResize(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isMobile()?this.select_size=0:this.select_size=window.innerHeight<800?0:20},100)},isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},formatDate(e){if(e)return p(String(e)).format("YYYY-MM-DD")},formatTime(e){if(e)return p(String(e)).format("hh:mm:ss A")},getColor(e){if(!e)return"hsl(264, 100%, 75%)";let t=L(e);return t.isDark()?t.brighten(20).toHexString():e},filterVods(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.target.id==="vod-filter"?this.vod_filter=e.target.value:e.target.id==="start-time"?this.start_time=e.target.value:e.target.id==="end-time"&&(this.end_time=e.target.value),this.$refs.vodSelect[0].selected=!0,this.filtered_vods=this.vods.filter(this.compareVod)},200)},compareVod(e){return!(!e.title.toLowerCase().includes(this.vod_filter.toLowerCase())&&this.vod_filter!==""||p(e.created_at).isBefore(this.start_filter)&&this.start_filter!==""||p(e.created_at).isAfter(this.end_filter)&&this.end_filter!=="")},filterComments(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.target.id==="user-filter"?this.user_filter=e.target.value:e.target.id==="message-filter"&&(this.message_filter=e.target.value),this.reloadComments()},500)},async loadComments(e){if(this.selected_vod===0){e.complete();return}if(this.comment_fetch_in_progress){for(this.cancel_comment_fect=!0;this.comment_fetch_in_progress;)await new Promise(d=>setTimeout(d,1e3));this.comments=[],this.comment_cursor="",this.comment_chunk_counter=0}const t={"Client-ID":this.client_id},u=`https://api.twitch.tv/v5/videos/${this.selected_vod}/comments`;var l=this.comment_cursor;this.comment_fetch_in_progress=!0;do{var h=l===null||l===""?`${u}?content_offset_seconds=0`:`${u}?cursor=${l}`;const d=await g.get(h,{headers:t});var i=d.data.comments.map(f=>({created_at:f.created_at,username:f.commenter.display_name,message:f.message,vod_link:`https://www.twitch.tv/videos/${this.selected_vod}?t=${Math.floor(f.content_offset_seconds/3600)}h${Math.floor(f.content_offset_seconds/60)}m${Math.floor(f.content_offset_seconds%60)}s`}));if(this.comments.push(...i.filter(this.compareComment)),!d.data._next){e.loaded(),e.complete();break}if(this.comments.length>this.comment_chunk_counter*500+500){this.comment_cursor=d.data._next,this.comment_chunk_counter+=1,e.loaded();break}l=d.data._next}while(l&&!this.cancel_comment_fect);this.comment_fetch_in_progress=!1,this.cancel_comment_fect=!1},compareComment(e){return!(!e.username.toLowerCase().includes(this.user_filter.toLowerCase())&&this.user_filter!==""||!e.message.body.toLowerCase().includes(this.message_filter.toLowerCase())&&this.message_filter!=="")},async getUserId(){const e={"Client-ID":this.client_id,Authorization:"Bearer "+this.code};return(await g.get(`https://api.twitch.tv/helix/users?login=${this.username}`,{headers:e})).data.data[0].id},async getVods(){var e=await this.getUserId(),t="";this.vods=[],this.filtered_vods=[],g.get(`https://badges.twitch.tv/v1/badges/channels/${e}/display`).then(l=>{this.channel_badges=l.data.badge_sets});do{const l={"Client-ID":this.client_id,Authorization:"Bearer "+this.code},h=await g.get(`https://api.twitch.tv/helix/videos?user_id=${e}&first=100&after=${t}`,{headers:l});var u=h.data.data.map(i=>({id:i.id,created_at:i.created_at,title:i.title}));if(this.vods.push(...u),this.filtered_vods.push(...u.filter(this.compareVod)),h.data.pagination.cursor)t=h.data.pagination.cursor;else break}while(t)},reloadComments(){this.comments=[],this.comment_cursor="",this.comment_chunk_counter=0,this.infinite_id+=1}},created:function(){const e=new URLSearchParams(window.location.search).get("code"),t=new URLSearchParams(window.location.hash.substr(1)).get("access_token");e?this.code=e:t&&(this.code=t),g.get("https://badges.twitch.tv/v1/badges/global/display").then(u=>{this.global_badges=u.data.badge_sets}),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},destroyed(){window.removeEventListener("resize",this.handleWindowResize)}},P=e=>(M("data-v-410ab57a"),e=e(),T(),e),R={class:"flex flex-wrap h-full w-full text-white p-2"},$={class:"flex flex-col gap-2 h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4"},j={class:"flex flex-wrap gap-2 min-w-full"},N={class:"flex gap-2 min-w-full max-h-full pb-2 border-b-5 border-gray-600"},Y=["href"],q={class:"text-xs md:text-base xl:text-lg"},G={class:"text-xs md:text-base xl:text-lg"},J=y("ALLOWED "),K=["disabled"],Q={class:"text-xs md:text-base xl:text-lg"},X=y("VODS "),Z={class:"flex gap-2 min-w-full"},ee=["disabled","size"],te={ref:"defaultOption",value:"",disabled:"",hidden:"",selected:"",class:"rounded-sm even:bg-gray-800 w-full p-1 pl-3"},se=["value"],re={class:"flex flex-col h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2 border-3 border-gray-600 bg-gray-900 rounded-md"},ie={class:"flex w-full border-b-4 border-gray-600"},oe={"infinite-wrapper":"",class:"scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-500 scrollbar scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500"},ne={class:"even:bg-gray-800 px-3 py-1 w-full"},ae=["href"],le={class:"inline text-center"},de=["src","alt"],ce=["src","alt"],ue=["href"],fe=P(()=>r("span",{class:"inline"},": ",-1)),he={class:"inline text-center"},me=["src","alt"],_e={key:1,class:"inline pr-1"},ge=y("chat not loaded");function pe(e,t,u,l,h,i){const d=k("font-awesome-icon"),f=k("infinite-loading");return a(),n("div",R,[r("div",$,[r("div",j,[r("div",N,[r("a",{href:`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${e.client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`,class:b([e.code?"":"animate-pulse","w-1/4 text-center bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md"])},[c(r("span",q,"ALLOW ACCESS",512),[[I,!e.code]]),c(r("span",G,[J,x(d,{icon:"check",class:"text-green-600"})],512),[[I,e.code]])],10,Y),c(r("input",{onInput:t[0]||(t[0]=s=>e.username=s.target.value),"onUpdate:modelValue":t[1]||(t[1]=s=>e.username=s),type:"text",class:"form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md w-2/4",placeholder:"Enter a username..."},null,544),[[m,e.username]]),r("button",{onClick:t[2]||(t[2]=s=>i.getVods()),disabled:!e.username||!e.code,class:"bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md w-1/4 disabled:opacity-50"},[r("span",Q,[X,x(d,{icon:"search"})])],8,K)]),r("div",Z,[c(r("input",{onInput:t[3]||(t[3]=s=>i.filterVods(s)),id:"vod-filter","onUpdate:modelValue":t[4]||(t[4]=s=>e.vod_filter=s),type:"text",class:"w-1/3 focus:outline-none focus:ring-0 focus:border-green-700 form-input bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50",placeholder:"Filter on VOD name..."},null,544),[[m,e.vod_filter]]),c(r("input",{onInput:t[5]||(t[5]=s=>i.filterVods(s)),id:"start-time","onUpdate:modelValue":t[6]||(t[6]=s=>e.start_filter=s),type:"datetime-local",class:b([e.start_filter?"":"start-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"Start time filter..."},null,34),[[m,e.start_filter]]),c(r("input",{onInput:t[7]||(t[7]=s=>i.filterVods(s)),id:"end-time","onUpdate:modelValue":t[8]||(t[8]=s=>e.end_filter=s),type:"datetime-local",class:b([e.end_filter?"":"end-time","w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50"]),placeholder:"End time filter..."},null,34),[[m,e.end_filter]])])]),c(r("select",{ref:"vodSelect",onChange:t[9]||(t[9]=(...s)=>i.reloadComments&&i.reloadComments(...s)),"onUpdate:modelValue":t[10]||(t[10]=s=>e.selected_vod=s),disabled:e.vods.length===0,size:e.select_size,class:b([e.select_size>0?"bg-none p-0":"","focus:outline-none focus:ring-0 focus:border-green-800 h-full w-full border-2 border-gray-600 bg-gray-900 rounded-md scrollbar-thin scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500 break-words whitespace-normal"])},[r("option",te,"Select a vod...",512),(a(!0),n(w,null,v(e.filtered_vods,(s,o)=>(a(),n("option",{value:s.id,class:"rounded-sm even:bg-gray-800 w-full p-1 pl-3"},_(i.formatDate(s.created_at))+": "+_(s.title),9,se))),256))],42,ee),[[D,e.selected_vod]])]),r("div",re,[r("div",ie,[c(r("input",{onInput:t[11]||(t[11]=s=>i.filterComments(s)),id:"user-filter","onUpdate:modelValue":t[12]||(t[12]=s=>e.user_filter=s),type:"text",class:"w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on username..."},null,544),[[m,e.user_filter]]),c(r("input",{onInput:t[13]||(t[13]=s=>i.filterComments(s)),id:"message-filter","onUpdate:modelValue":t[14]||(t[14]=s=>e.message_filter=s),type:"text",class:"w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900",placeholder:"Filter on message..."},null,544),[[m,e.message_filter]])]),r("div",oe,[(a(!0),n(w,null,v(e.comments,s=>(a(),n("div",ne,[r("a",{class:"inline text-gray-400 pr-1",href:s.vod_link,target:"_blank",rel:"noopener noreferrer"},_(i.formatTime(s.created_at)),9,ae),(a(!0),n(w,null,v(s.message.user_badges,o=>(a(),n("div",le,[e.channel_badges[o._id]?(a(),n("img",{key:0,class:"inline pr-1",src:e.channel_badges[o._id].versions[o.version].image_url_2x,alt:o.title,height:"28",width:"28"},null,8,de)):e.global_badges[o._id]?(a(),n("img",{key:1,class:"inline pr-1",src:e.global_badges[o._id].versions[o.version].image_url_2x,alt:o.title,height:"28",width:"28"},null,8,ce)):U("",!0)]))),256)),r("a",{class:"inline",style:A({color:i.getColor(s.message.user_color)}),href:`https://www.twitch.tv/${s.username}`,target:"_blank",rel:"noopener noreferrer"},_(s.username),13,ue),fe,(a(!0),n(w,null,v(s.message.fragments,o=>(a(),n("div",he,[o.emoticon?(a(),n("img",{key:0,class:"inline pr-1",src:`https://static-cdn.jtvnw.net/emoticons/v1/${o.emoticon.emoticon_id}/2.0`,alt:o.text,height:"28",width:"28"},null,8,me)):(a(),n("span",_e,_(o.text),1))]))),256))]))),256)),x(f,{spinner:"2",forceUseInfiniteWrapper:"true",distance:200,identifier:e.infinite_id,onInfinite:i.loadComments,class:"even:bg-gray-800"},{"no-more":S(()=>[y("end of chat ("+_(this.comments.length)+" messages)",1)]),"no-results":S(()=>[ge]),_:1},8,["identifier","onInfinite"])])])])}var be=V(H,[["render",pe],["__scopeId","data-v-410ab57a"]]);C.add(B);C.add(E);C.add(O);W(be).component("font-awesome-icon",F).mount("#app");
