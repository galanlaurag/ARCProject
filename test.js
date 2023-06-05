// document.getElementById("scenarioMain").addEventListener("scroll", function() {
//     // console.log("scroll");
//     // console.log(document.getElementById("3").scrollTop);
//     console.log(document.getElementById("3").getBoundingClientRect());
// })





// function displayPopUp() {
//     alert("Element is now visible in the viewport!");
// }


// const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px', // No margin around the viewport
//     // threshold: 0.5 // 50% of the element visible to trigger the callback
//     threshold: [0, 1] // Trigger the callback when element enters and exits viewport
// };
// var lightBulb = document.getElementById("lightBulb");

// // Callback function for the Intersection Observer
// function handleIntersection(entries, observer) {
//     // document.getElementById("scenarioMain").addEventListener("scroll", function() {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//             // The element is now visible in the viewport
//             lightBulb.style.display = "block";

//             // alert
//             lightBulb.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     text: 'PAy attention to blablablabla here...',
//                     confirmButtonText: 'Cool'
//                 })
//             }
//             observer.unobserve(entry.target); // Stop observing after displaying the pop-up
//             } else {
//                 console.log("else")
//                 lightBulb.style.display = "none";
//             }
//         });
//     // });
// }

// // Element to observe
// const elementToObserve = document.getElementById('3');

// // Create the Intersection Observer instance
// const observer = new IntersectionObserver(handleIntersection, options);

// // Start observing the element
// observer.observe(elementToObserve);




// works
// // Function to make the element visible
// function showElement() {
//     const elementToShow = document.getElementById('lightBulb');
//     elementToShow.style.display = 'block';
//     elementToShow.onclick = function() {
//         alert("Element is now visible in the viewport!");
//     }

//   }
// // Function to hide the element
// function hideElement() {
//     const elementToShow = document.getElementById('lightBulb');
//     elementToShow.style.display = 'none';
//   }
  
//   // Options for the Intersection Observer
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px', // No margin around the viewport
//     threshold: 0.5 // 50% of the element visible to trigger the callback
//   };
  
//   // Callback function for the Intersection Observer
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // The element is now visible in the viewport
//         showElement();
//       } else {
//         // The element is no longer visible in the viewport
//         hideElement();
//       }
//     });
//   }
  
//   // Element to observe
//   const elementToObserve = document.getElementById('3');
  
//   // Create the Intersection Observer instance
//   const observer = new IntersectionObserver(handleIntersection, options);
  
//   // Start observing the element
//   observer.observe(elementToObserve);




// popup windows on hint click
function showHint(elementId) {
    const elementToShow = document.getElementById('hint');
    elementToShow.style.visibility = 'visible';
    switch (elementId) {
        case 's1p2':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>Why would the teacher invite questions and then ‘hide’ in front of his computer?</p><p>What could he do differently to invite interaction with the students?<br>Is there anything in this opening scene that resonates with you and your practice?</p><p>Is this what you do?</p>',
                    // inputAttributes: {
                    //     id: "txt-note",
                    //   },
                    showCloseButton: true,
                    showConfirmButton: false,
                    // confirmButtonText: 'Close'
                })
            }
            break;
        case 's1p5':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>Why is Sofia so upset here?</p><p>What do you think about Anna’s role as the local Scottish student?</p><p>As a teacher, how do you feel about the criticism here?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's1p6':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>Interesting peer learning going on here – does this surprise you?</p><p>Do you acknowledge this in your teaching?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's1p7':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>The student’s feeling of powerless, where does it come from?</p><p>What can you do to ensure that students feel able to feed back, to be heard, in your classes?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's1p9':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>What do these comments tell us about the curriculum?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's1p13':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>What do Anna’s comments here tell us about our approaches to teaching, in terms of our assumptions and knowledges?</p><p>How can we invite our students’ experiences and knowledge into our curriculum content? Would you want to?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's1p18':
            elementToShow.onclick = function() {
                Swal.fire({
                    // title: 'Error!',
                    html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</p><p>Does Anna’s frustration make you feel sympathy towards Dr Aaron Pearson, given the context, or does it illicit a different emotion?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            break;
        case 's2p2':
        elementToShow.onclick = function() {
            Swal.fire({
                // title: 'Error!',
                text: 'And here pay attention to blablablabla here...',
                confirmButtonText: 'Cool'
            })
        }
        break;
        default:
            break;
    }
}
function hideHint() {
    const elementToShow = document.getElementById('hint');
    // elementToShow.style.display = 'none';
    elementToShow.style.visibility = 'hidden';
}
  
const options = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.5 
};
  
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementId = entry.target.id;
      if (entry.isIntersecting) {
        showHint(elementId);
      } else {
        hideHint();
      }
    });
}
  
