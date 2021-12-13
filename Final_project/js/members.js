requestURL = 'https://raw.githubusercontent.com/OmarGarza01/wdd230/master/Final_project/json/members.json';

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject){
    const members = jsonObject['members'];
    for (let i = 0; i < members.length; i++ ) {
        let member = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let p = document.createElement('p');
       

        h2.textContent = members[i].name;
        image.setAttribute('src', members[i].photo);
        p.textContent = members[i].address;
       


        member.appendChild(h2);
        member.appendChild(image);
        member.appendChild(p);
        


        document.querySelector('div.members').appendChild(member);

    }

});