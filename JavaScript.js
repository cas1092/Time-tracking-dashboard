document.addEventListener("DOMContentLoaded", () => {
	// Fetch the JSON data
	fetch("./data.json")
		.then((response) => response.json())
		.then((data) => initialize(data))
		.catch((error) => console.error("Error fetching data:", error));

	function initialize(data) {
		const options = document.querySelectorAll(".period");

		// Add click event listeners to each option
		options.forEach((option) => {
			option.addEventListener("click", (e) => {
				e.preventDefault();
				const timeFrame = option.textContent.toLowerCase();
        
        fadeOutAndUpdateCards(data, timeFrame)
        
      });
		});

		// Initialize the cards with default timeframe
		updateCards(data, "daily");
	}
  function fadeOutAndUpdateCards(data, timeFrame) {
		const cards = document.querySelectorAll(".title");

		// Apply fade-out effect to the current cards
		cards.forEach((card) => {
			const current = card.querySelector(".current");
			const previous = card.querySelector(".previous");

			
			current.classList.remove();
			previous.classList.remove();

			
			current.classList.add();
			previous.classList.add();
		});
			updateCards(data, timeFrame);

	}



	function updateCards(data, timeFrame) {
		const cards = document.querySelectorAll(".title");
		const labels = {
			daily: "Last day",
			weekly: "Last week",
			monthly: "Last month",
		};

		// Update each card with the corresponding data
		cards.forEach((card, i) => {
			const category = card.querySelector(".category");
			const current = card.querySelector(".current");
			const previous = card.querySelector(".previous");

			// Safeguard to ensure data is available for the card
			if (data[i]) {
				const cardData = data[i];
				category.textContent = cardData.title;
				current.textContent = `${cardData.timeframes[timeFrame].current}hrs`;
				previous.textContent = `${labels[timeFrame]} - ${cardData.timeframes[timeFrame].previous}hrs`;
			}
		});
	}
});