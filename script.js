const countrySelect = document.getElementById('country-select');
async function CountryWorld() {
       const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
        .then( response=>response.json())
        .then(value => {
            const Countries = value.data;  

            countrySelect.innerHTML = '';  // select tag ko clear karane ke liye
            
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'kisi ek country ko choose karo :)';
            countrySelect.appendChild(defaultOption);  //default option element ko selectTag mai append karane ke liye

        Countries.forEach(country => {
            const option = document.createElement('option');
           option.value = country.name;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        })
    })
    }
CountryWorld();
const flagSearch=document.getElementById('search');
const countryInfo=document.getElementById('flagData');
flagSearch.addEventListener('click', async()=>{
            const selectCountry = countrySelect.value;
                    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
                    const data = await response.json();
                    const countryData = data.data.find(country => country.name === selectCountry);

                    const flagImage = document.createElement('img');
                    flagImage.src = countryData.flag;
                    flagImage.id=`flagy`;
                    flagImage.alt = `${countryData.name} Flag`;
                    const countryName = document.createElement('h1');
                    countryName.textContent = `Country: ${countryData.name}`;
                    const countryCode = document.createElement('h3');
                    countryCode.textContent = `ISO Code: ${countryData.iso2}`;
                    const countryCode2=document.createElement('h3');
                    countryCode2.textContent=`ISO Code2:${countryData.iso3}`;

                        // pahale ki image and info div tag se clear karane ke liye for new image
                    countryInfo.innerHTML = '';

                        // div tag mai append karane ke liye
                        countryInfo.appendChild(flagImage);
                        countryInfo.appendChild(countryName);
                        countryInfo.appendChild(countryCode);
                        countryInfo.appendChild(countryCode2);
        })
        



   










































































































// const flagUrl = countryData.flag;
// const name = countryData.country;
// const code = countryData.code;

// const flagData = `
//     <img src="${flagUrl}" alt="${name} Flag" width="100">
//     <p>Name: ${name}</p>
//     <p>Code: ${code}</p>
// `;

// document.getElementById('flagData').innerHTML = flagData;































//     .then((data)=>{
//         const countryData=data.data[0];
//         const countryImg=document.createElement('img');
//         countryImg.src=countryData.flag;
//         countryImg.alt=`${countrySelect}flag`;

//         const countryNameEle=document.createElement('p')
//         countryNameEle.textContent = `Country Name: ${countrySelect}`;

//         const countryCodeElement = document.createElement('p');
//         countryCodeElement.textContent = `Country Code: ${countryData.code}`;

//         countryInfo.appendChild(countryImg);
//         countryInfo.appendChild(countryNameEle);
//         countryInfo.appendChild(countryCodeElement);
// })
//   }
//   flags();
  
  

// const countrySelected=countrySelect.value;
// const countryCard = document.createElement("div");
// countryCard.classList.add("country-card");
// countryCard.innerHTML= `
//     <img src="${countrySelected.flag}" alt="${countrySelected.name} Flag">
//     <p><strong>Name:</strong> ${countrySelected.name}</p>
//     <p><strong>Code:</strong> ${countrySelected.code}</p>
// `;

// countryCard.innerHTML = '';

// const flagy= fetch ('https://countriesnow.space/api/v0.1/countries/flag/images')
// .then(flagy=>flagy.json())
// .then(data=>{
//         const count=data.data
        

//         // for(item in count){
//         //     console.log(count[item]);
//         // }
    
// })
    
// flagSearch.addEventListener('click',()=>{
//     const countrySelected=countrySelect.value;
// const countryCard = document.createElement("div");
// countryCard.classList.add("country-card");
// countryCard.innerHTML= `
//     <img src="${countrySelected.flag}" alt="${countrySelected.name} Flag">
//     <p><strong>Name:</strong> ${countrySelected.name}</p>
//     <p><strong>Code:</strong> ${countrySelected.code}</p>
// `;

// countryCard.innerHTML = '';
// countryInfo.appendChild(countryCard)
    

// })