if (window.location.href.includes('scenario1')) {
    const idsToObserve = [
        document.getElementById('s1p2'),
        document.getElementById('s1p5'),
        document.getElementById('s1p6'),
        document.getElementById('s1p7'),
        document.getElementById('s1p9'),
        document.getElementById('s1p13'),
        document.getElementById('s1p18'),
        // document.getElementById('2section2'),
    ];
    const observer = new IntersectionObserver(handleIntersection, options);
    idsToObserve.forEach(e => {
        observer.observe(e);
    });
}
if (window.location.href.includes('scenario2')) {
    const idsToObserve = [
        document.getElementById('s2p2'),
    ];
    const observer = new IntersectionObserver(handleIntersection, options);
    idsToObserve.forEach(e => {
        observer.observe(e);
    });
}



// var content = 'Alright everyone, we’re going to take a short break here.';
// var content2 = 'Get yourselves a drink and have a little think about the social implications of what we’ve just been learning about this morning.';

// var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
// var ele2 = '<span>' + content2.split('').join('</span><span>') + '</span>';


// $(ele).hide().appendTo('#txt1').each(function (i) {
//     $(this).delay(50 * i).css({
//         display: 'inline',
//         opacity: 0
//     }).animate({
//         opacity: 1
//     }, 100);
// });
// $(ele2).hide().appendTo('#txt2').each(function (i) {
//     $(this).delay(50 * i).css({
//         display: 'inline',
//         opacity: 0
//     }).animate({
//         opacity: 1
//     }, 100);
// });



// typewriter - runs one after the other but fully automatically
// var contents = [
//     'Alright everyone, we’re going to take a short break here.',
//     'Get yourselves a drink and have a little think about the social implications of what we’ve just been learning about this morning.',
//     'I’ll be up at the front if anyone has any questions, otherwise we’ll start back up in about ten minutes.',
//     'Students shuffle around the room in their seats, some getting up in small clusters to head to the canteen. No one approaches Pearson, who sits by the front monitor and sips from his hydroflask while scrolling mindlessly on the computer.',
//     // Add more content strings here
//   ];
//
//   var delay = 50;
//
//   function animateContent(content, target) {
//     var elements = '<span>' + content.split('').join('</span><span>') + '</span>';
//
//     $(elements).hide().appendTo(target).each(function (i) {
//       var element = $(this);
//       setTimeout(function () {
//         element.css({
//           display: 'inline',
//           opacity: 0
//         }).animate({
//           opacity: 1
//         }, 100);
//       }, delay * i);
//     });
//   }
//
//   function animateSequentially(index) {
//     if (index < contents.length) {
//       animateContent(contents[index], '#txt' + (index + 1));
//       setTimeout(function () {
//         animateSequentially(index + 1);
//       }, contents[index].length * delay + 500);
//     }
//   }
//   animateSequentially(0);



//runs only when id in the viewport
// var contents = [
//     'Alright everyone, we’re going to take a short break here.',
//     'Get yourselves a drink and have a little think about the social implications of what we’ve just been learning about this morning.',
//     'I’ll be up at the front if anyone has any questions, otherwise we’ll start back up in about ten minutes.',
//     'Students shuffle around the room in their seats, some getting up in small clusters to head to the canteen. No one approaches Pearson, who sits by the front monitor and sips from his hydroflask while scrolling mindlessly on the computer.',
//     // Add more content strings here
// ];
//
// var delay = 50;
// var observer;
// var animatedElements = {};
//
// function animateContent(content, target) {
//     var elements = '<span>' + content.split('').join('</span><span>') + '</span>';
//
//     $(elements).hide().appendTo(target).each(function (i) {
//         var element = $(this);
//         setTimeout(function () {
//             element.css({
//                 display: 'inline',
//                 opacity: 0
//             }).animate({
//                 opacity: 1
//             }, 100);
//         }, delay * i);
//     });
// }
//
// function animateSequentially(index) {
//     if (index < contents.length) {
//         var target = '#txt' + (index + 1);
//         if (!animatedElements[target]) {
//             animateContent(contents[index], target);
//             animatedElements[target] = true;
//         }
//         setTimeout(function () {
//             animateSequentially(index + 1);
//         }, (contents[index].length + 1) * delay + 500);
//     }
// }
//
// function startAnimationWhenVisible() {
//     var targets = $('[id^=txt]');
//     observer = new IntersectionObserver(function (entries) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//                 // Start animation when element enters the viewport
//                 var index = parseInt(entry.target.id.slice(3)) - 1;
//                 animateSequentially(index);
//                 observer.unobserve(entry.target); // Stop observing once animated
//             }
//         });
//     });
//
//     targets.each(function (index) {
//         observer.observe(this);
//     });
// }
//
// // Wait for the document to be fully loaded
// $(document).ready(function () {
//     // Start observing when the page is ready
//     startAnimationWhenVisible();
// });



