document.addEventListener('DOMContentLoaded',()=>{
	// card option
	const cardArray=[
		{
			name:'1',
			img:'images/1.png'
		},
		{
			name:'1',
			img:'images/1.png'
		},
		{
			name:'2',
			img:'images/2.png'
		},
		{
			name:'2',
			img:'images/2.png'
		},
		{
			name:'3',
			img:'images/3.png'
		},
		{
			name:'3',
			img:'images/3.png'
		},
		{
			name:'4',
			img:'images/4.png'
		},
		{
			name:'4',
			img:'images/4.png'
		},
		{
			name:'5',
			img:'images/5.png'
		},
		{
			name:'5',
			img:'images/5.png'
		},

		{
			name:'6',
			img:'images/6.png'
		},
		{
			name:'6',
			img:'images/6.png'
		}

	]

	cardArray.sort(()=>0.5 - Math.random())


	// creat your board
	const grid =document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	const total = document.querySelector('#score')
	var cardsChosen =[];
	var cardsChosenId =[];
	var cardsWon =[];
	var score = 0

	function createBoard(){
		for(let i =0; i<cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src','images/blank.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipCard)

			grid.appendChild(card)
		}
	}

	// check for matches
		function checkForMatch(){
			var cards = document.querySelectorAll('img')
			const option1Id = cardsChosenId[0]
			const option2Id = cardsChosenId[1]
			if (cardsChosen[0]===cardsChosen[1]) {
				alert('You found a match')
				cards[option1Id].setAttribute('src','images/white.png')
				cards[option2Id].setAttribute('src','images/white.png')
				cardsWon.push(cardsChosen)
				 score += parseInt(cardArray[option1Id]['name'])
				 total.textContent = score
			}else{
				cards[option1Id].setAttribute('src','images/blank.png')
				cards[option2Id].setAttribute('src','images/blank.png')
				alert('Sory , try again')

			}
			cardsChosen= []
			cardsChosenId= []
			resultDisplay.textContent = cardsWon.length
			if (cardsWon.length===cardArray.length/2) {
				resultDisplay.textContent='Congratulations! You found them all!'
			}
		}
	// flip your card
	 function flipCard(){
	 	var cardId = this.getAttribute('data-id')
	 	cardsChosen.push(cardArray[cardId].name)
	 	cardsChosenId.push(cardId)
	 	this.setAttribute('src',cardArray[cardId].img)
	 	if (cardsChosen.length===2) {
	 		setTimeout(checkForMatch,500)
	 	}
	 }

	createBoard();
})
