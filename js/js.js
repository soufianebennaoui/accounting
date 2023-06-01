$('.carousel[data-type="multi"] .item').each(function () {
  var next = $(this).next()
  if (!next.length) {
    next = $(this).siblings(':first')
  }
  next.children(':first-child').clone().appendTo($(this))

  for (var i = 0; i < 4; i++) {
    next = next.next()
    if (!next.length) {
      next = $(this).siblings(':first')
    }

    next.children(':first-child').clone().appendTo($(this))
  }
})

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn()
    } else {
      $('#toTopBtn').fadeOut()
    }
  })

  $('#toTopBtn').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
    return false
  })
})

$(document).ready(function () {
  $('#myCarousel').carousel({
    interval: 10000,
  })
})
