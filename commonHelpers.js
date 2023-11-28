import{a as w,S as v,i as c}from"./assets/vendor-cbe3413a.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/",_="21698474-fb36d7b3400c91ab3d227d6db",u=40,f=async(r,i=1)=>{if(!r)return;const o=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:i});try{return(await w.get(`${S}?key=${_}&${o}`)).data}catch(s){throw console.log(s),new Error(s)}},m=document.querySelector("#search-form"),h=document.querySelector(".gallery"),n=document.querySelector(".load-more");document.querySelector(".js-guard");let g=new v(".gallery a",{captions:!0,captionDelay:250});document.querySelector("#scrollArea");let d={},l=1;m.addEventListener("submit",$);n.addEventListener("click",q);async function $(r){r.preventDefault(),h.innerHTML="",n.classList.add("visually-hidden"),new FormData(r.currentTarget).forEach((s,e)=>{d[e]=s.trim()}),m.reset(),l=1;const o=await f(d.searchQuery,l);if(!o||!o.hits.length){c.show({title:"",color:"red",position:"topCenter",message:"Sorry, there are no images matching your search query. Please try again."});return}o.totalHits>0&&c.show({title:"",color:"green",position:"topCenter",message:`Hooray! We found totalHits images ${o.totalHits}`}),o.hits.length>=u&&n.classList.remove("visually-hidden"),p(o),g.refresh()}async function p(r){if(!r)return;const{hits:i}=r,o=i.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:y,comments:b,downloads:L})=>`
    <li class='gallery__item'>
      <div class="gallery__card">
        <a class="gallery__link" href='${e}'>
          <img
            class="gallery__image"
            src=${s} 
            alt=${t} 
            data-source="${s}" 
            loading="lazy" />
        </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${a}
            </p>
            <p class="info-item">
               <b>Views</b>
                ${y}
            </p>
            <p class="info-item">
               <b>Comments</b>
                ${b}
            </p>
            <p class="info-item">
              <b>Downloads</b>
               ${L}
            </p>
          </div>
      </div>
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",o)}async function q(){l+=1;const r=await f(d.searchQuery,l);p(r),g.refresh(),r.hits.length<u&&(n.classList.add("visually-hidden"),c.show({title:"",color:"red",position:"topRight",message:"We're sorry, but you've reached the end of search results."}));const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