// animating stoppable by clicking button
// var contents = [
//     'Alright everyone, we’re going to take a short break here.',
//     'Get yourselves a drink and have a little think about the social implications of what we’ve just been learning about this morning.',
//     'I’ll be up at the front if anyone has any questions, otherwise we’ll start back up in about ten minutes.',
//     'Students shuffle around the room in their seats, some getting up in small clusters to head to the canteen. No one approaches Pearson, who sits by the front monitor and sips from his hydroflask while scrolling mindlessly on the computer.',
//     // Add more content strings here
// ];
//
// var delay = 50;
//
// function animateContent(content, target) {
//     var elements = '<span>' + content.split('').join('</span><span>') + '</span>';
//
//     $(elements).hide().appendTo(target).each(function (i) {
//         var element = $(this);
//         setTimeout(function () {
//             element.css({
//                 display: 'inline',
//                 opacity: 0
//             }).animate({
//                 opacity: 1
//             }, 100);
//         }, delay * i);
//     });
// }
//
//
// function animateSequentially(index) {
//     if (index < contents.length) {
//         var target = '#txt' + (index + 1);
//         var targetElement = document.querySelector(target);
//
//         // Check if the target element already contains the complete content
//         if (targetElement.textContent === contents[index]) {
//             animateSequentially(index + 1);
//             return;
//         }
//
//         var observer = new IntersectionObserver(function (entries, observer) {
//             if (entries[0].isIntersecting) {
//                 animateContent(contents[index], target);
//                 observer.unobserve(entries[0].target);
//                 setTimeout(function () {
//                     animateSequentially(index + 1);
//                 }, contents[index].length * delay + 500);
//             }
//         });
//
//         observer.observe(targetElement);
//     }
// }
//
// animateSequentially(0);
//
// // stop animating text on button click
// // function fillContent() {
// //     for (var i = 0; i < contents.length; i++) {
// //         var target = '#txt' + (i + 1);
// //         $(target).text(contents[i]);
// //     }
// // }
// var animationRunning = true;
// function fillContent() {
//     if (animationRunning) {
//         // Stop the animation
//         animationRunning = false;
//         $('#fillButton').text('Animate text');
//         for (var i = 0; i < contents.length; i++) {
//             var target = '#txt' + (i + 1);
//             $(target).text(contents[i]);
//         }
//     } else {
//         // Start the animation from the beginning
//         animationRunning = true;
//         $('#fillButton').text('Stop animating text');
//         for (var i = 0; i < contents.length; i++) {
//             var target = '#txt' + (i + 1);
//             $(target).text('');
//         }
//         animateSequentially(0);
//     }
// }
//
// // Call the function when the button is clicked
// $('#fillButton').click(fillContent);






