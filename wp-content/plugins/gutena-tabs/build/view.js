(()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".gutena-tabs-block");e?.forEach(((e,a)=>{const c=e?.querySelectorAll(".gutena-tabs-tab .gutena-tab-title");c?.forEach(((e,a)=>{e.addEventListener("click",(n=>{n.preventDefault(),t(c,a);let s=e?.closest(".gutena-tabs-block"),l=s.querySelectorAll(".gutena-tabs-content .gutena-tab-block");t(l,a)}))}));const n=e?.querySelectorAll(".gutena-tabs-content .wp-block-button a");n?.forEach(((e,a)=>{e.addEventListener("click",(a=>{const c=e?.getAttribute("href");if(c?.includes("#gutenatab")){a.preventDefault();const n=parseInt(c.replace("#gutenatab",""));if(n){let a=e?.closest(".gutena-tabs-block");const c=a?.querySelectorAll(".gutena-tabs-tab .gutena-tab-title");t(c,n-1);let s=a.querySelectorAll(".gutena-tabs-content .gutena-tab-block");t(s,n-1)}}}))}))}))}));const t=(t,e)=>{t?.forEach(((t,e)=>{t?.classList.contains("active")&&t?.classList.remove("active"),t?.classList.add("inactive")})),t[e]?.classList.contains("inactive")&&t[e]?.classList.remove("inactive"),t[e]?.classList.add("active")}})();