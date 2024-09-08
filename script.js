document.getElementById('generate-user').addEventListener('click', generateUser);

function generateUser() {
    fetch ('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="User Picture">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
                `;
            document.getElementById('user-info').innerHTML = userInfo;    
                 
        })
    
    .catch(error => console.error('Erro ao buscar usuário:', error));
}
// gera um usuario automaticamente ao carregar a pagina
generateUser();