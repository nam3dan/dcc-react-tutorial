let cars = [
    {make: 'Acura', model: 'RDX', year: 2007},
    {make: 'Ford', model: 'Mustang', year: 1966},
    {make: 'Tesla', model: 'Model X', year: 2022},
]

let htmlPTagsCarInfo = cars.map((car) => {
    return `<p>${car.make}</p>`;
})

console.log(htmlPTagsCarInfo);