// Find the index of the object with model value as “X5” and print the price and brand through the “carList[searchIndex]” object reference. Read more about Array.findIndex() from developer.mozilla.org/Array/findIndex.


const carList = [{ id:13, brand: "BMW", model: "X5", price:"$23000", release_date:"2015-10-12"},

                 { id:9, brand: "Audi", model: "S3", price:"$35000", release_date:"2013-08-23"},

                 { id:11, brand: "Bugatti", model: "Veyron", price:"$500000", release_date:"2006-02-10"},
                 
                 { id:7, brand: "VW", model: "Polo", price:"$8000", release_date:"2018-05-03"},
                
                 { id:4, brand: "Fiat", model: "Punto", price:"$6000", release_date:"2017-01-25"}]


const searchIndex = carList.findIndex((car) => car.model=="XS");
console.log(`Model XS is present in brand ${carList[searchIndex].brand}`}


