RMS.LoadLibrary("rmgen");

// terrain textures
const tOceanDepths = "medit_sea_depths";
const tOceanRockDeep = "medit_sea_coral_deep";
const tOceanRockShallow = "medit_rocks_wet";
const tOceanCoral = "medit_sea_coral_plants";
const tBeachWet = "medit_sand_wet";
const tBeachDry = "medit_sand";
const tBeachGrass = "medit_rocks_grass";
const tBeach = ["medit_rocks_grass","medit_sand", "medit_rocks_grass_shrubs"]
//const tBeachBlend = ["medit_rocks_grass","medit_grass_field_dry", "medit_grass_field_brown","medit_rocks_shrubs", "medit_rocks_grass_shrubs"];
const tBeachBlend = ["medit_rocks_grass", "medit_rocks_grass_shrubs"];
const tBeachCliff = "medit_dirt";
const tCity = "medit_city_tile";
//const tGrassDry = ["medit_grass_field_dry", "medit_grass_field_b"];
const tGrassDry = "temp_grass_mossy";
//const tGrass = ["medit_grass_field_dry", "medit_grass_field_brown", "medit_grass_field_b"];
//const tGrass = ["medit_rocks_grass", "medit_rocks_grass","medit_dirt","medit_rocks_grass_shrubs"];
const tGrass = ["tropic_grass_c", "tropic_grass_c", "tropic_grass_c", "tropic_grass_c", "tropic_grass_plants", "tropic_plants", "tropic_plants_b"];
const tGrassLush = ["grass_temperate_dry_tufts", "medit_grass_flowers"];
const tGrassShrubs = "medit_shrubs";
const tCliffShrubs = ["medit_cliff_aegean_shrubs", "medit_cliff_italia_grass","medit_cliff_italia"]
const tGrassRock = ["medit_rocks_grass"];
const tDirt = "medit_dirt";
//const tDirtGrass2 = "medit_dirt_b";
const tDirtGrass = "tropic_plants_c";
const tDirtCliff = "medit_cliff_italia";
const tGrassCliff = "medit_cliff_italia_grass";
//const tCliff = ["medit_cliff_italia", "medit_cliff_italia", "medit_cliff_italia_grass"];
const tCliff = ["tropic_cliff_a", "tropic_cliff_a", "tropic_cliff_a", "tropic_cliff_a_plants"];
//const tForestFloor = "medit_forestfloor_a";
const tForestFloor = "tropic_grass_plants";

//volcano
var tCliff2 = ["cliff volcanic coarse", "cave_walls"];
var tLava1 = "LavaTest05";
var tLava2 = "LavaTest04";
var tLava3 = "LavaTest03";
var aSmoke = "actor|particle/smoke.xml";

// gaia entities
const oBeech = "gaia/flora_tree_euro_beech";
const oBerryBush = "gaia/flora_bush_berry";
const oCarob = "gaia/flora_tree_carob";
const oCypress1 = "gaia/flora_tree_cypress";
const oCypress2 = "gaia/flora_tree_cypress";
const oLombardyPoplar = "gaia/flora_tree_poplar_lombardy";
const oTree = "gaia/flora_tree_toona";
const oOak = "gaia/flora_tree_oak";
const oPalm = "gaia/flora_tree_medit_fan_palm";
const oPine = "gaia/flora_tree_aleppo_pine";
const oPoplar = "gaia/flora_tree_poplar";
const oDateT = "gaia/flora_tree_cretan_date_palm_tall";
const oDateS = "gaia/flora_tree_cretan_date_palm_short";
const oChicken = "gaia/fauna_chicken";
const oCannibal = "units/maur_infantry_swordsman_a";
const oDeer = "gaia/fauna_deer";
const oFish = "gaia/fauna_fish";
const oWhale = "gaia/fauna_whale_humpback";
const oStoneLarge = "gaia/geology_stonemine_tropic_quarry";
const oStoneSmall = "gaia/geology_stone_tropic_a";
const oMetalLarge = "gaia/geology_metal_tropic_slabs";
const oMetalSmall = "gaia/geology_metal_tropic_slabs"
const oShipwreck = "other/special_treasure_shipwreck";
const oShipDebris = "other/special_treasure_shipwreck_debris";

