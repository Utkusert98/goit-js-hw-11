import{S as h,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const c=document.getElementById("search-form"),s=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".loading-text"),y="https://pixabay.com/api/",g="51573192-1104e7b47bcf1a597d33c16a5",u=new h(".gallery a");window.addEventListener("DOMContentLoaded",()=>{const n=new URLSearchParams(window.location.search).get("query");n&&(c.searchQuery.value=n,m(n))});c.addEventListener("submit",async r=>{r.preventDefault();const n=c.searchQuery.value.trim();n&&(v(n),m(n))});function v(r){const n=`${window.location.pathname}?query=${encodeURIComponent(r)}`;window.history.pushState({path:n},"",n)}async function m(r){s.innerHTML="",s.style.display="none",f.hidden=!1,p.hidden=!1;try{const n=await w(r);if(n.hits.length===0){d.warning({class:"my-warning-toast",message:"Sorry, no images match your search. Please try again!",position:"topRight"}),i();return}L(n.hits)}catch{d.error({message:"Something went wrong. Please try again later.",position:"topRight"}),i()}}function i(){f.hidden=!0,p.hidden=!0,s.style.display="grid"}function w(r){const n=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${n}`).then(a=>{if(!a.ok)throw new Error("Fetch failed");return a.json()})}function L(r){const n=r.map(e=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <div class="info-column">
              <span class="info-label">Likes</span>
              <span class="info-value">${e.likes}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Views</span>
              <span class="info-value">${e.views}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Comments</span>
              <span class="info-value">${e.comments}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Downloads</span>
              <span class="info-value">${e.downloads}</span>
            </div>
          </div>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",n);const a=s.querySelectorAll("img.gallery-image");let o=0;if(a.length===0){i(),u.refresh();return}a.forEach(e=>{e.complete?t():(e.addEventListener("load",t),e.addEventListener("error",t))});function t(){o++,o===a.length&&(i(),u.refresh())}}
//# sourceMappingURL=index.js.map
