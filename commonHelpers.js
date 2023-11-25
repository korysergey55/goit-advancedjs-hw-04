import{a as L,S as v,i}from"./assets/vendor-cbe3413a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const _="https://pixabay.com/api/",$="21698474-fb36d7b3400c91ab3d227d6db",d=40,f=async(r="",o=1)=>{const a=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:o});try{return(await L.get(`${_}?key=${$}&${a}`)).data}catch(s){throw console.log(s),new Error(s)}},m=document.querySelector("#search-form"),g=document.querySelector(".gallery"),u=document.querySelector(".load-more");new v(".gallery a",{captions:!0,captionDelay:250});let c={},l=1;m.addEventListener("submit",S);u.addEventListener("click",E);async function S(r){g.innerHTML="",r.preventDefault(),new FormData(r.currentTarget).forEach((s,e)=>{c[e]=s});const a=await f(c.searchQuery,l);h(a),m.reset()}async function h(r){const{hits:o,total:a}=r;if(console.log(r),!o.length){i.show({title:"",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."});return}o.length>=d&&i.show({title:"",color:"green",position:"topCenter",message:`Hooray! We found totalHits images ${a}`});const s=o.map(({webformatURL:e,largeImageURL:t,tags:n,likes:p,views:y,comments:b,downloads:w})=>`
    <li class='gallery__item'>
      <div class="gallery__card">
        <a class="gallery__link" href='${t}'>
          <img
            class="gallery__image"
            src=${e} 
            alt=${n} 
            data-source="${e}" 
            loading="lazy" />
        </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${p}
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
               ${w}
            </p>
          </div>
      </div>
    </li>
  `).join("");g.insertAdjacentHTML("beforeend",s),u.classList.remove("visually-hidden")}async function E(){l+=1;const r=await f(c.searchQuery,l);h(r),r.hits.length<d&&(u.classList.add("visually-hidden"),i.show({title:"",color:"red",position:"topRight",message:"We're sorry, but you've reached the end of search results."}));const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