// decorative props
const aBushLargeDry = "actor|props/flora/bush_medit_la_dry.xml";
const aBushLarge = "actor|props/flora/bush_medit_la.xml";
const aBushMedDry = "actor|props/flora/bush_medit_me_dry.xml";
const aBushMed = "actor|props/flora/bush_medit_me.xml";
const aBushSmall = "actor|props/flora/bush_medit_sm.xml";
const aBushSmallDry = "actor|props/flora/bush_medit_sm_dry.xml";
const aGrass = "actor|props/flora/grass_soft_large_tall.xml";
const aGrassDry = "actor|props/flora/grass_soft_dry_large_tall.xml";
const aRockLarge = "actor|geology/stone_granite_large.xml";
const aRockMed = "actor|geology/stone_granite_med.xml";
const aRockSmall = "actor|geology/stone_granite_small.xml";


// terrain + entity (for painting)
const pPalmForest = [tForestFloor+TERRAIN_SEPARATOR+oTree, tGrass];
const pPineForest = [tForestFloor+TERRAIN_SEPARATOR+oPine, tGrass];
const pPoplarForest = [tForestFloor+TERRAIN_SEPARATOR+oTree, tGrass];
const pMainForest = [tForestFloor+TERRAIN_SEPARATOR+oCarob, tForestFloor+TERRAIN_SEPARATOR+oBeech, tGrass, tGrass];

const BUILDING_ANGlE = -PI/4;

// initialize map

log("Initializing map...");

InitMap();

const numPlayers = getNumPlayers();
const mapSize = getMapSize();
var mapArea = mapSize*mapSize;

// create tile classes

var clCoral = createTileClass();
var clPlayer = createTileClass();
var clIsland = createTileClass();
var clCity = createTileClass();
var clDirt = createTileClass();
var clHill = createTileClass();
var clHill2 = createTileClass();
var clHill3 = createTileClass();
var clHill4 = createTileClass();
var clForest = createTileClass();
var clWater = createTileClass();
var clRock = createTileClass();
var clMetal = createTileClass();
var clFood = createTileClass();
var clCannibals = createTileClass();
var clBaseResource = createTileClass();

// randomize player order
var playerIDs = [];
for (var i = 0; i < numPlayers; i++)
{
	playerIDs.push(i+1);
}
playerIDs = sortPlayers(playerIDs);

//array holding starting islands based on number of players
var startingPlaces=[[0],[0,3],[0,2,4],[0,1,3,4],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]];

//figure out how many spoke islands
var numIslands =6;
//if(numPlayers<6){
numIslands=randInt(numPlayers+1, numPlayers+4);
//}else{
//   numIslands=numPlayers;
//}

//figure out coordinates of spoke islands
var islandX = new Array(numIslands);
var islandZ = new Array(numIslands);
var islandAngle = new Array(numIslands);
//holds all land areas
var areas = [];

var startAngle = randFloat() * 2 * PI;
for (var i=0; i < numIslands; i++)
{
	islandAngle[i] = (startAngle + i*2*PI/numIslands);
	islandX[i] = 0.5 + 0.39 *cos(islandAngle[i]);
	islandZ[i] = 0.5 + 0.39 *sin(islandAngle[i]);
}


for(var i=0;i<numIslands;i++){
	var radius = scaleByMapSize(35,90);
	var coral=scaleByMapSize(1,5);
	var wet = 3;
	var dry = 1;
	var gbeach = 2;
	var elevation = 3;
	
	// get the x and z in tiles
	var fx = fractionToTiles(islandX[i]);
	var fz = fractionToTiles(islandZ[i]);
	var ix = round(fx);
	var iz = round(fz);
	
	var islandSize = PI*radius*radius*1.5;
	var islandBottom=PI*(radius+coral)*(radius+coral);
	
	//create base
	var placer = new ClumpPlacer(islandBottom, .7, .1, 10, ix, iz);
	var terrainPainter = new LayeredPainter(
        [tOceanRockDeep, tOceanCoral],
        [5]
	);
	createArea(placer, [terrainPainter, paintClass(clCoral)],avoidClasses(clCoral,0));
}


