function createInventory(arr) {
    let objOfHeroes = {};
    let arrOfObj = [];
    for (const hero of arr) {
        let [heroName, heroLevel, heroItems] = hero.split(' / ')
        arrOfObj.push({
            Hero: heroName,
            level: Number(heroLevel),  
            items: heroItems
        })
    }
   arrOfObj.sort((a,b) => a.level - b.level).forEach(heroObj => {
           console.log(`Hero: ${heroObj.Hero}`);
           console.log(`level => ${heroObj.level}`);
           console.log(`items => ${heroObj.items}`);
   })
}


createInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)