var cookieClickInterval = 0;
var cookieClickIntervalTime = 70;
var cookieClickEvent = document.createEvent("Event");
var cookiesPerClick = 0; // when greater than 0 each click will earn you the amount set, otherwise uses calculated cookies per click from the game

ClickCookie = function() {
    Game.ClickCookie(cookieClickEvent, cookiesPerClick);
}

StartClickingCookie = function() {
    clearInterval(cookieClickInterval);
    cookieClickInterval = setInterval(ClickCookie, cookieClickIntervalTime);
}

StopClickingCookie = function() {
    clearInterval(cookieClickInterval);
    cookieClickInterval = 0;
}

SpawnShimmer = function() {
    var goldenType = Game.shimmerTypes['golden'];
    if (!goldenType.spawned && goldenType.spawnConditions())
    {
        var newShimmer = new Game.shimmer('golden');
	newShimmer.spawnLead=1;
	goldenType.spawned=1;
    }
}

var shimmerClickEvent = document.createEvent("Event");

ShimmerWatcher = function() {
    for (var i in Game.shimmers)
    {
        var shimmer = Game.shimmers[i];
	shimmer.pop(shimmerClickEvent);
    }
}

var shimmerWatcher = 0;

StartShimmerWatcher = function() {
    clearInterval(shimmerWatcher);
    shimmerWatcher = setInterval(ShimmerWatcher, 100);
}

StopShimmerWatcher = function() {
    clearInterval(shimmerWatcher);
}

GetBestBuilding = function() { 
    var bestPricePerCps = Number.MAX_VALUE;
    var bestBuilding = null;

    for (var i in Game.Objects)
    {
        var building = Game.Objects[i];

        if (building.amount > 0)
        {
            var cps = (building.storedTotalCps / building.amount) * Game.globalCpsMult;
            var pricePerCps = building.bulkPrice / cps;
			
            if (pricePerCps < bestPricePerCps)
            {
                bestPricePerCps = pricePerCps;
                bestBuilding = building;
            }
        }
        else 
        {
            var cps = (building.storedCps) * Game.globalCpsMult;
            var pricePerCps = building.bulkPrice / cps;
	
            if (pricePerCps < bestPricePerCps && Game.cookies > building.bulkPrice)
            {
                bestPricePerCps = pricePerCps;
                bestBuilding = building;
            }
        }
    }
	
    return bestBuilding;
}

var buildingBuyer = 0;
var buildingBuyerInterval = 250;
var buildingBuyerNum = 1;

StopBuildingBuyer = function() {
    clearInterval(buildingBuyer);
}

StartBuildingBuyer = function() {
    clearInterval(buildingBuyer);

    buildingBuyer = setInterval(function() {
        for (var i = 0; i < buildingBuyerNum; ++i)
        {			
            var bestBuilding = GetBestBuilding();
            if (bestBuilding.bulkPrice < Game.cookies) {
                bestBuilding.buy(1);
            }
        }
    }, buildingBuyerInterval);
}

var upgradeBuyer = 0;
var upgradeBuyerInterval = 250;

StopUpgradeBuyer = function() {
    clearInterval(upgradeBuyer);
}

StartUpgradeBuyer = function() {
    clearInterval(upgradeBuyer);
	
    upgradeBuyer = setInterval(function() {
        for (var i in Game.UpgradesInStore)
        {
            var upgrade = Game.UpgradesInStore[i];
            if (upgrade.canBuy() && upgrade.pool != "toggle")
            {
                upgrade.buy(false);
            }
        }
    }, upgradeBuyerInterval);
}