//create spoke islands
//put down base resources and animals but do not populate
for (var i=0; i < numIslands; i++)
{
	log("Creating base Island " + (i+1) + "...");
	
	var radius = scaleByMapSize(15,30);
	var coral=scaleByMapSize(2,5);
	var wet = 3;
	var dry = 1;
	var gbeach = 2;
	var elevation = 3;
	
	// get the x and z in tiles
	var fx = fractionToTiles(islandX[i]);
	var fz = fractionToTiles(islandZ[i]);
	var ix = round(fx);
	var iz = round(fz);
	
	var islandSize = PI*radius*radius*2;
	var islandBottom=PI*(radius+coral)*(radius+coral);
	
	// create island
	var placer = new ClumpPlacer(islandSize, .7, .1, 10, ix, iz);
	var terrainPainter = new LayeredPainter(
        [tOceanCoral,tBeachWet, tBeachDry, tBeach, tBeachBlend, tGrass],
        [1,wet,dry,1,gbeach]
	);
	var elevationPainter = new SmoothElevationPainter(
	    ELEVATION_SET,
	    elevation,
	    5
    );
    var temp = createArea(placer, [terrainPainter, paintClass(clPlayer), elevationPainter],avoidClasses(clPlayer,0));
    
    areas.push(temp);

	// create animals
    var group;
	for (var j = 0; j < 2; ++j)
	{
		var aAngle = randFloat(0, TWO_PI);
		var aDist = 7;
		var aX = round(fx + aDist * cos(aAngle));
		var aZ = round(fz + aDist * sin(aAngle));
		group = new SimpleGroup(
			[new SimpleObject(oChicken, 5,5, 0,2)],
			true, clBaseResource, aX, aZ
		);
		createObjectGroup(group, 0);
	}
	
	// create berry bushes
	var bbAngle = randFloat(0, TWO_PI);
	var bbDist = 10;
	var bbX = round(fx + bbDist * cos(bbAngle));
	var bbZ = round(fz + bbDist * sin(bbAngle));
	group = new SimpleGroup(
		[new SimpleObject(oBerryBush, 5,5, 0,3)],
		true, clBaseResource, bbX, bbZ
	);
	createObjectGroup(group, 0);
	
	// create metal mine
	var mAngle = bbAngle;
	while(abs(mAngle - bbAngle) < PI/3)
	{
		mAngle = randFloat(0, TWO_PI);
	}
	var mDist = 12;
	var mX = round(fx + mDist * cos(mAngle));
	var mZ = round(fz + mDist * sin(mAngle));
	group = new SimpleGroup(
		[new SimpleObject(oMetalLarge, 1,1, 0,0)],
		true, clBaseResource, mX, mZ
	);
	createObjectGroup(group, 0);
	
	// create stone mines
	mAngle += randFloat(PI/8, PI/4);
	mX = round(fx + mDist * cos(mAngle));
	mZ = round(fz + mDist * sin(mAngle));
	group = new SimpleGroup(
		[new SimpleObject(oStoneLarge, 1,1, 0,2)],
		true, clBaseResource, mX, mZ
	);
	createObjectGroup(group, 0);
	var hillSize = PI * radius * radius;
	// create starting trees
	var num = 2;
	var tAngle = randFloat(-PI/3, 4*PI/3);
	var tDist = randFloat(12, 13);
	var tX = round(fx + tDist * cos(tAngle));
	var tZ = round(fz + tDist * sin(tAngle));
	group = new SimpleGroup(
		[new SimpleObject(oTree, num, num, 0,3)],
		false, clBaseResource, tX, tZ
	);
	createObjectGroup(group, 0, avoidClasses(clBaseResource,2));
}

