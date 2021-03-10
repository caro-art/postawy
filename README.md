function iatExtension(options)
	{
		var API = new APIConstructor();
		var scorer = new Scorer();
		var piCurrent = API.getCurrent();

		var iatObj =
		{
			istouch:true, 
			canvas : {
				maxWidth: 725,
				proportions : 0.7,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: ‘white’
			},
			category1 : {
				name : ‘prawicowość‘,
				title : {
					media : {word : ‘prawicowość'}, 
					css : {color:'#336600','font-size':'1.8em'},
					height : 4 
				},
				stimulusMedia : [ 
					{word: ‘ideologia’},
					{word: 'Mateusz Morawiecki'},
					{word: ‘Prawo i Sprawiedliwość’},
					{word: ‘kościół’},
					{word: ’tradycja’},
					{word: ‘konserwatyzm’},
          {word: ‘patriotyzm’},
          {word: ‘patriarchat’} 

				],
				//Stimulus css (style)
				stimulusCss : {color:'#336600','font-size':'2.3em'}
			},
			category2 :	{
				name : ‘lewicowość’,
				title : {
					media : {word : ‘lewicowość’}, 
					css : {color:'#336600','font-size':'1.8em'}, 
					height : 4 
				},
				stimulusMedia : [ 
					{word: ‘równość’},
					{word: ‘wybór’},
					{word: ‘nowoczesność’},
					{word: ‘Wiosna’},
					{word: ‘feminizm’},
					{word: ‘ekologia’},
          {word: ‘rozwój’},
          {word: ‘liberalizm’}
				],
				//Stimulus css
				stimulusCss : {color:'#336600','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : ‘pozytywny’,
				title : {
					media : {word : ‘pozytywne’},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 
				},
				stimulusMedia : [ 
					{word: ‘akceptacja’},
					{word: ‘bezpieczeństwo’},
					{word: ‘zaufanie’},
					{word: ‘pokój’},
					{word: ‘poparcie’},
					{word: ‘uprzejmość’},
					{word: ‘życzliwość’},
					{word: ‘szacunek’}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute1 :
			{
				name : ‘negatywny’,
				title : {
					media : {word : ‘negatywny’},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 
				},
				stimulusMedia : [ 
					{word: ‘niesprawiedliwość’},
					{word: ‘wojna’},
					{word: ‘nienawiść’},
					{word: ‘nietolerancja’},
					{word: ‘przegrana’},
					{word: ‘niekulturalność’},
					{word: ‘wstręt’},
					{word: ‘strach’}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			

			nBlocks : 7, 
			
			blockAttributes_nTrials : 20,
			blockAttributes_nMiniBlocks : 5,
			blockCategories_nTrials : 20,
			blockCategories_nMiniBlocks : 5,
			blockFirstCombined_nTrials : 20,
			blockFirstCombined_nMiniBlocks : 5,
			blockSecondCombined_nTrials : 40, 
			blockSecondCombined_nMiniBlocks : 10, 
			blockSwitch_nTrials : 28,
			blockSwitch_nMiniBlocks : 7,

			
			randomAttSide : false, 

			
			randomBlockOrder : true, 

			
			remindError : true,

			remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<p/>',

			remindErrorTextTouch : '<p align="center" style="font-size:"1.4em"; font-family:arial">' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Touch the other side to continue.<p/>',

			errorCorrection : true, 
			errorFBDuration : 500, 
			ITIDuration : 250, 

			fontColor : '#000000', //The default color used for printed messages.
			
			
			leftKeyText : ’Naciśnij "E" dla’, 
			rightKeyText : ‘Naciśnij "I" dla’, 
			keysCss : {'font-size':'0.8em', 'font-family':'courier', color:'#000000'},
			
			orText : ‘lub’, 
			orCss : {'font-size':'1.8em', color:'#000000'},
			
			instWidth : 99, //The width of the instructions stimulus
			
			finalText : ‘Naciśnij spację aby kontynuować do następnego zadania', 
			finalTouchText : ‘Naciśnij zieloną część aby kontynuować',

			touchMaxStimulusWidth : '50%', 
			touchMaxStimulusHeight : '50%', 
			bottomTouchCss: {}, 

			
			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				‘Połóż palec lewej ręki na klawiszu <b>E</b> dla haseł, które należą do kategorii <font color="#0000ff">leftAttribute.</font>' +
				'<br/> Połóż palec prawej ręki na klawiszu <b>I</b> dla haseł, które należą do kategorii <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				‘Jeśli popełnisz błąd, pojawi się <font color="#ff0000"><b>X</b></font> . ' +
				‘Naciśnij inne klawisze żeby przejść do kolejnych części.<br/>' +
				'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/><br/></p>'+
				'<p align="center"> Naciśnij <b>spację</b> jak będziesz gotowy aby zacząć.</font></p></div>',
			instAttributePracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						‘Połóż palec lewej ręki na <b>left</b> zielonej części dla haseł pasujących do kategorii <font color="#0000ff">leftAttribute</font>.<br/>',
						‘Połóż palec prawej ręki na <b>right</b> zielonej części dla haseł pasujących do kategorii <font color="#0000ff">rightAttribute</font>.<br/>',
						‘Hasła pojawią się pojedynczo <br/>',
						'<br/>',
						‘Jeśli popełnisz błąd pojawi się <font color="#ff0000"><b>X</b></font> . Kliknij drugi klawisz. <u>Klkaj jak najszybciej </u> i jak najdokładniej.’,
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Połóż palec lewej ręki na <b>E</b> dla haseł, które należą do kategorii <font color="#336600">leftCategory</font>. ' +
				'<br/>Połóż palec prawej ręki na <b>I</b> dla haseł, które należą do kategorii <font color="#336600">rightCategory</font>.<br/>' +
				‘Hasła pojawią się pojedynczo.<br/><br/>' +
				‘Jeśli popełnisz błąd pojawi się <font color="#ff0000"><b>X</b></font>. ' +
				‘Kliknij innym klawiszem aby kontynuować .<br/>' +
				'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/><br/></p>'+
				'<p align="center">Naciśnij <b>spację</b> jak będziesz gotowy aby zacząć.</font></p></div>',
			instCategoriesPracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Połóż palec lewej ręki na <b>left</b> zielonej części dla haseł pasujących do kategorii <font color="#336600">leftCategory</font>.<br/>',
						'Połóż palec prawej ręki na <b>right</b> zielonej części dla haseł pasujących do kategorii <font color="#336600">rightCategory</font>.<br/>',
						'Hasła pojawią się pojedynczo.<br/>',
						'<br/>',
						'Jeśli popełnisz błąd pojawi się <font color="#ff0000"><b>X</b></font>. Kliknij drugim klawiszem. <u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.’,
					'</p>',
					'<p align="center">Kliknij <b>niżej </b> na zieloną część aby kontynuować.</p>',
				'</div>'
			].join('\n'),

			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				‘Naciśnij klawisz <b>E</b> dla <font color="#336600">leftCategory</font> oraz dla <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Naciśnij klawisz <b>I</b> dla <font color="#336600">rightCategory</font> oraz dla <font color="#0000ff">rightAttribute</font>.<br/>' +
				‘Każde hasło przynależy do jednej kategorii.<br/><br/>' +
				'Jeśli popełnisz błąd pojawi się <font color="#ff0000"><b>X</b></font>. ' +
				'Kliknij innym klawiszem aby kontynuować.<br/>' + 
				'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/><br/></p>' +
				'<p align="center">Naciśnij <b>spację</b> jak będziesz gotowy aby zacząć.</font></p></div>',
			instFirstCombinedTouch:[
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<br/>',
					'<br/>',
					'<p align="left" style="margin-left:5px">',
						'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.</br>',
						'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.</br>',
							'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</br>',
						'</p>',
						'<p align="center">Kliknij <b>niżej </b> na zieloną część aby kontynuować.</p>',
				'</div>'
			].join('\n'),

			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'To zadanie jest takie samo jak w poprzedniej części.<br/>' +
				‘Naciśnij klawisz <b>E</b> dla <font color="#336600">leftCategory</font> oraz dla  <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Naciśnij klawisz<b>I</b> dla <font color="#336600">rightCategory</font> oraz dla <font color="#0000ff">rightAttribute</font>.<br/>' +
				‘Każde hasło należy tylko do jednej kategorii.<br/><br/>' +
				'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/><br/></p>' +
				'<p align="center">Naciśnij <b>spację</b> jak będziesz gotowy aby zacząć.</font></p></div>',
			instSecondCombinedTouch:[
				'<div>',
					'<p align="center"><u>Part blockNum of nBlocks</u></p>',
					'<br/>',
					'<br/>',

					'<p align="left" style="margin-left:5px">',
						'Połóż palec lewej ręki na <b>left</b> zielonej części dla <font color="#336600">leftCategory</font> haseł i dla <font color="#0000ff">leftAttribute</font>.<br/>',
						'Połóż palec prawej ręki na <b>right</b> zielonej części dla <font color="#336600">rightCategory</font> haseł i dla <font color="#0000ff">rightAttribute</font>.<br/>',
						'<br/>',
						'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/>',
					'</p>',
					'<p align="center">Kliknij <b>niżej </b> na zieloną część aby kontynuować.</p>',
				'</div>'
			].join('\n'),

			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Uwaga, zmieniła się pozycja kategorii!</b><br/>' +
				‘Użyj lewego palca na klawiszu <b>E</b> dla <font color="#336600">leftCategory</font>.<br/>' +
				‘Użyj prawego palca na klawiszu <b>I</b> dla <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/><br/></p>' +
				'<p align="center">Naciśnij <b>spację </b> jak będziesz gotowy aby zacząć.</font></p></div>',
			instSwitchCategoriesTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Uwaga, zmieniła się pozycja kategorii!<br/>',
							'Użyj lewego palca na <b>left</b> zielonej części dla <font color="#336600">leftCategory</font> items.<br/>',
							'Użyj prawego palca na <b>right</b> zielonej części dla <font color="#336600">rightCategory</font> items.<br/>',
							‘Hasła będą pojawiały się pojedynczo.’,
							'<br/>',
							'Jeśli popełnisz błąd pojawi się <font color="#ff0000"><b>X</b></font>. Kliknij drugim klawiszem. <u>Klikaj najszybciej jak możesz </u> i jak najdokładniej.<br/>',
						'</p>',
						'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

			instThirdCombined : 'instFirstCombined', 
			instFourthCombined : 'instSecondCombined', 
			instThirdCombinedTouch : 'instFirstCombined',
			instFourthCombinedTouch : 'instSecondCombined', 


		
		_.defaults(piCurrent, options, iatObj);

		
		var isTouch = piCurrent.isTouch;

		
		var att1 = piCurrent.attribute1;
		var att2 = piCurrent.attribute2;
		var cat1 = piCurrent.category1;
		var cat2 = piCurrent.category2;
		if (isTouch)
		{
			var maxW = piCurrent.touchMaxStimulusWidth;
			var maxH = piCurrent.touchMaxStimulusHeight;
			att1.stimulusCss.maxWidth = maxW;
			att2.stimulusCss.maxWidth = maxW;
			cat1.stimulusCss.maxWidth = maxW;
			cat2.stimulusCss.maxWidth = maxW;
			att1.stimulusCss.maxHeight = maxH;
			att2.stimulusCss.maxHeight = maxH;
			cat1.stimulusCss.maxHeight = maxH;
			cat2.stimulusCss.maxHeight = maxH;
		}

		//Set the attribute on the left.
		var rightAttName = (piCurrent.randomAttSide) ? (Math.random() >= 0.5 ? att1.name : att2.name) : att2.name;

		/**
		 * Create inputs
		 */

		var leftInput = !isTouch ? {handle:'left',on:'keypressed',key:'e'} : {handle:'left',on:'click', stimHandle:'left'};
		var rightInput = !isTouch ? {handle:'right',on:'keypressed',key:'i'} : {handle:'right',on:'click', stimHandle:'right'};
		var proceedInput = !isTouch ? {handle:'space',on:'space'} : {handle:'space',on:'bottomTouch', css:piCurrent.bottomTouchCss};

		/**
		*Set basic settings.
		*/
		API.addSettings('canvas',piCurrent.canvas);
		API.addSettings('base_url',piCurrent.base_url);
		API.addSettings('logger',{
			pulse: 20,
			url : '/implicit/PiPlayerApplet'
		});
		API.addSettings('hooks',{
				endTask: function(){
					var DScoreObj = scorer.computeD();
					piCurrent.feedback = DScoreObj.FBMsg;
					API.save({block3Cond:block3Cond, feedback:DScoreObj.FBMsg, d: DScoreObj.DScore});
				}
			});
		/**
		 * Create default sorting trial
		 */
		API.addTrialSets('sort',{
			
			data: {score:0, parcel:'first'}, 
			input: [
				{handle:'skip1',on:'keypressed', key:27}, 
				leftInput,
				rightInput
			],

			
			interactions: [
				// begin trial : display stimulus immediately
				{
					conditions: [{type:'begin'}],
					actions: [{type:'showStim',handle:'targetStim'}]
				},
				// error response
				{
					conditions: [
						{type:'inputEqualsTrial', property:'corResp',negate:true}, 
						{type:'inputEquals',value:['right','left']}	
					],
					actions: [
						{type:'setTrialAttr', setter:{score:1}},	
						{type:'showStim',handle:'error'},
						{type:'trigger',handle:'onError'}	
					]
				},
				
				{
					conditions: [
						{type:'globalEquals', property:'errorCorrection', value:false}, 
						{type:'inputEquals',value:'onError'} 
					],
					actions: [
						{type:'removeInput',handle:'All'}, 
						{type:'log'},
						{type:'trigger',handle:'ITI', duration:piCurrent.errorFBDuration} 
					]
				},
				// correct
				{
					conditions: [{type:'inputEqualsTrial', property:'corResp'}],	
					actions: [
						{type:'removeInput',handle:'All'}, 
						{type:'hideStim', handle: 'All'},
						{type:'log'}, // log this trial
						{type:'trigger',handle:'ITI'} 
					]
				},
				
				{
					conditions: [{type:'inputEquals',value:'ITI'}],
					actions: [
						{type:'removeInput',handle:'All'}, 
						{type:'hideStim', handle: 'All'}, 
						{type:'trigger',handle:'end', duration:piCurrent.ITIDuration} 
					]
				},
				// end after ITI
				{
					conditions: [{type:'inputEquals',value:'end'}],
					actions: [
						{type:'endTrial'}
					]
				},

				
				{
					conditions: [{type:'inputEquals',value:'skip1'}],
					actions: [
						{type:'setInput',input:{handle:'skip2', on:'enter'}} 
					]
				},
				
				{
					conditions: [{type:'inputEquals',value:'skip2'}],
					actions: [
						{type:'goto', destination: 'nextWhere', properties: {blockStart:true}},
						{type:'endTrial'}
					]
				}
			]
		});

		/**
		 * Create default instructions trials
		 */
		API.addTrialSets('instructions', [
			
			{
				
				data: {blockStart:true, condition:'instructions', score:0, block:0},

				// create user interface (just click to move on...)
				input: [
					proceedInput
				],

				interactions: [
					
					{
						conditions: [{type:'begin'}],
						actions: [
							{type:'showStim',handle:'All'}
						]
					},
					
					{
						conditions: [{type:'inputEquals',value:'space'}],
						actions: [
							{type:'hideStim', handle:'All'},
							{type:'removeInput', handle:'space'},
							{type:'log'},
							{type:'trigger', handle:'endTrial', duration:500}
						]
					},
					{
						conditions: [{type:'inputEquals',value:'endTrial'}],
						actions: [{type:'endTrial'}]
					}
				]
			}
		]);

		/**
		 * All basic trials.
		 */

		
		function createBasicTrialSet(params)
		{
			var set = [{
				inherit : 'sort',
				data : {corResp : params.side},
				stimuli :
				[
					{inherit:{type:'exRandom',set:params.stimSet}},
					{inherit:{set:'error'}}
				]
			}];
			return set;
		}

		var basicTrialSets = {};
		
		basicTrialSets.att1left =
			createBasicTrialSet({side:'left', stimSet: 'att1'});
		basicTrialSets.att1right =
			createBasicTrialSet({side:'right', stimSet: 'att1'});
		basicTrialSets.att2left =
			createBasicTrialSet({side:'left', stimSet: 'att2'});
		basicTrialSets.att2right =
			createBasicTrialSet({side:'right', stimSet: 'att2'});
		
		basicTrialSets.cat1left =
			createBasicTrialSet({side:'left', stimSet: 'cat1'});
		basicTrialSets.cat1right =
			createBasicTrialSet({side:'right', stimSet: 'cat1'});
		basicTrialSets.cat2left =
			createBasicTrialSet({side:'left', stimSet: 'cat2'});
		basicTrialSets.cat2right =
			createBasicTrialSet({side:'right', stimSet: 'cat2'});

		API.addTrialSets(basicTrialSets);

		/**
		 *	Stimulus Sets
		 */

		
		API.addStimulusSets({
			
			Default: [
				{css:{color:piCurrent.fontColor,'font-size':'2em'}}
			],

			instructions: [
				{css:{'font-size':'1.4em',color:'black', lineHeight:1.2}, nolog:true, 
					location: {left:0,top:0}, size:{width:piCurrent.instWidth}}
			],

			target: [{
				data : {handle:'targetStim'}
			}],
			att1 :
			[{
				data: {alias:att1.name},
				inherit : 'target',
				css:att1.stimulusCss,
				media : {inherit:{type:'exRandom',set:'att1'}}
			}],
			att2 :
			[{
				data: {alias:att2.name},
				inherit : 'target',
				css:att2.stimulusCss,
				media : {inherit:{type:'exRandom',set:'att2'}}
			}],
			cat1 :
			[{
				data: {alias:cat1.name},
				inherit : 'target',
				css:cat1.stimulusCss,
				media : {inherit:{type:'exRandom',set:'cat1'}}
			}],
			cat2 :
			[{
				data: {alias:cat2.name},
				inherit : 'target',
				css:cat2.stimulusCss,
				media : {inherit:{type:'exRandom',set:'cat2'}}
			}],
			
			error : [{
				handle:'error', location: {top: 75}, css:{color:'red','font-size':'4em'}, media: {word:'X'}, nolog:true
			}],

			touchInputStimuli: [
				{media:{html:'<div></div>'}, size:{height:48,width:30},css:{background:'#00FF00', opacity:0.3, zindex:-1}, location:{right:0}, data:{handle:'right'}},
				{media:{html:'<div></div>'}, size:{height:48,width:30},css:{background:'#00FF00', opacity:0.3, zindex:-1}, location:{left:0}, data:{handle:'left'}}
			]
		});

		/**
		 *	Media Sets
		 */
		API.addMediaSets({
			att1 : att1.stimulusMedia, att2 : att2.stimulusMedia,
			cat1 : cat1.stimulusMedia, cat2 : cat2.stimulusMedia
		});

		/**
		 *	Create the Task sequence
		 */

	
		function getInstFromTemplate(params)
		{//params: instTemplate, blockNum, nBlocks, leftCat, rightCat, leftAtt, rightAtt.
			var retText = params.instTemplate
				.replace(/leftCategory/g, params.leftCategory)
				.replace(/rightCategory/g, params.rightCategory)
				.replace(/leftAttribute/g, params.leftAttribute)
				.replace(/rightAttribute/g, params.rightAttribute)
				.replace(/blockNum/g, params.blockNum)
				.replace(/nBlocks/g, params.nBlocks);
			return retText;
		}

		
		function getLayout(params)
		{

			function buildContent(layout){
				if (!layout){return '';}
				var isImage = !!layout.image;
				var content = layout.word || layout.html || layout.image || layout;
				if (_.isString(layout) || layout.word) {content = _.escape(content);}
				return isImage ? '<img src="' + piCurrent.base_url.image + content + '" style="max-width:100%;width:100%" />' : content;
			}

			function buildStyle(css){
				css || (css = {});
				var style = '';
				for (var i in css) {style += i + ':' + css[i] + ';';}
				return style;
			}

			var template = '' +
			'   <div style="margin:0 2%; text-align:center">  '  +
			'   	<div style="font-size:0.8em; <%= stimulusData.keysCss %>; visibility:<%= stimulusData.isTouch ? \'hidden\' : \'visible\' %>">  '  +
			'   		<%= stimulusData.isLeft ? stimulusData.leftKeyText : stimulusData.rightKeyText %>  '  +
			'   	</div>  '  +
			'     '  +
			'   	<div style="font-size:1.3em;<%= stimulusData.firstCss %>">  '  +
			'   		<%= stimulusData.first %>  '  +
			'   	</div>  '  +
			'     '  +
			'   	<% if (stimulusData.second) { %>  '  +
			'   		<div style="font-size:2.3em; <%= stimulusData.orCss %>"><%= stimulusData.orText %> </div>  '  +
			'   		<div style="font-size:1.3em; max-width:100%; <%= stimulusData.secondCss %>">  '  +
			'   			<%= stimulusData.second %>  '  +
			'   		</div>  '  +
			'   	<% } %>  '  +
			'   </div>  ';

			
			var layout = [
				{
					location:{left:0, top:0},
					media:{html:template},
					data: {
						first: buildContent(_.get(params, 'left1.title.media')),
						firstCss: buildStyle(_.get(params, 'left1.title.css')),
						second: buildContent(_.get(params, 'left2.title.media')),
						secondCss: buildStyle(_.get(params, 'left2.title.css')),
						leftKeyText : buildContent(_.get(piCurrent, 'leftKeyText')), 
						rightKeyText : buildContent(_.get(piCurrent, 'rightKeyText')), 
						keysCss : buildStyle(_.get(piCurrent, 'keysCss')), 
						orText : buildContent(_.get(piCurrent, 'orText')), 
						orCss : buildStyle(_.get(piCurrent, 'orCss')), 
						isTouch: isTouch,
						isLeft: true
					}
				},
				{
					location:{right:0, top:0},
					media:{html:template},
					data: {
						first: buildContent(_.get(params, 'right1.title.media')),
						firstCss: buildStyle(_.get(params, 'right1.title.css')),
						second: buildContent(_.get(params, 'right2.title.media')),
						secondCss: buildStyle(_.get(params, 'right2.title.css')),
						leftKeyText : buildContent(_.get(piCurrent, 'leftKeyText')), 
						rightKeyText : buildContent(_.get(piCurrent, 'rightKeyText')), 
						keysCss : buildStyle(_.get(piCurrent, 'keysCss')), 
						orText : buildContent(_.get(piCurrent, 'orText')), 
						orCss : buildStyle(_.get(piCurrent, 'orCss')), 
						isTouch: isTouch,
						isLeft: false
					}
				}
			];

			if (!params.isInst && params.remindError)
			{
				layout.push({
					location:{bottom:1}, css: {color:piCurrent.fontColor,'font-size':'1em'},
					media : {html: isTouch ? params.remindErrorTextTouch : params.remindErrorText}
				});
			}

			if (!params.isInst && isTouch){
				layout.push({inherit:{type:'byData', set:'touchInputStimuli', data:{handle:'right'}}});
				layout.push({inherit:{type:'byData', set:'touchInputStimuli', data:{handle:'left'}}});
			}

			return layout;
		}

		
		function getInstTrial(params)
		{
			var instParams = {isInst : true};
			//The names of the category and attribute labels.
			if (params.nCats == 2)
			{//When there are only two categories in the block, one two of these will appear in the instructions.
				instParams.leftAttribute = params.left1.name;
				instParams.rightAttribute = params.right1.name;
				instParams.leftCategory = params.left1.name;
				instParams.rightCategory = params.right1.name;
			}
			else
			{
				instParams.leftAttribute = params.left1.name;
				instParams.rightAttribute = params.right1.name;
				instParams.leftCategory = params.left2.name;
				instParams.rightCategory = params.right2.name;
			}
			_.extend(instParams, params);
			var instLocation={bottom:1};
			if (isTouch == true)
			{
				instLocation={left:0,top:(params.nCats == 2) ? 7 : 10};
			}
			var instTrial = {
				inherit : 'instructions',
				data: {blockStart:true},
				layout : getLayout(instParams),
				stimuli : [
					{
						inherit : 'instructions',
						media : {html : getInstFromTemplate(instParams)},
						location : instLocation,
						nolog:true
					},
					{
						data : {handle:'dummy', alias:'dummy'},
						media : {word:' '},
						location : {top:1}
					}
				]
			};

			return instTrial;
		}

	
		function getMiniMixer2(params)
		{//{nTrialsInMini : , currentCond : , rightTrial : , leftTrial : , blockNum : , blockLayout : )
			var mixer = {
				mixer : 'repeat',
				times : params.nTrialsInMini/2,
				data :
				[
					{
						inherit : params.rightTrial,
						data : {condition : params.currentCond, block : params.blockNum},
						layout : params.blockLayout
					},
					{
						inherit : params.leftTrial,
						data : {condition : params.currentCond, block : params.blockNum},
						layout : params.blockLayout
					}
				]
			};
			return ({
				mixer : 'random',
				data : 	[mixer] //Completely randomize the repeating trials.
			});
		}

		
		function getMiniMixer4(params)
		{//{nTrialsInMini : , currentCond : , rightTrial1 : , leftTrial1 : , rightTrial2 : , leftTrial2 : , blockNum : , blockLayout : )

			
			var atts = [2];
			var cats = [2];
			var iTrial;

			
			for (iTrial = 1; iTrial <= params.nTrialsInMini; iTrial+=4)
			{
				atts.push(1);
				atts.push(2);
				cats.push(1);
				cats.push(2);
			}
			
			atts = _.shuffle(atts);
			cats = _.shuffle(cats);

			var mixerData = [];
			var iCat = 0;
			var iAtt = 0;
			for (iTrial = 1; iTrial <= params.nTrialsInMini; iTrial+=2)
			{
				mixerData.push(
				{
					inherit : (cats[iCat] == 1) ? params.leftTrial2 : params.rightTrial2,
					data : {condition : params.currentCond, block : params.blockNum},
						layout : params.blockLayout
				});
				iCat++;
				mixerData.push(
				{
					inherit : (atts[iAtt] == 1) ? params.leftTrial1 : params.rightTrial1,
					data : {condition : params.currentCond, block : params.blockNum},
						layout : params.blockLayout
				});
				iAtt++;
			}

			return ({
				mixer : 'wrapper',
				data : mixerData
			});
		}

		////////////////////////////////////////////////////////////////
		////AFTER ALL the helper functions, it is time to create the trial sequence.
		var trialSequence = [];

		var globalObj = piCurrent;

		//These parameters are used to create trials.
		var blockParamsAtts = {
			nBlocks : globalObj.nBlocks,
			remindError : globalObj.remindError,
			remindErrorText : globalObj.remindErrorText,
			remindErrorTextTouch : globalObj.remindErrorTextTouch
		};
		//////////////////////////////
		////Block 1: Categories block
		var iBlock = 1;
		var blockParamsCats = {
			nBlocks : globalObj.nBlocks,
			remindError : globalObj.remindError,
			remindErrorText : globalObj.remindErrorText,
			remindErrorTextTouch : globalObj.remindErrorTextTouch
		};
		//Set sides
		var rightCatName = (globalObj.randomBlockOrder ? (Math.random() >= 0.5 ? cat1.name : cat2.name) : cat2.name);
		var leftCatTrial = 'cat1left';
		blockParamsCats.left1 = cat1;
		var rightCatTrial = 'cat2right';
		blockParamsCats.right1 = cat2;
		if (rightCatName == cat1.name)
		{
			blockParamsCats.right1 = cat1;
			rightCatTrial = 'cat1right';
			blockParamsCats.left1 = cat2;
			leftCatTrial = 'cat2left';
		}
		var blockCondition = blockParamsCats.left1.name + ',' + blockParamsCats.right1.name;
		blockParamsCats.nMiniBlocks = globalObj.blockCategories_nMiniBlocks;
		blockParamsCats.nTrials = globalObj.blockCategories_nTrials;
		blockParamsCats.blockNum = iBlock;
		blockParamsCats.nCats = 2;
		blockParamsCats.instTemplate = isTouch ? globalObj.instCategoriesPracticeTouch : globalObj.instCategoriesPractice;
		trialSequence.push(getInstTrial(blockParamsCats));
		var blockLayout = getLayout(blockParamsCats);
		var nTrialsInMini = blockParamsCats.nTrials/blockParamsCats.nMiniBlocks;
		var iBlock2Mini;
		for (iBlock2Mini = 1; iBlock2Mini <= blockParamsCats.nMiniBlocks; iBlock2Mini++)
		{
			trialSequence.push(getMiniMixer2({
			nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
			rightTrial : rightCatTrial, leftTrial : leftCatTrial, blockNum : iBlock,
			blockLayout : blockLayout}));
		}
		//////////////////////////////
		////Block 2: Attributes
		iBlock++;
		//Set variables related to the sides
		blockParamsAtts.left1 = att1;
		blockParamsAtts.right1 = att2;
		//Names of the trials in this block
		var leftAttTrial = 'att1left';
		var rightAttTrial = 'att2right';
		if (rightAttName == att1.name)
		{
			blockParamsAtts.right1 = att1;
			rightAttTrial = 'att1right';
			leftAttTrial = 'att2left';
			blockParamsAtts.left1 = att2;
		}
		//Set the block's condition
		blockCondition = blockParamsAtts.left1.name + ',' + blockParamsAtts.right1.name;
		//Number variables
		blockParamsAtts.nMiniBlocks = globalObj.blockAttributes_nMiniBlocks;
		blockParamsAtts.nTrials = globalObj.blockAttributes_nTrials;
		blockParamsAtts.blockNum = iBlock;
		blockParamsAtts.nCats = 2;
		//Instructions trial
		blockParamsAtts.instTemplate = isTouch ? globalObj.instAttributePracticeTouch : globalObj.instAttributePractice;
		trialSequence.push(getInstTrial(blockParamsAtts));
		//Layout for the sorting trials
		blockLayout = getLayout(blockParamsAtts);
		//Number of trials in a mini block.
		nTrialsInMini = blockParamsAtts.nTrials/blockParamsAtts.nMiniBlocks;
		//Add a mixer for each mini block.
		var iBlock1Mini;
		for (iBlock1Mini = 1; iBlock1Mini <= blockParamsAtts.nMiniBlocks; iBlock1Mini++)
		{
			trialSequence.push(getMiniMixer2(
			{nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
			rightTrial : rightAttTrial, leftTrial : leftAttTrial, blockNum : iBlock,
			blockLayout : blockLayout}));
		}
		//////////////////////////////
		////Block 3: First combined block
		iBlock++;
		var blockParamsCombined = {
			nBlocks : globalObj.nBlocks,
			remindError : globalObj.remindError,
			remindErrorText : globalObj.remindErrorText,
			remindErrorTextTouch : globalObj.remindErrorTextTouch
		};
		//We get the categories from the first two blocks.
		blockParamsCombined.right1 = blockParamsAtts.right1;
		blockParamsCombined.left1 = blockParamsAtts.left1;
		blockParamsCombined.right2 = blockParamsCats.right1;
		blockParamsCombined.left2 = blockParamsCats.left1;
		blockCondition = blockParamsCombined.left2.name + '/' + blockParamsCombined.left1.name + ',' + blockParamsCombined.right2.name + '/' + blockParamsCombined.right1.name;
		//We will send the condition of the third block to the server at the end.
		var block3Cond = blockCondition;
		//Number variables.
		blockParamsCombined.nMiniBlocks = globalObj.blockFirstCombined_nMiniBlocks;
		blockParamsCombined.nTrials = globalObj.blockFirstCombined_nTrials;
		blockParamsCombined.blockNum = iBlock;
		blockParamsCombined.nCats = 4;
		//Instructions trial.
		blockParamsCombined.instTemplate = isTouch ? globalObj.instFirstCombinedTouch : globalObj.instFirstCombined;
		trialSequence.push(getInstTrial(blockParamsCombined));
		//Get the layout for the sorting trials.
		blockLayout = getLayout(blockParamsCombined);
		//Fill the trials.
		nTrialsInMini = blockParamsCombined.nTrials/blockParamsCombined.nMiniBlocks;
		var iBlock3Mini;
		for (iBlock3Mini = 1; iBlock3Mini <= blockParamsCombined.nMiniBlocks; iBlock3Mini++)
		{
			trialSequence.push(getMiniMixer4({
			nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
			rightTrial1 : rightAttTrial, leftTrial1 : leftAttTrial,
			rightTrial2 : rightCatTrial, leftTrial2 : leftCatTrial,
			blockNum : iBlock, blockLayout : blockLayout}));
		}
		//////////////////////////////
		////Second combined block.
		if (globalObj.nBlocks == 7)
		{//Fourth block is another combined block.
			iBlock++;
			blockParamsCombined.blockNum = iBlock;
			blockParamsCombined.nMiniBlocks = globalObj.blockSecondCombined_nMiniBlocks;
			blockParamsCombined.nTrials = globalObj.blockSecondCombined_nTrials;
			//Instructions trial.
			blockParamsCombined.instTemplate = isTouch ? globalObj.instSecondCombinedTouch : globalObj.instSecondCombined;
			trialSequence.push(getInstTrial(blockParamsCombined));
			//The layout for the sorting trials.
			blockLayout = getLayout(blockParamsCombined);
			//Fill the trials
			nTrialsInMini = blockParamsCombined.nTrials/blockParamsCombined.nMiniBlocks;
			var iBlock4Mini;
			for (iBlock4Mini = 1; iBlock4Mini <= blockParamsCombined.nMiniBlocks; iBlock4Mini++)
			{
				trialSequence.push(getMiniMixer4({
				nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
				rightTrial1 : rightAttTrial, leftTrial1 : leftAttTrial,
				rightTrial2 : rightCatTrial, leftTrial2 : leftCatTrial,
				blockNum : iBlock, blockLayout : blockLayout}));
			}

		}
		//////////////////////////////
		////Switch categories side block.
		iBlock++;
		//Do the switch
		blockParamsCats.right1 = blockParamsCombined.left2;
		blockParamsCats.left1 = blockParamsCombined.right2;
		rightCatTrial = (rightCatTrial == 'cat1right') ? 'cat2right' : 'cat1right';
		leftCatTrial = (leftCatTrial == 'cat1left') ? 'cat2left' : 'cat1left';
		blockParamsCats.instTemplate = isTouch ? globalObj.instSwitchCategoriesTouch : globalObj.instSwitchCategories;
		//Get numbers
		blockParamsCats.nMiniBlocks = globalObj.blockSwitch_nMiniBlocks;
		blockParamsCats.nTrials = globalObj.blockSwitch_nTrials;
		//The rest is like blocks 1 and 2.
		blockCondition = blockParamsCats.left1.name + ',' + blockParamsCats.right1.name;
		blockParamsCats.blockNum = iBlock;
		blockParamsCats.nCats = 2;
		trialSequence.push(getInstTrial(blockParamsCats));
		//The layout for the sorting trials.
		blockLayout = getLayout(blockParamsCats);
		//Fill the trials.
		nTrialsInMini = blockParamsCats.nTrials/blockParamsCats.nMiniBlocks;
		var iBlock5Mini;
		for (iBlock5Mini = 1; iBlock5Mini <= blockParamsCats.nMiniBlocks; iBlock5Mini++)
		{
			trialSequence.push(getMiniMixer2({
			nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
			rightTrial : rightCatTrial, leftTrial : leftCatTrial, blockNum : iBlock,
			blockLayout : blockLayout}));
		}
		//////////////////////////////
		////The other combined block
		iBlock++;
		//Get the categories side from the switch block.
		blockParamsCombined.right2 = blockParamsCats.right1;
		blockParamsCombined.left2 = blockParamsCats.left1;
		blockCondition = blockParamsCombined.left2.name + '/' + blockParamsCombined.left1.name + ',' + blockParamsCombined.right2.name + '/' + blockParamsCombined.right1.name;
		//Number variables.
		blockParamsCombined.nMiniBlocks = globalObj.blockFirstCombined_nMiniBlocks;
		blockParamsCombined.nTrials = globalObj.blockFirstCombined_nTrials;
		blockParamsCombined.blockNum = iBlock;
		blockParamsCombined.nCats = 4;
		//Instruction trial.
		blockParamsCombined.instTemplate = isTouch ? globalObj.instFirstCombinedTouch : globalObj.instFirstCombined;
		if (globalObj.instThirdCombined != 'instFirstCombined')
		{
			blockParamsCombined.instTemplate = isTouch ? globalObj.instThirdCombinedTouch : globalObj.instThirdCombined;
		}
		trialSequence.push(getInstTrial(blockParamsCombined));
		//Layout for the sorting trials.
		blockLayout = getLayout(blockParamsCombined);
		//Fill the trials.
		nTrialsInMini = blockParamsCombined.nTrials/blockParamsCombined.nMiniBlocks;
		var iBlock6Mini;
		for (iBlock6Mini = 1; iBlock6Mini <= blockParamsCombined.nMiniBlocks; iBlock6Mini++)
		{
			trialSequence.push(getMiniMixer4({
			nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
			rightTrial1 : rightAttTrial, leftTrial1 : leftAttTrial,
			rightTrial2 : rightCatTrial, leftTrial2 : leftCatTrial,
			blockNum : iBlock, blockLayout : blockLayout}));
		}
		//////////////////////////////
		////Second combined block.
		if (globalObj.nBlocks == 7)
		{//Fourth block is another combined block.
			iBlock++;
			blockParamsCombined.blockNum = iBlock;
			blockParamsCombined.nMiniBlocks = globalObj.blockSecondCombined_nMiniBlocks;
			blockParamsCombined.nTrials = globalObj.blockSecondCombined_nTrials;
			//Instructions trial.
			blockParamsCombined.instTemplate = isTouch ? globalObj.instSecondCombinedTouch : globalObj.instSecondCombined;
			if (globalObj.instFourthCombined != 'instSecondCombined')
			{
				blockParamsCombined.instTemplate = isTouch ? globalObj.instFourthCombinedTouch : globalObj.instFourthCombined;
			}
			trialSequence.push(getInstTrial(blockParamsCombined));
			//Layout for sorting trials.
			blockLayout = getLayout(blockParamsCombined);
			//Fill the trials.
			nTrialsInMini = blockParamsCombined.nTrials/blockParamsCombined.nMiniBlocks;
			var iBlock7Mini;
			for (iBlock7Mini = 1; iBlock7Mini <= blockParamsCombined.nMiniBlocks; iBlock7Mini++)
			{
				trialSequence.push(getMiniMixer4({
				nTrialsInMini : nTrialsInMini, currentCond : blockCondition,
				rightTrial1 : rightAttTrial, leftTrial1 : leftAttTrial,
				rightTrial2 : rightCatTrial, leftTrial2 : leftCatTrial,
				blockNum : iBlock, blockLayout : blockLayout}));
			}
		}
		//////////////////////////////
		//Add final trial
		trialSequence.push({
			inherit : 'instructions',
			data: {blockStart:true},
			layout : [{media:{word:''}}],
			stimuli : [
				{
					inherit : 'Default',
					media : {word : (isTouch ? piCurrent.finalTouchText : piCurrent.finalText)}
				}
			]
		});

		//Add the trials sequence to the API.
		API.addSequence(trialSequence);

		/**
		*Compute scores and feedback messages
		**/
		var errorLatencyUse = piCurrent.errorCorrection ? 'latency' : 'penalty';
		//Settings for the score computation.
		scorer.addSettings('compute',{
			ErrorVar:'score',
			condVar:'condition',
			//condition 1
			cond1VarValues: [
				cat1.name + '/' + att1.name + ',' + cat2.name + '/' + att2.name,
				cat2.name + '/' + att2.name + ',' + cat1.name + '/' + att1.name
			],
			//condition 2
			cond2VarValues: [
				cat2.name + '/' + att1.name + ',' + cat1.name + '/' + att2.name,
				cat1.name + '/' + att2.name + ',' + cat2.name + '/' + att1.name
			],
			parcelVar : "parcel", //We use only one parcel because it is probably not less reliable.
			parcelValue : ['first'],
			fastRT : 150, //Below this reaction time, the latency is considered extremely fast.
			maxFastTrialsRate : 0.1, //Above this % of extremely fast responses within a condition, the participant is considered too fast.
			minRT : 400, //Below this latency
			maxRT : 10000, //above this
			errorLatency : {use:errorLatencyUse, penalty:600, useForSTD:true},
			postSettings : {score:"score",msg:"feedback",url:"/implicit/scorer"}
		});

		//Helper function to set the feedback messages.
		function getFB(inText, categoryA, categoryB)
		{
			var retText = inText.replace(/attribute1/g, att1.name);
			retText = retText.replace(/attribute2/g, att2.name);
			retText = retText.replace(/categoryA/g, categoryA);
			retText = retText.replace(/categoryB/g, categoryB);
			return retText;
		}

		//Set the feedback messages.
		var messageDef = [
				{ cut:'-0.65', message : getFB(piCurrent.fb_strong_Att1WithCatA_Att2WithCatB, cat1.name, cat2.name) },
				{ cut:'-0.35', message : getFB(piCurrent.fb_moderate_Att1WithCatA_Att2WithCatB, cat1.name, cat2.name) },
				{ cut:'-0.15', message : getFB(piCurrent.fb_slight_Att1WithCatA_Att2WithCatB, cat1.name, cat2.name) },
				{ cut:'0.15', message : getFB(piCurrent.fb_equal_CatAvsCatB, cat1.name, cat2.name) },
				{ cut:'0.35', message : getFB(piCurrent.fb_slight_Att1WithCatA_Att2WithCatB, cat2.name, cat1.name) },
				{ cut:'0.65', message : getFB(piCurrent.fb_moderate_Att1WithCatA_Att2WithCatB, cat2.name, cat1.name) },
				{ cut:'5', message : getFB(piCurrent.fb_strong_Att1WithCatA_Att2WithCatB, cat2.name, cat1.name) }
		];
		var scoreMessageObject = { MessageDef : messageDef };
		if (piCurrent.manyErrors !== '')
		{
			scoreMessageObject.manyErrors = piCurrent.manyErrors;
		}
		if (piCurrent.tooFast !== '')
		{
			scoreMessageObject.tooFast = piCurrent.tooFast;
		}
		if (piCurrent.notEnough !== '')
		{
			scoreMessageObject.notEnough = piCurrent.notEnough;
		}
		//Set messages to the scorer.
		scorer.addSettings('message',scoreMessageObject);

		return API.script;
	}

	return iatExtension;
});