// typewriter - runs one after the other, toggle button to stop and start animating with consideration of the last animated index
// var contents = [
//     'Alright everyone, we’re going to take a short break here.',
//     'Get yourselves a drink and have a little think about the social implications of what we’ve just been learning about this morning.',
//     'I’ll be up at the front if anyone has any questions, otherwise we’ll start back up in about ten minutes.',
//     'Students shuffle around the room in their seats, some getting up in small clusters to head to the canteen. No one approaches Pearson, who sits by the front monitor and sips from his hydroflask while scrolling mindlessly on the computer.',
//     'Hey Sofia, did any of that seem… right to you? Like a lot of that sounded very missing-important-context right?',
//     'Softly sighs while staring at the last slide on the projector. Yeah, he didn’t mention a word about any of the coups that have plagued the country before or after that revolution.',
//     // Add more content strings here
// ];
//
// var delay = 10;
// var animationRunning = true;
// var animationTimeouts = [];
// var lastAnimatedIndex = 0;
//
// function animateContent(content, target) {
//     var elements = '<span>' + content.split('').join('</span><span>') + '</span>';
//
//     $(elements)
//         .hide()
//         .appendTo(target)
//         .each(function (i) {
//             var element = $(this);
//             var timeout = setTimeout(function () {
//                 element.css({
//                     display: 'inline',
//                     opacity: 0,
//                 }).animate(
//                     {
//                         opacity: 1,
//                     },
//                     100
//                 );
//             }, delay * i);
//             animationTimeouts.push(timeout);
//         });
// }
//
// // function animateSequentially(index) {
// //     lastAnimatedIndex = index;
// //     if (index < contents.length) {
// //         var target = '#txt' + (index + 1);
// //         var targetElement = document.querySelector(target);
// //         var textContainerElement = $(target).parent();
// //         var characterElement = textContainerElement.parent().find('.char');
// //
// //         // Check if the target element already contains the complete content
// //         // if (targetElement.textContent === contents[index]) {
// //         //     animateSequentially(index + 1);
// //         //     return;
// //         // }
// //         //
// //         // var observer = new IntersectionObserver(function (entries, observer) {
// //         //     if (entries[0].isIntersecting) {
// //         //         animateContent(contents[index], target);
// //         //         observer.unobserve(entries[0].target);
// //         //         var timeout = setTimeout(function () {
// //         //             animateSequentially(index + 1);
// //         //         }, contents[index].length * delay + 500);
// //         //         animationTimeouts.push(timeout);
// //         //     }
// //         // });
// //         //
// //         // observer.observe(targetElement);
// //
// //
// //         if (targetElement.textContent !== contents[index]) {
// //             characterElement
// //                 .hide()
// //                 .css({
// //                     opacity: 0
// //                 })
// //                 .show()
// //                 .animate(
// //                     {
// //                         opacity: '1'
// //                     },
// //                     500,
// //                     function () {
// //                         textContainerElement
// //                             .hide()
// //                             .css({
// //                                 opacity: 0
// //                             })
// //                             .show()
// //                             .animate(
// //                                 {
// //                                     opacity: 1
// //                                 },
// //                                 500,
// //                                 function () {
// //                                     // Check if the target element already contains the complete content
// //                                     if (targetElement.textContent === contents[index]) {
// //                                         animateSequentially(index + 1);
// //                                         return;
// //                                     }
// //                                     var observer = new IntersectionObserver(function (entries, observer) {
// //                                         if (entries[0].isIntersecting) {
// //                                             animateContent(contents[index], target);
// //                                             observer.unobserve(entries[0].target);
// //                                             var timeout = setTimeout(function () {
// //                                                 animateSequentially(index + 1);
// //                                             }, contents[index].length * delay + 500);
// //                                             animationTimeouts.push(timeout);
// //                                         }
// //                                     });
// //                                     observer.observe(targetElement);
// //                                 }
// //                             );
// //                     }
// //                 );
// //         }
// //     }
// // }
// function animateSequentially(index) {
//     lastAnimatedIndex = index;
//     if (index < contents.length) {
//         var target = '#txt' + (index + 1);
//         var targetElement = document.querySelector(target);
//         var textContainerElement = $(target).parent();
//         var characterElement = textContainerElement.parent().find('.char');
//
//         // Check if the target element exists in the page before making changes
//         if (!targetElement) {
//             return;
//         }
//
//         //observe if element is in the viewport before running an animation
//         var observer = new IntersectionObserver(function (entries, observer) {
//             if (entries[0].isIntersecting) {
//                 if (targetElement.textContent !== contents[index]) {
//                     characterElement
//                         .hide()
//                         .css({
//                             opacity: 0
//                         })
//                         .show()
//                         .animate(
//                             {
//                                 opacity: '1'
//                             },
//                             500,
//                             function () {
//                                 textContainerElement
//                                     .hide()
//                                     .css({
//                                         opacity: 0
//                                     })
//                                     .show()
//                                     .animate(
//                                         {
//                                             opacity: 1
//                                         },
//                                         500,
//                                         function () {
//                                             animateContent(contents[index], target);
//                                             observer.unobserve(entries[0].target);
//                                             var timeout = setTimeout(function () {
//                                                 // Check if the target element isn't empty
//                                                 if (targetElement.textContent !== '') {
//                                                     animateSequentially(index + 1);
//                                                 }
//                                             }, contents[index].length * delay + 500);
//                                             animationTimeouts.push(timeout);
//                                         }
//                                     );
//                             }
//                         );
//                 }
//             }
//         });
//         observer.observe(targetElement);
//     }
// }
//
// function resetAnimation() {
//     // Clear animation timeouts
//     animationTimeouts.forEach(function (timeout) {
//         clearTimeout(timeout);
//     });
//     animationTimeouts = [];
//
//     // Clear target elements' content
//     for (var i = lastAnimatedIndex; i < contents.length; i++) {
//         var target = '#txt' + (i + 1);
//         $(target).parent().css({opacity: '0'});
//         $(target).parent().parent().find('.char').css({opacity: '0'});
//         $(target).text('');
//     }
//
//     // Restart the animation
//     animateSequentially(lastAnimatedIndex);
// }
//
// function fillContent() {
//     if (animationRunning) {
//         // Start the animation from the beginning
//         animationRunning = false;
//         $('#fillButton').text('Animate text');
//         for (var i = 0; i < contents.length; i++) {
//             var target = '#txt' + (i + 1);
//             $(target).parent().css({opacity: '1'});
//             $(target).parent().parent().find('.char').css({opacity: '1'});
//             $(target).text(contents[i]);
//         }
//     } else {
//         // Stop the animation
//         animationRunning = true;
//         $('#fillButton').text('Stop animating text');
//         resetAnimation();
//     }
// }
//
// // Call the function when the button is clicked
// $('#fillButton').click(fillContent);
//
// // Start the animation on page load
// animateSequentially(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
