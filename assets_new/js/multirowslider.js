function callcarousel (elid) {

    var el = $('#' + elid);
    
    var resp = '';
    
    if(elid == 'offerings-slider') {
        resp = {
            0: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 1,
              rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 2,
                rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'homeofferings-slider') {
        resp = {
            0: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 2,
                rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'invest-slider') {
        resp = {
            0: {
              items: 2,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 5,
                rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'crypto-slider') {
        resp = {
            0: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 7,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 9,
                rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'services-slider') {
        resp = {
            0: {
              items: 2,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 5,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 6,
                rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'token-aquired-slider') {
        resp = {
            0: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'token-crypto-slider') {
      resp = {
          0: {
            items: 2,
            rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          768: {
            items: 2,
            rows: 3 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          992: {
            items: 2,
            rows: 3 //custom option not used by Owl Carousel, but used by the algorithm below
          }
        };    
    }
    if(elid == 'cryptowallet-slider') {
      resp = {
          0: {
            items: 1,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          480: {
            items: 2,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          576: {
            items: 2,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          768: {
            items: 4,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          992: {
            items: 4,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          1200: {
            items: 5,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          },
          1400: {
            items: 6,
            rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
          }
        };    
    }
    if(elid == 'offering-update') {
        resp = {
            0: {
              items: 2,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 3,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            1200: {
                items: 5,
                rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'media-slider') {
        resp = {
            0: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 2,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    if(elid == 'teams-slider') {
        resp = {
            0: {
              items: 1,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 2,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            992: {
              items: 4,
              rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          };    
    }
    
    var carousel;
    var carouselOptions = {
      margin: 0,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 12000,
      slideBy: 'page',
      responsive: resp,
      autoplayHoverPause: true,
      autoplaySpeed:1000,
      navSpeed:1000
    };
  
    //Taken from Owl Carousel so we calculate width the same way
    var viewport = function() {
      var width;
      if (carouselOptions.responsiveBaseElement && carouselOptions.responsiveBaseElement !== window) {
        width = $(carouselOptions.responsiveBaseElement).width();
      } else if (window.innerWidth) {
        width = window.innerWidth;
      } else if (document.documentElement && document.documentElement.clientWidth) {
        width = document.documentElement.clientWidth;
      } else {
        console.warn('Can not detect viewport width.');
      }
      return width;
    };
  
    var severalRows = false;
    var orderedBreakpoints = [];
    for (var breakpoint in carouselOptions.responsive) {
      if (carouselOptions.responsive[breakpoint].rows > 1) {
        severalRows = true;
      }
      orderedBreakpoints.push(parseInt(breakpoint));
    }
    
    //Custom logic is active if carousel is set up to have more than one row for some given window width
    if (severalRows) {
      orderedBreakpoints.sort(function (a, b) {
        return b - a;
      });
      var slides = el.find('[data-slide-index]');
      var slidesNb = slides.length;
      if (slidesNb > 0) {
        var rowsNb;
        var previousRowsNb = undefined;
        var colsNb;
        var previousColsNb = undefined;
  
        //Calculates number of rows and cols based on current window width
        var updateRowsColsNb = function () {
          var width =  viewport();
          for (var i = 0; i < orderedBreakpoints.length; i++) {
            var breakpoint = orderedBreakpoints[i];
            if (width >= breakpoint || i == (orderedBreakpoints.length - 1)) {
              var breakpointSettings = carouselOptions.responsive['' + breakpoint];
              rowsNb = breakpointSettings.rows;
              colsNb = breakpointSettings.items;
              break;
            }
          }
        };
  
        var updateCarousel = function () {
          updateRowsColsNb();
  
          //Carousel is recalculated if and only if a change in number of columns/rows is requested
          if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
            var reInit = false;
            if (carousel) {
              //Destroy existing carousel if any, and set html markup back to its initial state
              carousel.trigger('destroy.owl.carousel');
              carousel = undefined;
              slides = el.find('[data-slide-index]').detach().appendTo(el);
              el.find('.fake-col-wrapper').remove();
              reInit = true;
            }
  
  
            //This is the only real 'smart' part of the algorithm
  
            //First calculate the number of needed columns for the whole carousel
            var perPage = rowsNb * colsNb;
            var pageIndex = Math.floor(slidesNb / perPage);
            var fakeColsNb = pageIndex * colsNb + (slidesNb >= (pageIndex * perPage + colsNb) ? colsNb : (slidesNb % colsNb));
  
            //Then populate with needed html markup
            var count = 0;
            for (var i = 0; i < fakeColsNb; i++) {
              //For each column, create a new wrapper div
              var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(el);
              for (var j = 0; j < rowsNb; j++) {
                //For each row in said column, calculate which slide should be present
                var index = Math.floor(count / perPage) * perPage + (i % colsNb) + j * colsNb;
                if (index < slidesNb) {
                  //If said slide exists, move it under wrapper div
                  slides.filter('[data-slide-index=' + index + ']').detach().appendTo(fakeCol);
                }
                count++;
              }
            }
            //end of 'smart' part
  
            previousRowsNb = rowsNb;
            previousColsNb = colsNb;
  
            if (reInit) {
              //re-init carousel with new markup
              carousel = el.owlCarousel(carouselOptions);
            }
          }
        };
  
        //Trigger possible update when window size changes
        $(window).on('resize', updateCarousel);
  
        //We need to execute the algorithm once before first init in any case
        updateCarousel();
      }
    }
  
    //init
    carousel = el.owlCarousel(carouselOptions);

}

// $(document).ready(function() {
    
//     var slideid1 = 'offerings-slider';
//     callcarousel(slideid1);


// });