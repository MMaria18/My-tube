

const create= ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')

    .then(res => res.json())
    .then(data=> display(data.categories))

    .catch(error=> console.error("caught error"))


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

         <figure class="h-[200px]">
    <img
      src="${element.thumbnail}"
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
    
    <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${element.authors[0].profile_picture}   />
    </div>
     <div>
    <h2 class="font-bold">${element.title}</h2>

    <div class="flex items-center gap-2">
    <p>${element.authors[0].profile_name}</p>
    <img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>
    </div>

    </div>
  </div>

        `
       

        vidCon.append(card);

    });
}

loadVideo();