//Populate the islands with the players
log("Populating islands ...");

//nPlayer is the player we are on i is the island we are on
var nPlayer=0;
for(var i=0;i<numIslands;i++)
{
if((i==startingPlaces[numPlayers-1][nPlayer])){

	var id = playerIDs[nPlayer];

	// get the x and z in tiles
	var fx = fractionToTiles(islandX[i]);
	var fz = fractionToTiles(islandZ[i]);
	var ix = round(fx);
	var iz = round(fz);

    //create city patch
    var cityRadius = 6;
	var placer = new ClumpPlacer(PI*cityRadius*cityRadius, 0.6, 0.3, 10, ix, iz);
	var painter = new LayeredPainter([tGrass, tCity], [1]);
	createArea(placer, [painter,paintClass(clCity)], null);

	// create starting units
	placeCivDefaultEntities(fx, fz, id,{'iberWall' : 'towers'});

    nPlayer++;
}
log("Populated island" + i);
}


RMS.SetProgress(15);


// get the x and z in tiles

var nCenter=floor(scaleByMapSize(1,4))
var startAngle = randFloat() * 2 * PI;
for (var i=0; i < nCenter; i++)
{
	var fx=.5;
	var fz=.5;
	if(nCenter==1){
	    fx=.5;
	    fz=.5;
	}else{
	    var isangle = startAngle + i*2*PI/nCenter+randFloat(-PI/8,PI/8);
	    var dRadius = randFloat(.05,.1);
	    fx = 0.5 + dRadius*cos(isangle);
	    fz = 0.5 + dRadius*sin(isangle);
	}
    var ix = round(fractionToTiles(fx));
    var iz = round(fractionToTiles(fz));

    var radius = scaleByMapSize(15,40);
    var coral= 3;
    var wet = 1;
    var dry = 1;
    var gbeach = 2;
    var elevation = 6;

    var islandSize = PI*radius*radius*1.5;
    var islandBottom=PI*(radius+coral)*(radius+coral);

    //create base
    var placer = new ClumpPlacer(islandBottom, .7, .1, 10, ix, iz);
    var terrainPainter = new LayeredPainter(
        [tOceanRockDeep, tOceanCoral],
        [5]
    );
    createArea(placer, [terrainPainter, paintClass(clCoral)],avoidClasses(clCoral,0,clPlayer,0));

    // create island
    var placer = new ClumpPlacer(islandSize, .7, .1, 15, ix, iz);
    var terrainPainter = new LayeredPainter(
        [tOceanCoral,tBeachWet, tBeachDry, tBeach, tBeachBlend, tGrass],
        [1,wet,dry,1,gbeach]
    );
    var elevationPainter = new SmoothElevationPainter(
        ELEVATION_SET,
        elevation,
        5
    );
    var temp = createArea(placer, [terrainPainter, paintClass(clIsland), elevationPainter],avoidClasses(clPlayer,0));

    areas.push(temp);
}    
RMS.SetProgress(30);

// create bumps
log("Creating bumps...");
placer = new ClumpPlacer(scaleByMapSize(20, 60), 0.3, 0.06, 1);
painter = new SmoothElevationPainter(ELEVATION_MODIFY, 2, 3);
createAreasInAreas(
	placer,
	painter, 
	avoidClasses(clCity, 0),
	scaleByMapSize(25, 75),15,
	areas
);

// create hills
log("Creating hills...");
placer = new ClumpPlacer(scaleByMapSize(20, 150), 0.2, 0.1, 1);
terrainPainter = new LayeredPainter(
	[tCliff, tCliffShrubs],		// terrains
	[2]								// widths
);
elevationPainter = new SmoothElevationPainter(ELEVATION_SET, 12, 2);
createAreasInAreas(
	placer,
	[terrainPainter, elevationPainter, paintClass(clHill)], 
	avoidClasses(clCity, 15, clHill, 15),
	scaleByMapSize(5, 30), 15,
	areas
);

