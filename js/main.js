// The foloowing code will load the loacl json file then take that  info and place it onto the html page.
// This should safe space and allow the opportunity to update the restaurants menu without changing the menu itslef.

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        // console.log(response.food);

        // food
        // breakfast output
        var outputB = "",
            // lunch output
            outputL = "",
            // output dinner
            outputD = "",
            // output dessert
            outputDe = "",
            // store parsed json into variables
            breakfast = response.food.breakfast,
            lunch = response.food.lunch,
            dinner = response.food.dinner,
            dessert = response.food.dessert;

        // possible function to take in multiple parameters to lessen code

        // function food(props) {
        //     for (var i = 0; i < response.food.props.length; i++) {
        //         props.output += '<li>' + '<strong>' + response.food.props[i].title + ' - ' + response.food.props[i].price + '</strong> <br>' + response.food.props[i].desc + '</li>';
        //     }
        // }
        // food({
        //     breakfast,
        //     output: outputB
        // });

        // loop through json and place into outputs

        // breakfast
        for (var i = 0; i < breakfast.length; i++) {
            outputB += '<li>' + '<strong>' + breakfast[i].title + ' - ' + breakfast[i].price + '</strong> <br>' + breakfast[i].desc + '</li>';
        }
        // // // lunch
        for (var i = 0; i < lunch.length; i++) {
            outputL += '<li>' + '<strong>' + lunch[i].title + ' - ' + lunch[i].price + '</strong> <br>' + lunch[i].desc + '</li>';
        }
        // // // dinner
        for (var i = 0; i < dinner.length; i++) {
            outputD += '<li>' + '<strong>' + dinner[i].title + ' - ' + dinner[i].price + '</strong> <br>' + dinner[i].desc + '</li>';
        }
        // dessert
        for (var i = 0; i < dessert.length; i++) {
            outputDe += '<li>' + '<strong>' + dessert[i].title + ' - ' + dessert[i].price + '</strong> <br>' + dessert[i].desc + '</li>';
        }
        // display outputs to both mobile and desktop menus

        // breakfast
        var bMenu = document.querySelectorAll(".breakfast");
        for (var i = 0; i < bMenu.length; i++) {
            bMenu[i].innerHTML = outputB;
        }
        // lunch
        var lMenu = document.querySelectorAll(".lunch");
        for (var i = 0; i < bMenu.length; i++) {
            lMenu[i].innerHTML = outputL;
        }
        // dinner
        var dMenu = document.querySelectorAll(".dinner");
        for (var i = 0; i < dMenu.length; i++) {
            dMenu[i].innerHTML = outputD;
        }
        // dessert
        var deMenu = document.querySelectorAll(".dessert");
        for (var i = 0; i < deMenu.length; i++) {
            deMenu[i].innerHTML = outputDe;
        }

        // drink outputs

        // white wine
        var outputWw = "",
            // red wine
            outputWr = "",
            // dessert wine
            outputWd = "",
            // domestic beer
            outputBd = "",
            // imported beer
            outputBi = "",
            // local beer
            outputBl = "",
            // coffee
            outputC = "",
            // loop through json and place into outputs
            wineWhite = response.drinks.wine[0].white,
            wineRed = response.drinks.wine[0].red,
            wineDessert = response.drinks.wine[0].dessert,
            beerDomestic = response.drinks.beer[0].domestic,
            beerImported = response.drinks.beer[0].imported,
            beerLocal = response.drinks.beer[0].local,
            coffee = response.drinks.coffee;

        // white wine
        for (var i = 0; i < wineWhite.length; i++) {
            outputWw += '<li>' + wineWhite[i].title + ' - ' + wineWhite[i].price_small + '/' + wineWhite[i].price_bottle + '</li>';
        }
        // red wine
        for (var i = 0; i < wineRed.length; i++) {
            outputWr += '<li>' + wineRed[i].title + ' - ' + wineRed[i].price_small + '/' + wineRed[i].price_bottle + '</li>';
        }
        // dessert wine
        for (var i = 0; i < wineDessert.length; i++) {
            outputWd += '<li>' + wineDessert[i].title + ' - ' + wineDessert[i].price_small + '/' + wineDessert[i].price_bottle + '</li>';
        }
        // domestic beer
        for (var i = 0; i < beerDomestic.length; i++) {
            outputBd += '<li>' + beerDomestic[i].title + ' - ' + beerDomestic[i].priceSmall + '/' + beerDomestic[i].priceLarge + '</li>';
        }
        // imported beer
        for (var i = 0; i < beerImported.length; i++) {
            outputBi += '<li>' + beerImported[i].title + ' - ' + beerImported[i].priceSmall + '/' + beerImported[i].priceLarge + '</li>';
        }
        // local beer
        for (var i = 0; i < beerLocal.length; i++) {
            outputBl += '<li>' + beerLocal[i].title + ' - ' + beerLocal[i].priceSmall + '/' + beerLocal[i].priceLarge + '</li>';
        }
        // coffee
        for (var i = 0; i < coffee.length; i++) {
            outputC += '<li>' + coffee[i].title + ' - ' + coffee[i].price + '</li>';
        }

        // display outputs to both mobile and desktop menus

        // white wine
        var wwMenu = document.querySelectorAll(".white");
        for (var i = 0; i < wwMenu.length; i++) {
            wwMenu[i].innerHTML = outputWw;
        }
        // red wine
        var wrMenu = document.querySelectorAll(".red");
        for (var i = 0; i < wrMenu.length; i++) {
            wrMenu[i].innerHTML = outputWr;
        }
        // dessert
        var wdMenu = document.querySelectorAll(".wineDessert");
        for (var i = 0; i < wdMenu.length; i++) {
            wdMenu[i].innerHTML = outputWd;
        }
        // domestic beer
        var bdMenu = document.querySelectorAll(".domestic");
        for (var i = 0; i < bdMenu.length; i++) {
            bdMenu[i].innerHTML = outputBd;
        }
        // imported beer
        var biMenu = document.querySelectorAll(".imported");
        for (var i = 0; i < biMenu.length; i++) {
            biMenu[i].innerHTML = outputBi;
        }
        // local beer
        var blMenu = document.querySelectorAll(".local");
        for (var i = 0; i < blMenu.length; i++) {
            blMenu[i].innerHTML = outputBl;
        }
        // coffee
        var cMenu = document.querySelectorAll(".coffee");
        for (var i = 0; i < cMenu.length; i++) {
            cMenu[i].innerHTML = outputC;
        }
    }
};
xhttp.open("GET", "../data/menu.JSON", true);
xhttp.send();