// --------------------------------------------------->
// #region Card fold-expand--------------------------->

document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class "divLblLabCard"
  var lblLabCards = document.querySelectorAll('.divCardFold');

  // Add click event listener to each "divLblLabCard"
  lblLabCards.forEach(function(lblLabCard) {
      lblLabCard.addEventListener('click', function() {
          // Toggle "active" class on the parent "divLabCard"
          var labCard = this.closest('.divLabCard');
          labCard.classList.toggle('active');
          
          // Remove "active" class from other siblings
          var siblings = labCard.parentNode.children;
          for (var i = 0; i < siblings.length; i++) {
              if (siblings[i] !== labCard) {
                  siblings[i].classList.remove('active');
              }
          }
      });
  });
});


// #endregion Card fold-expand------------------------>
// --------------------------------------------------->