RMS.SetProgress(40);
//find all water
for (var ix = 0; ix < mapSize; ix++)
{
	for (var iz = 0; iz < mapSize; iz++)
	{
	if(getHeight(ix,iz)<0){
	    addToClass(ix,iz,clWater);
	}
	}
}

// create forests
log("Creating forests...");
var types = [
	[[tForestFloor, tGrass, pPalmForest], [tForestFloor, pPalmForest]],
	[[tForestFloor, tGrass, pPineForest], [tForestFloor, pPineForest]],
	[[tForestFloor, tGrass, pPoplarForest], [tForestFloor, pPoplarForest]],
	[[tForestFloor, tGrass, pMainForest], [tForestFloor, pMainForest]]
];	// some variation
var size = 5; //size
var num = scaleByMapSize(10, 64); //number
for (var i = 0; i < types.length; ++i)
{
	placer = new ClumpPlacer(6+randInt(12), 0.1, 0.1, 1);
	painter = new LayeredPainter(
		types[i],		// terrains
		[2]											// widths
		);
	createAreasInAreas(
		placer,
		[painter, paintClass(clForest)], 
		avoidClasses(clCity, 1, clWater, 3, clForest, 3, clHill, 1),
		num, 20, areas
	);
}


//Creating volcano
log("Creating volcano");
var fx = fractionToTiles(0.5);
var fz = fractionToTiles(0.5);
var ix = round(fx);
var iz = round(fz);
var div = scaleByMapSize(1,6);
var placer = new ClumpPlacer(mapArea * 0.067 / div, 0.7, 0.05, 100, ix, iz);
var terrainPainter = new LayeredPainter(
	[tGrassRock, tGrassRock],		// terrains
	[3]								// widths
);
var elevationPainter = new SmoothElevationPainter(
	ELEVATION_SET,			// type
	5,				// elevation
	2				// blend radius
);
createArea(placer, [terrainPainter, elevationPainter, paintClass(clHill)], null);

var placer = new ClumpPlacer(mapArea * 0.05 / div, 0.7, 0.05, 10, ix, iz);
var terrainPainter = new LayeredPainter(
	[tCliffShrubs, tCliffShrubs],		// terrains
	[3]								// widths
);
var elevationPainter = new SmoothElevationPainter(
	ELEVATION_SET,			// type
	8,				// elevation
	1				// blend radius
);
createArea(placer, [terrainPainter, elevationPainter, paintClass(clHill2)], stayClasses(clHill, 1));

var placer = new ClumpPlacer(mapArea * 0.02 / div, 0.7, 0.05, 100, ix, iz);
var terrainPainter = new LayeredPainter(
	[tCliff2, tCliff2],		// terrains
	[3]								// widths
);
var elevationPainter = new SmoothElevationPainter(
	ELEVATION_SET,			// type
	15,				// elevation
	2				// blend radius
);
createArea(placer, [terrainPainter, elevationPainter, paintClass(clHill3)], stayClasses(clHill2, 1));

var placer = new ClumpPlacer(mapArea * 0.011 / div, 0.7, 0.05, 100, ix, iz);
var terrainPainter = new LayeredPainter(
	[tCliff2, tCliff2],		// terrains
	[3]								// widths
);
var elevationPainter = new SmoothElevationPainter(
	ELEVATION_SET,			// type
	20,				// elevation
	3				// blend radius
);
createArea(placer, [terrainPainter, elevationPainter, paintClass(clHill4)], stayClasses(clHill3, 1));

var placer = new ClumpPlacer(mapArea * 0.003 / div, 0.7, 0.05, 100, ix, iz);
var terrainPainter = new LayeredPainter(
	[tCliff2, tLava1, tLava2, tLava3],		// terrains
	[1, 1, 1]								// widths
);
var elevationPainter = new SmoothElevationPainter(
	ELEVATION_SET,			// type
	10,				// elevation
	1				// blend radius
);
createArea(placer, [terrainPainter, elevationPainter, paintClass(clHill4)], stayClasses(clHill4, 1));

