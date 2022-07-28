// Create a array of  country objects having name capital and population as properties Print the countries whose population is less than 2000

let country= [
    
           {
                name:"India",
                capital:"Dehli",
                population:1900

            },
            {
                name:"USA",
                capital:"Washington DC",
                population:5000

            },
            {
                name:"China",
                capital:"Beijing",
                population:2100

            },
            {
                name:"Japan",
                capital:"Tokyo",
                population:1500

            },

            {
                name:"United Kingdom",
                capital:"London",
                population:3000

            },
            

        ]
        

        for(let i=0;i<country.length;++i){
            if(country[i].population<=2000){
        console.log(country[i].name);
            }
        }
