const btn=document.getElementById("btn");
const key ="3699fe7858c646c8b59145534243007";
btn.addEventListener("click",async ()=>{
    let city=(document.getElementById("input").value).toLowerCase();
    try {
        const d = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`);
        const nd = await d.json();

        const cityName = nd.location.name;
        const region = nd.location.region;
        const country = nd.location.country;
        const temperature = nd.current.temp_c;
        const condition = nd.current.condition.text;
        const iu=nd.current.condition.icon;
        document.getElementById("res").innerHTML=`:${cityName}`;
        document.getElementById("res2").innerHTML=`:${region}`;
        document.getElementById("res3").innerHTML=`:${country}`;
        document.getElementById("res4").innerHTML=`:${temperature}`;
        document.getElementById("res5").innerHTML=`:${condition}`;
        document.getElementById("img").style.backgroundImage=`url(${iu})`;
        document.getElementById("dt").innerHTML=nd.location.localtime;
        console.log(nd);
    } catch (error) {
        console.log(error);
        alert("Enter valid name");
    }
}); 