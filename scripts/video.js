

const create= ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')

    .then(res => res.json())
    .then(data=> display(data.categories))

    .catch(error=> console.error("caught error"))


}

function getTime(time){
    const hours = parseInt(time/3600);

    let remainingHour = time%3600

    const min = parseInt(remainingHour/60)
   let remainingMin = remainingHour%60;

   const sec =remainingMin;

    return `${hours} hours ${min} min ${sec} sec ago`
}




const display = (data)=>{
    const category = document.getElementById('categories')
   data.forEach(element => {
    
   


    // create a button
    const button =document.createElement('button')

    // btn.classList.add 1 ta kore add kora jai 

    // nicher way te onk gulo eksathe add kora jai
    button.classList ="btn";

    button.innerText=element.category;


    category.append(button)

   });

}

create();

const loadVideo =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data=> videoDisplay(data.videos))

    .catch(error=> console.log(error))
}




const videoDisplay =(video) =>{
    
    const vidCon = document.getElementById('videos')
    console.log(video);
    video.forEach((element) => {
        const card =document.createElement('div')

      
        card.classList='card card-compact bg-base-100'

        card.innerHTML=`

         <figure class="h-[200px] relative">
    <img
      src="${element.thumbnail}"
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${element.others.posted_date?.length === 0 ? "" : ` <span class="absolute bg-black text-white text-xs right-3 rounded-md bottom-4 p-1
      ">${getTime(element.others.posted_date)} </span>`}
     
  </figure>
    
    <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${element.authors[0].profile_picture}   />
    </div>
     <div>
    <h2 class="font-bold">${element.title}</h2>

    <div class="flex items-center gap-2">
    <p>${element.authors[0].profile_name}</p>

    ${element.authors[0].verified === true ?  '<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>'
     : ""}

    </div>

    </div>
  </div>

        `
    //    ${isvarified ===true ?  "if true then what will happen" :  "if false then what will happen"}

        vidCon.append(card);

    });
}

loadVideo();
