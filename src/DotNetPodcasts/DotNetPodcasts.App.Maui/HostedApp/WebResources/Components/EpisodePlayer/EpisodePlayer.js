var u=n=>new a(n),a=class{constructor(l){this.context=l,dotvvm.events.initCompleted.subscribe(()=>{let r=document.querySelector(".player-panel").getAttribute("data-prop-name"),c="EpisodePlayerViewModel",p=document.querySelector(".player-panel__playback-tools__timer > input"),d=p.getAttribute("data-prop-name");p.addEventListener("change",function(e){let t=e.target.value,o={[c]:{[r]:{[d]:t}}};dotvvm.patchState(o)});let s=document.querySelector(".player-panel__playback-options__volume > input"),i=s.getAttribute("data-prop-name");s.addEventListener("change",function(e){let t=e.target.value,o={[c]:{[r]:{[i]:t}}};dotvvm.patchState(o)}),window.setInterval(function(){document.getElementById("refresh-button").click()},1e3)})}};export{u as default};
