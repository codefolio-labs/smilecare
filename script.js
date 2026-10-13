const popup = document.getElementById('popup');
const bookNowBtn = document.getElementById('bookNowBtn');
const topBookBtn = document.getElementById('topBookBtn');
const closeBtn = document.getElementById('closeBtn');
const confirmBtn = document.getElementById('confirmBtn');
const contactBtn = document.getElementById('contactBtn');

bookNowBtn.onclick = (e)=>{e.preventDefault(); popup.classList.add('active');};
topBookBtn.onclick = (e)=>{e.preventDefault(); popup.classList.add('active');};
closeBtn.onclick = ()=> popup.classList.remove('active');
popup.onclick = (e)=>{ if(e.target==popup) popup.classList.remove('active'); };

confirmBtn.onclick = (e)=>{
  e.preventDefault();
  document.querySelector('.popup-box').innerHTML = `
    <h2 style="text-align:center">✅ Booked!</h2>
    <p style="text-align:center;margin:15px 0">We will call you soon.</p>
    <button class="btn-black" style="width:100%;padding:12px;border-radius:100px" onclick="location.reload()">Done</button>
  `;
};

contactBtn.onclick = ()=>{
  window.open('https://wa.me/923000000000?text=Hi SmileCare','_blank');
};



