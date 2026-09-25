const filterButtons = document.querySelectorAll(".player-filter button");
const playerCards = document.querySelectorAll(".player-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedPosition = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

button.classList.add("active");

        playerCards.forEach(function (card) {
            const playerPosition = card.dataset.position;

            if (selectedPosition === "all" || playerPosition === selectedPosition) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

const competitionFilterButtons = document.querySelectorAll(".competition-filter button");
const competitionMatches = document.querySelectorAll(".competition-match");
const competitionDividers = document.querySelectorAll(".competition-round-divider");
const competitionStats = document.querySelectorAll(".competition-stats[data-stage]");

competitionFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedStage = button.dataset.filter;

        competitionFilterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        competitionMatches.forEach(function (match) {
            const matchStage = match.dataset.stage;

            if (selectedStage === "all" || matchStage === selectedStage) {
                match.classList.remove("hidden");
            } else {
                match.classList.add("hidden");
            }
        });
        competitionDividers.forEach(function (divider) {
            const dividerStage = divider.dataset.stage;

            if (selectedStage === "all" || dividerStage === selectedStage) {
                divider.classList.remove("hidden");
            } else {
                divider.classList.add("hidden");
            }
        });

        competitionStats.forEach(function (stats) {
            const statsStage = stats.dataset.stage;

            if (selectedStage === "all" || statsStage === selectedStage) {
                stats.classList.remove("hidden");
            } else {
                stats.classList.add("hidden");
            }
        });
    });
});