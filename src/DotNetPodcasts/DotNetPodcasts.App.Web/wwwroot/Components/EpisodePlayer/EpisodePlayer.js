dotvvm.events.initCompleted.subscribe(()=>{let o=document.querySelector(".player-panel").getAttribute("data-prop-name"),p="EpisodePlayerViewModel",n=document.querySelector(".player-panel__playback-tools__timer > input"),r=n.getAttribute("data-prop-name");n.addEventListener("change",function(e){let t=e.target.value,a={[p]:{[o]:{[r]:[t]}}};dotvvm.patchState(a)});let c=document.querySelector(".player-panel__playback-options__volume > input"),l=c.getAttribute("data-prop-name");c.addEventListener("change",function(e){let t=e.target.value,a={[p]:{[o]:{[l]:[t]}}};dotvvm.patchState(a)})});