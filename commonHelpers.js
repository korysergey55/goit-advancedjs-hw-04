import{a as v,S,i}from"./assets/vendor-cbe3413a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const _="https://pixabay.com/api/",$="21698474-fb36d7b3400c91ab3d227d6db",d=40,f=async(o,r=1)=>{if(!o)return;const a=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:r});try{return(await v.get(`${_}?key=${$}&${a}`)).data}catch(s){throw console.log(s),new Error(s)}},m=document.querySelector("#search-form"),h=document.querySelector(".gallery"),u=document.querySelector(".load-more");document.querySelector(".js-guard");let g=new S(".gallery a",{captions:!0,captionDelay:250});document.querySelector("#scrollArea");let l={},c=1;m.addEventListener("submit",q);u.addEventListener("click",E);async function q(o){h.innerHTML="",o.preventDefault(),new FormData(o.currentTarget).forEach((s,e)=>{l[e]=s});const a=await f(l.searchQuery,c);p(a),g.refresh(),m.reset()}async function p(o){const{hits:r,total:a}=o;if(console.log(o),!r.length){i.show({title:"",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."});return}r.length>=d&&i.show({title:"",color:"green",position:"topCenter",message:`Hooray! We found totalHits images ${a}`});const s=r.map(({webformatURL:e,largeImageURL:t,tags:n,likes:y,views:b,comments:w,downloads:L})=>`
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
              ${y}
            </p>
            <p class="info-item">
               <b>Views</b>
                ${b}
            </p>
            <p class="info-item">
               <b>Comments</b>
                ${w}
            </p>
            <p class="info-item">
              <b>Downloads</b>
               ${L}
            </p>
          </div>
      </div>
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",s),u.classList.remove("visually-hidden")}async function E(){c+=1;const o=await f(l.searchQuery,c);p(o),g.refresh(),o.hits.length<d&&(u.classList.add("visually-hidden"),i.show({title:"",color:"red",position:"topRight",message:"We're sorry, but you've reached the end of search results."}));const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
