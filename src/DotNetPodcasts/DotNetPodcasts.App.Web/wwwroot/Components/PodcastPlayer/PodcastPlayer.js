dotvvm.events.initCompleted.subscribe(()=>{let o=document.querySelector(".player-panel").getAttribute("data-prop-name"),n=document.querySelector(".player-panel__playback-tools__timer > input"),c=n.getAttribute("data-prop-name");n.addEventListener("change",function(e){let t=e.target.value,a={[o]:{[c]:[t]}};dotvvm.patchState(a)});let p=document.querySelector(".player-panel__playback-options__volume > input"),r=p.getAttribute("data-prop-name");p.addEventListener("change",function(e){let t=e.target.value,a={[o]:{[r]:[t]}};dotvvm.patchState(a)})});
