let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml=""
    for(item in contests){
        console.log(contests[item])
        ihtml+=`
        <div class="card mx-2" style="width: 22rem;">
        <img src="https://imgs.search.brave.com/9UcPxYnSrgtZAUMuZ7BpkKKN60jSj57Qr4RTDJjdWjE/rs:fit:990:660:1/g:ce/aHR0cHM6Ly93d3cu/ZXRvbmRpZ2l0YWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE0LzEwL0dyZWF0/LVByb2dyYW1taW5n/LUNvbnRlc3RzLWZv/ci1FbnRodXNpYXN0/cy1hbmQtUHJvZ3Jh/bW1lcnMtdG8tYmUt/OTkweDY2MC5qcGc" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is: ${contests[item].status} and the site is: ${contests[item].site}</p>
          <p class="card-text">In 24 hours: ${contests[item].in_24_hours}</p>
          <p>Starts at:${contests[item].start_time}
          <p>Ends at:${contests[item].end_time}
          <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML=ihtml
})
