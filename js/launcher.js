(function(){
  function initLauncherWizard(){
    const root=document.getElementById('launcherWizard');
    if(!root) return;
    const panels=[...root.querySelectorAll('.wizard-panel')];
    const next=document.getElementById('wizardNextBtn');
    const back=document.getElementById('wizardBackBtn');
    const start=document.getElementById('wizardContinueBtn');
    const nav=root.querySelector('.wizard-nav');
    const fill=document.getElementById('wizardProgressFill');
    const stepLabel=document.getElementById('wizardStepLabel');
    const progressText=document.getElementById('wizardProgressText');
    const monetizeInput=document.getElementById('monetizeInput');
    const monetizeOptions=[...document.querySelectorAll('#monetizeOptionList .wizard-option-card')];
    const pillOptions=[...document.querySelectorAll('#create .wizard-pill-option')];
    let index=0;

    monetizeOptions.forEach(option=>{
      option.addEventListener('click',()=>{
        monetizeOptions.forEach(card=>card.classList.remove('active'));
        option.classList.add('active');
        if(monetizeInput) monetizeInput.value = option.dataset.value || option.textContent.trim();
      });
    });

    pillOptions.forEach(option=>{
      option.addEventListener('click',()=>{
        const targetId = option.dataset.targetInput;
        const targetInput = targetId ? document.getElementById(targetId) : null;
        const group = option.parentElement?.querySelectorAll('.wizard-pill-option') || [];
        group.forEach(card=>card.classList.remove('active'));
        option.classList.add('active');
        if(targetInput) {
          targetInput.value = option.dataset.value || option.textContent.trim();
          targetInput.dispatchEvent(new Event('change', {bubbles:true}));
        }
      });
    });
    function show(i){
      index=Math.max(0,Math.min(i,panels.length-1));
      panels.forEach((p,n)=>p.classList.toggle('active',n===index));
      const pct=(index/(panels.length-1))*100;
      if(fill){
        fill.style.height=pct+'%';
        fill.style.width=pct+'%';
      }
      if(stepLabel) stepLabel.textContent=index===0?'00':String(index).padStart(2,'0');
      if(progressText) progressText.textContent=panels[index]?.dataset.label || 'Step';
      const preview=document.querySelector('#create .wizard-preview');
      if(preview) preview.classList.toggle('preview-visible', index===panels.length-1);
      if(nav) nav.classList.toggle('start-hidden', index===0);
      if(back) back.style.visibility=index===0?'hidden':'visible';
      if(next){
        next.style.display=index===panels.length-1?'none':'inline-flex';
        next.innerHTML=index===0?'Continue <span>→</span>':'Next <span>→</span>';
      }
      root.scrollIntoView({block:'start',behavior:'smooth'});
    }
    next?.addEventListener('click',()=>show(index+1));
    start?.addEventListener('click',()=>show(1));
    back?.addEventListener('click',()=>show(index-1));
    document.getElementById('generateDraftBtn')?.addEventListener('click',()=>show(panels.length-1));
    window.resetLauncherWizard = ()=>show(0);
    show(0);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initLauncherWizard); else initLauncherWizard();
})();
