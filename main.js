fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        const mainDiv = document.createElement('div');
        mainDiv.style.display = 'flex';
        mainDiv.style.width = '100%';
        mainDiv.style.flexWrap = 'wrap';
        mainDiv.style.justifyContent = 'center';
        mainDiv.style.textalign = 'center';
        mainDiv.style.textAlign = 'center';

        for (let user of value) {
            const userDiv = document.createElement('div');
            const detailInfo = document.createElement('button');
            const nextPage = document.createElement('a');

            userDiv.style.margin = '5px';
            userDiv.style.width = '45%';
            userDiv.style.border = '5px darkcyan inset';
            userDiv.style.backgroundColor = 'cyan';

            userDiv.innerHTML = `<h2>ID - ${user.id}<br>
        Name - ${user.name}</h2>`;
            detailInfo.style.width = '90%';
            detailInfo.style.backgroundColor = '#00ced1';
            detailInfo.style.border = '#043434 2px solid';

            nextPage.innerHTML = 'detail info';
            nextPage.href = `user-details.html?userId=${user.id}`;
            nextPage.style.textDecoration = 'none';
            nextPage.style.color = 'black';
            mainDiv.append(userDiv);
            userDiv.append(detailInfo);
            detailInfo.append(nextPage);
        }
        document.body.append(mainDiv);
    });
