async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
};

async function getChefBirthday(id){
    try {
        const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
        const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
        return user.birthDate;
    }catch(error){
        console.error(error)
    }finally{
        console.log("Fine")
    }
}

getChefBirthday(1)
    .then(birthday => console.log("Compleanno:", birthday))
    .catch(error => console.error(error))