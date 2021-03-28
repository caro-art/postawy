define(['pipAPI','https://caro-art.github.io/postawy/msg_1.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();

return iatExtension({
      attribute1 : {
			name : 'Prawicowość', //Will appear in the data.
			title : {
				media : {word : 'Prawicowość'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'konserwatyzm'},
				{word: 'kościół'},
				{word: 'tradycja'},
				{word: 'patriotyzm'},
				{word: 'hierarchia'},
				{word: 'autorytaryzm'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute2 :	{
			name : 'Lewicowość', //Will appear in the data.
			title : {
				media : {word : 'Lewicowość'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'ekologia'},
				{word: 'feminizm'},
				{word: 'równość'},
				{word: 'nowoczesność'},
				{word: 'rozwój'},
				{word: 'równouprawnienie'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : 
		{
			name : 'Pozytywny', 
			title : {
				media : {word : 'Pozytywny'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'szacunek'},
				{word: 'tolerancja'},
				{word: 'pokój'},
				{word: 'poparcie'},
				{word: 'uznanie'},
				{word: 'życzliwość'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'} 
		},
		category2 : 
		{
			name : 'Negatywny', 
			title : {
				media : {word : 'Negatywny'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'niesprawiedliwość'},
				{word: 'wojna'},
				{word: 'nienawiść'},
				{word: 'dyskryminacja'},
				{word: 'niekulturalność'}, 
				{word: 'strach'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		
		
	
	//The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
			fb_strong_Att1WithCatA_Att2WithCatB : 'Twoje dane sugerują silne automatyczne powiązanie dla atrybutu1 z kategoriąA i atrybutu2 z kategoriąB..',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Twoje dane sugerują umiarkowane automatyczne powiązanie dla atrybutu1 z kategoriąA i atrybutu2 z kategoriąB..',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Twoje dane sugerują słabe automatyczne powiązanie atrybutu1 z kategoriąA i atrybutu2 z kategoriąB..',
			fb_equal_CatAvsCatB : 'Twoje dane sugerują niewielkie lub żadne automatyczne powiązanie pomiędzy atrybutem1 i atrybutem2 z kategoriąA i kategoriąB..',
    });
});