var num = floor(mapArea * 0.03 / 15 / div);
var tX = round(fx);
var tZ = round(fz);
var group = new SimpleGroup(
	[new SimpleObject(aSmoke, num, num, 0,3)],
	false, clBaseResource, tX, tZ
);
createObjectGroup(group, 0, stayClasses(clHill4,1));

RMS.SetProgress(60);

log("Creating stone mines...");
// create large stone quarries
group = new SimpleGroup([new SimpleObject(oStoneSmall, 0,2, 0,4), new SimpleObject(oStoneLarge, 1,1, 0,4)], true, clRock);
createObjectGroupsByAreas(group, 0,
	[avoidClasses(clWater, 1, clForest, 1, clHill, 1, clPlayer, 5, clRock, 1)],
	scaleByMapSize(6,20), 200, areas
);

// create small stone quarries
group = new SimpleGroup([new SimpleObject(oStoneSmall, 2,5, 1,3)], true, clRock);
createObjectGroupsByAreas(group, 0,
	[avoidClasses(clWater, 1, clForest, 1, clPlayer, 5, clRock, 2)],
	scaleByMapSize(6,20), 200, areas
);
RMS.SetProgress(70);

log("Creating metal mines...");
// create large metal quarries
group = new SimpleGroup([new SimpleObject(oMetalSmall, 0,2, 0,4), new SimpleObject(oMetalLarge, 1,1, 0,4)], true, clMetal);
createObjectGroupsByAreas(group, 0,
	[avoidClasses(clWater, 1, clForest, 1, clPlayer, 5, clMetal, 2)],
	scaleByMapSize(4,16), 200, areas
);

// create small metal quarries
group = new SimpleGroup([new SimpleObject(oMetalSmall, 2,5, 1,3)], true, clMetal);
createObjectGroupsByAreas(group, 0,
	[avoidClasses(clWater, 1, clForest, 1, clPlayer, 5, clMetal, 2)],
	scaleByMapSize(4,16), 200, areas
);//, clHill, 1
RMS.SetProgress(80);



//create shrub patches
log("Creating shrub patches...");
var sizes = [scaleByMapSize(2, 32), scaleByMapSize(3, 48), scaleByMapSize(5, 80)];
for (var i = 0; i < sizes.length; i++)
{
	placer = new ClumpPlacer(sizes[i], 0.3, 0.06, 0.5);
	painter = new LayeredPainter([tBeachBlend,tGrassShrubs],[1]);
	createAreasInAreas(
		placer,
		[painter, paintClass(clDirt)],
		avoidClasses(clWater, 3, clHill, 0, clDirt, 6, clCity, 0),
		scaleByMapSize(4, 16), 20, areas
	);
}

//create grass patches
log("Creating grass patches...");
var sizes = [scaleByMapSize(2, 32), scaleByMapSize(3, 48), scaleByMapSize(5, 80)];
for (var i = 0; i < sizes.length; i++)
{
	placer = new ClumpPlacer(sizes[i], 0.3, 0.06, 0.5);
	painter = new LayeredPainter([tGrassDry],[]);
	createAreasInAreas(
		placer,
		[painter, paintClass(clDirt)],
		avoidClasses(clWater, 3, clHill, 0, clDirt, 6, clCity, 0),
		scaleByMapSize(4, 16), 20, areas
	);
}

RMS.SetProgress(90);

log("Creating straggler trees...");
// create straggler trees
var trees = [oCarob, oBeech, oTree, oTree, oPine];
for (var t in trees)
{
	group = new SimpleGroup([new SimpleObject(trees[t], 1,1, 0,1)], true, clForest);
	createObjectGroupsByAreas(group, 0,
		avoidClasses(clWater, 2, clForest, 2, clCity, 3, clBaseResource, 1, clRock, 1, clMetal, 1, clPlayer, 1, clHill, 1),
		scaleByMapSize(2, 38), 50, areas
	);
}


