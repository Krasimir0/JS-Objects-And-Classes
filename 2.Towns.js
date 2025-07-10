function createTowns(arr) {

    for (const city of arr) {
        let [NameOfTown, latitude, longitude] = city.split(' | ');
        let ObjOfTowns = {
            town: NameOfTown,
            latitude: Number(parseFloat(latitude).toFixed(2)),
            longitude: Number(parseFloat(longitude).toFixed(2))
        }
        console.log(ObjOfTowns);
    }
}


createTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])