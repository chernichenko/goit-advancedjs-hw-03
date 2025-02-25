import{i as c,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=async s=>{const n=`https://pixabay.com/api/?key=49047505-943fdeb799f69f50e2a05df2c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(n)).json()).hits}catch(t){return console.error("Error fetching images:",t),[]}},u=s=>{const o=document.querySelector(".gallery");if(o.innerHTML="",s.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s.forEach(t=>{const e=document.createElement("div");e.classList.add("image-card"),e.innerHTML=`
      <a href="${t.largeImageURL}" class="gallery-link">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" />
      </a>
      <div class="image-info">
        <p><strong>Likes</strong> <span>${t.likes}</span></p>
        <p><strong>Views</strong> <span>${t.views}</span></p>
        <p><strong>Comments</strong> <span>${t.comments}</span></p>
        <p><strong>Downloads</strong> <span>${t.downloads}</span></p>
      </div>
    `,o.appendChild(e)}),new l(".gallery a").refresh()},p=()=>{document.querySelector(".loader").classList.add("active")},f=()=>{document.querySelector(".loader").classList.remove("active")},i=document.querySelector(".form"),m=i.querySelector('input[type="text"]');i.querySelector('button[type="submit"]');i.addEventListener("submit",async s=>{s.preventDefault();const o=m.value.trim();if(!o)return;p();const n=await d(o);u(n),f()});
//# sourceMappingURL=index.js.map
