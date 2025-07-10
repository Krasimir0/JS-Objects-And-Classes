function CreateEmployee(arr) {
    let objOfEmployees = {};

    for (const employee of arr) {
        objOfEmployees[employee] = employee.length
    }

    for (const employee in objOfEmployees) {
        console.log(`Name: ${employee} -- Personal Number: ${objOfEmployees[employee]}`);
    }
}




CreateEmployee([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)