(function() {
  function createExpandedVirtualNodeList(mom) {
    var newMom = mom.cloneNode(true);
    var kids = newMom.children;
    var kidsLen = kids.length;
    for(var i = 0; i < kidsLen; i++) {
      // Array changes when you append, so the index increases by one
      newMom.insertBefore(kids[kidsLen - 1].cloneNode(true), kids[0]);
    }
    return newMom;
  }

  var container = document.querySelector('.slider');
  var containerParent = container.parentNode;
  var newContainer = createExpandedVirtualNodeList(container);
  container.remove();
  containerParent.appendChild(newContainer);

  function advanceSlide(e, slides) {
    slides.appendChild(slides.children[0]);
  }

  document.querySelector('.next').addEventListener('click', function(e) {
    advanceSlide(e, newContainer);
  });
}());