// create straggler cypresses
group = new SimpleGroup(
	[new SimpleObject(oCypress2, 1,3, 0,3), new SimpleObject(oCypress1, 0,2, 0,2)],
	true
);
createObjectGroupsByAreas(group, 0,
	avoidClasses(clWater, 2, clForest, 2, clCity, 3, clBaseResource, 1, clRock, 1, clMetal, 1, clPlayer, 1, clHill, 1),
	scaleByMapSize(5, 75), 50, areas
);


// create straggler date palms
group = new SimpleGroup(
	[new SimpleObject(oDateS, 1,3, 0,3), new SimpleObject(oDateT, 0,2, 0,2)],
	true
);
createObjectGroupsByAreas(group, 0,
	avoidClasses(clWater, 2, clForest, 1, clCity, 0, clBaseResource, 1, clRock, 1, clMetal, 1, clPlayer, 1, clHill, 1),
	scaleByMapSize(5, 75), 50, areas
);

log("Creating rocks...");
// create rocks
group = new SimpleGroup(
	[new SimpleObject(aRockSmall, 0,3, 0,2), new SimpleObject(aRockMed, 0,2, 0,2), 
	new SimpleObject(aRockLarge, 0,1, 0,2)]
);
createObjectGroups(group, 0,
	avoidClasses(clWater, 0, clCity, 0),
	scaleByMapSize(30, 180), 50
);

log("Creating cannibals...");
group = new SimpleGroup(
	[new SimpleObject(oCannibal, 2,7, 0,3)],
	true, clCannibals
);
createObjectGroups(group, 0,
	avoidClasses(clWater, 1, clForest, 2, clCity, 10, clMetal, 2, clRock, 2, clPlayer, 10),
	3 * numPlayers, 50
);

// create deer
log("Creating deer...");
group = new SimpleGroup(
	[new SimpleObject(oDeer, 5,7, 0,4)],
	true, clFood
);
createObjectGroups(group, 0,
	avoidClasses(clWater, 5, clForest, 1, clHill, 1, clCity, 10, clMetal, 2, clRock, 2, clFood, 8),
	3 * numPlayers, 50
);

RMS.SetProgress(95);

log("Creating berry bushes...");
// create berry bushes
group = new SimpleGroup([new SimpleObject(oBerryBush, 5,7, 0,3)], true, clFood);
createObjectGroups(group, 0,
	avoidClasses(clWater, 2, clForest, 1, clHill, 1, clCity, 10, clMetal, 2, clRock, 2, clFood, 8),
	1.5 * numPlayers, 100
);

log("Creating Fish...");
// create Fish
group = new SimpleGroup([new SimpleObject(oFish, 1,1, 0,3)], true, clFood);
createObjectGroups(group, 0,
	[stayClasses(clWater,1),avoidClasses(clFood, 8)],
	scaleByMapSize(40,200), 100
);

log("Creating Whales...");
// create Whales
group = new SimpleGroup([new SimpleObject(oWhale, 1,1, 0,3)], true, clFood);
createObjectGroups(group, 0,
	[stayClasses(clWater,1),avoidClasses(clFood, 8, clPlayer,4,clIsland,4)],
	scaleByMapSize(10,40), 100
);

log("Creating shipwrecks...");
// create shipwreck
group = new SimpleGroup([new SimpleObject(oShipwreck, 1,1, 0,3)], true, clFood);
createObjectGroups(group, 0,
	[stayClasses(clWater,1),avoidClasses(clFood, 8)],
	scaleByMapSize(6,16), 100
);

log("Creating shipwreck debris...");
// create shipwreck debris
group = new SimpleGroup([new SimpleObject(oShipDebris, 1,2, 0,4)], true, clFood);
createObjectGroups(group, 0,
	[stayClasses(clWater,1),avoidClasses(clFood, 8)],
	scaleByMapSize(10,20), 100
);

// Adjust environment
setSkySet("sunny");
setWaterColor(0.2,0.294,0.49);
setWaterTint(0.208, 0.659, 0.925);
setWaterMurkiness(0.72);
setWaterWaviness(3.0);
setWaterType("ocean");

// Export map data
ExportMap();
