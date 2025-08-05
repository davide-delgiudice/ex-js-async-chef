async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
};

async function getChefBirthday(id){
    try{
        const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);

        if(recipe.message){
            throw new Error(recipe.message);
        }
        
        const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
        return user.birthDate;
    }catch(error){
        console.error(error)
    }
}

// getChefBirthday(1)
//     .then(birthday => console.log("Compleanno:", birthday))
//     .catch(error => console.error(error))

// nuovo metodo
(async() => {
    const birthday = await getChefBirthday(1);
    console.log('Compeanno Chef:', birthday);
    console.log('Fine');
})();