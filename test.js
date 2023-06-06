//changing & observing the styling of top, middle and bottom block
const blocks = document.querySelectorAll('.block');
let callback = (entries, observer) => {
    entries.forEach(entry => {
        const target = entry.target;

        const targetIndex = Array.from(blocks).indexOf(target);
        if (entry.isIntersecting) {
            blocks.forEach((block) => {
                block.classList.remove('top', 'middle', 'bottom', 'bottom2');
            });
            blocks[targetIndex - 2]?.classList.add('top');
            blocks[targetIndex - 1]?.classList.add('middle');
            blocks[targetIndex]?.classList.add('bottom');
        } else {
            // Remove existing classes from all blocks
            blocks.forEach((block) => {
                block.classList.remove('top', 'middle', 'bottom2', 'bottom');
            });
            // Add appropriate classes to the current visible blocks
            blocks[targetIndex - 3]?.classList.add('top');
            blocks[targetIndex - 2]?.classList.add('middle');
            blocks[targetIndex - 1]?.classList.add('bottom2');
        }

    })
}
let observer = new IntersectionObserver(callback, {
    threshold: [0.5] // If 50% of the element is in the screen, we count it!
});

let timeoutId = null;
let prevScrollTop = 0;
document.getElementById("scenarioMain").addEventListener("scroll", function(event) {
    blocks.forEach((block) => {
        observer.observe(block);
    });
    //display popups only on scrolls down
    const currentScrollTop = event.target.scrollTop;
    if (currentScrollTop > prevScrollTop) {
        clearTimeout(timeoutId);
        // if (document.querySelectorAll('.popup7.top').length === 1) {
        //     timeoutId = setTimeout(function () {
        //         checkClassesToDisplayPopup();
        //     }, 10000);
        // } else {
            timeoutId = setTimeout(function () {
                checkClassesToDisplayPopup();
            }, 300);
        // }
    }
    prevScrollTop = currentScrollTop;
})



//popups
// function showHint(elementId) {
//     const elementToShow = document.getElementById('hint');
//     elementToShow.style.visibility = 'visible';
//     switch (elementId) {
//         case 's1p2':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Why would the teacher invite questions and then ‘hide’ in front of his computer?</p><p>What could he do differently to invite interaction with the students?<br>Is there anything in this opening scene that resonates with you and your practice?</p><p>Is this what you do?</p>',
//                     // inputAttributes: {
//                     //     id: "txt-note",
//                     //   },
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                     // confirmButtonText: 'Close'
//                 })
//             }
//             break;
//         case 's1p5':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Why is Sofia so upset here?</p><p>What do you think about Anna’s role as the local Scottish student?</p><p>As a teacher, how do you feel about the criticism here?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p6':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Interesting peer learning going on here – does this surprise you?</p><p>Do you acknowledge this in your teaching?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p7':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>The student’s feeling of powerless, where does it come from?</p><p>What can you do to ensure that students feel able to feed back, to be heard, in your classes?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p9':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>What do these comments tell us about the curriculum?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p13':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>What do Anna’s comments here tell us about our approaches to teaching, in terms of our assumptions and knowledges?</p><p>How can we invite our students’ experiences and knowledge into our curriculum content? Would you want to?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p18':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</p><p>Does Anna’s frustration make you feel sympathy towards Dr Aaron Pearson, given the context, or does it illicit a different emotion?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's2p2':
//         elementToShow.onclick = function() {
//             Swal.fire({
//                 // title: 'Error!',
//                 text: 'And here pay attention to blablablabla here...',
//                 confirmButtonText: 'Cool'
//             })
//         }
//         break;
//         default:
//             break;
//     }
// }
// function hideHint() {
//     const elementToShow = document.getElementById('hint');
//     // elementToShow.style.display = 'none';
//     elementToShow.style.visibility = 'hidden';
// }
//
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// };
//
// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       const elementId = entry.target.id;
//       if (entry.isIntersecting) {
//         showHint(elementId);
//       } else {
//         hideHint();
//       }
//     });
// }
//
// if (window.location.href.includes('scenario1')) {
//     const idsToObserve = [
//         document.getElementById('s1p2'),
//         document.getElementById('s1p5'),
//         document.getElementById('s1p6'),
//         document.getElementById('s1p7'),
//         document.getElementById('s1p9'),
//         document.getElementById('s1p13'),
//         document.getElementById('s1p18'),
//         // document.getElementById('2section2'),
//     ];
//     const observer = new IntersectionObserver(handleIntersection, options);
//     idsToObserve.forEach(e => {
//         observer.observe(e);
//     });
// }
// if (window.location.href.includes('scenario2')) {
//     const idsToObserve = [
//         document.getElementById('s2p2'),
//     ];
//     const observer = new IntersectionObserver(handleIntersection, options);
//     idsToObserve.forEach(e => {
//         observer.observe(e);
//     });
// }


//store & toggle user type in local storage
window.onload = function() {
    const user = localStorage.getItem('user');
    if (user === 'student') {
        localStorage.setItem('user', 'student');
        document.getElementById('userType').textContent = 'Change to teacher';
    } else {
        localStorage.setItem('user', 'teacher');
        document.getElementById('userType').textContent = 'Change to student';
    }

    const shouldDisplayPopups = localStorage.getItem('popups');
    if (shouldDisplayPopups === "false") {
        localStorage.setItem('popups', 'false');
        document.getElementById('popups').textContent = 'Enable popups';
    } else {
        localStorage.setItem('popups', 'true');
        document.getElementById('popups').textContent = 'Disable popups';
    }
};
function toggleUser() {
    const user = localStorage.getItem('user');
    // Toggle user role and update local storage
    if (user === 'teacher') {
        document.getElementById('userType').textContent = 'Change to teacher';
        localStorage.setItem('user', 'student');
    } else {
        document.getElementById('userType').textContent = 'Change to student';
        localStorage.setItem('user', 'teacher');
    }
}
function togglePopups() {
    const shouldDisplayPopups = localStorage.getItem('popups');
    // Toggle user role and update local storage
    if (shouldDisplayPopups === 'true') {
        document.getElementById('popups').textContent = 'Enable popups';
        localStorage.setItem('popups', 'false');
    } else {
        document.getElementById('popups').textContent = 'Disable popups';
        localStorage.setItem('popups', 'true');
    }
}

//displaying popups
function checkClassesToDisplayPopup() {
    if (localStorage.getItem('popups') === 'false') {
        return;
    }
    const user = localStorage.getItem('user');
    if (window.location.href.includes('scenario1')) {
        isLastPopup = 0;
        if (document.querySelectorAll('.popup1.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>Why would the teacher invite questions and then ‘hide’ in front of his computer?</p><p>What could he do differently to invite interaction with the students?<br>Is there anything in this opening scene that resonates with you and your practice?</p><p>Is this what you do?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>Why do you think the teacher invites questions but then doesn’t encourage interaction?</p><p>Is this familiar to you?</p><p>As students, what kind of interaction would you like here? What would make you approach the teacher?</p><p>What could he do differently to invite interaction with the students?</p><p>Is there anything in this opening scene that resonates with you and your practice?</p><p>Is this what you do?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>Why is Sofia so upset here?</p><p>What do you think about Anna’s role as the local Scottish student?</p><p>As a teacher, how do you feel about the criticism here?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>As a student, does Sofia and/or Anna’s response resonate?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>Interesting peer learning going on here – does this surprise you? Do you acknowledge this in your teaching?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>The student’s feeling of powerless, where does it come from?</p><p>What can you do to ensure that students feel able to feed back, to be heard, in your classes?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>Does this powerless surprise you?</p><p>Are there ways in which you could influence/feedback to staff?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What do these comments tell us about the curriculum?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>What do these comments tells us about the formal materials you are taught?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup6.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What do Anna’s comments here tell us about our approaches to teaching, in terms of our assumptions and knowledges?</p><p>How can we invite our students’ experiences and knowledge into our curriculum content?</p><p>Would you want to?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>Anna’s frustration here is clear, how does that make you feel, as a student? Is she right do you think and if so, why?</p><p>How can we invite our students’ experiences and knowledge into our curriculum content?</p><p>Would you want to?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup7.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</p><p>Does Anna’s frustration make you feel sympathy towards Dr Aaron Pearson, given the context, or does it illicit a different emotion?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        }
    } else if (window.location.href.includes('scenario2')) {
        if (document.querySelectorAll('.popup1.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What do you think is going on here?</p><p>What does it tell you about some of the group dynamics at play here?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What is the point of this anecdote here, do you think?</p><p>It is clear that students relate their extracurricular life to their expectations of groupwork, and also how they interact as a result. What do you do as a lecturer/teacher to scaffold groupwork?</p><p>How do you think about your role and its position of authority, of power? What are the ways in which you enact it in your teaching, and how do you acknowledge it?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>How does this scenario so far relate to your experiences of groupwork, both in the university context and beyond?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>There are some interesting reflections here on staff-student dynamics, what surprises you about this dialogue?</p><p>What expectations do you have about student behaviour and/or engagement and how do you manage those in the classroom setting?</p><p>There is explicit reference here to the unease of a colleague when a student talks about racism – why do you think the teacher would have responded in this way? What message does that send out to the students and what would you do differently?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>It feels like there are a lot of assumptions going on here, both from the students’ perspectives but also in the way they describe the staff responses.</p><p>What ideas do you have about how we can:</p><ul><li>Demonstrate ‘respect’ both as staff members and as students?</li><li>Convince our students that we care (or do we?)</li></ul>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>It feels like there are a lot of assumptions going on here, both from the students’ perspectives but also in the way they describe the staff responses.</p><p>What ideas do you have about how we can:</p><ul><li>Demonstrate ‘respect’ both as staff members and as students?</li><li>Explore our assumptions and differences together?</li></ul>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>There is an important link established here between the curriculum and student agency, their sense of (not) being heard and their experiences (not) valued.</p><p>What do you do already in your context to try and make this link explicit? Is there anything you could be doing differently?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>Is there anything in this part that resonates and if so, what?</p><p>Do you offer feedback when offered through formal and informal mechanisms?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        }
    } else if (window.location.href.includes('scenario3')) {
        if (document.querySelectorAll('.popup1.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>How does this opening resonate with you?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>Does this opening surprise you?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>While it is great that Hana can call out her colleague here, what do you feel about his assumptions and inability to see that he has been racist?</p><p>What do you think about Hana having to share her personal story to make her point?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>How does this part make you feel in terms of what it says about staff perspectives on inclusion?</p><p>There are some interesting reflections on academic freedom here, a very contentious topic. What do you make of Hana’s approach to teaching?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>How does this part make you feel in terms of what it says about staff perspectives on inclusion?</p><p>How do you feel about some of the wider conversations on academic freedom and cancel culture?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What do you think about Mary’s realisation that our university culture and practices are in fact colonial and that our students can enlighten us?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>What do you think about Mary’s realisation that our university culture and practices are in fact colonial and that our students can enlighten us?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>What, if anything, are you learning from this dialogue about our own approaches to teaching and how we listen to our students?</p><p>What do you make of Aaron Pearson’s response to his colleague’s insights?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>As a student, how do you respond to this part?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup6.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything in this dialogue that makes you feel uncomfortable? If so, why?</p><p>How do you feel about the changing landscape of higher education (is it?)</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything in this dialogue that makes you feel uncomfortable? If so, why?</p><p>What, for you, is the purpose of higher education?</p>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        }
    }
}






// const blocks = document.querySelectorAll('.block');
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
// };
//
// const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//         const target = entry.target;
//         const targetIndex = Array.from(blocks).indexOf(target);
//
//         if (entry.isIntersecting) {
//             // Remove existing classes from all blocks
//             blocks.forEach((block) => {
//                 block.classList.remove('top', 'middle', 'bottom');
//             });
//             blocks[targetIndex - 2]?.classList.add('top');
//             blocks[targetIndex - 1]?.classList.add('middle');
//             blocks[targetIndex]?.classList.add('bottom');
//         }
//         else {
//             // Remove existing classes from all blocks
//             blocks.forEach((block) => {
//                 block.classList.remove('top', 'middle', 'bottom');
//             });
//             // Add appropriate classes to the current visible blocks
//             blocks[targetIndex - 3]?.classList.add('top');
//             blocks[targetIndex - 2]?.classList.add('middle');
//             blocks[targetIndex - 1]?.classList.add('bottom');
//         }
//     });
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// blocks.forEach((block) => {
//     observer.observe(block);
// });






// function applyAnimationDelays(selector, delay) {
//     var elements = document.querySelectorAll(selector);
//
//     for (var i = 0; i < elements.length; i++) {
//         var animationDelay = i * delay;
//         elements[i].style.animationDelay = animationDelay + 's';
//     }
// }
//
// window.addEventListener('load', function() {
//     applyAnimationDelays('.block', 2);
// });






// var getElementsInArea = (function(docElm){
//     var viewportHeight = docElm.clientHeight;
//
//     return function(e, opts){
//         var found = [], i;
//
//         if( e && e.type == 'resize' )
//             viewportHeight = docElm.clientHeight;
//
//         for( i = opts.elements.length; i--; ){
//             var elm        = opts.elements[i],
//                 pos        = elm.getBoundingClientRect(),
//                 topPerc    = pos.top    / viewportHeight * 100,
//                 bottomPerc = pos.bottom / viewportHeight * 100,
//                 middle     = (topPerc + bottomPerc)/2,
//                 inViewport = middle > opts.zone[1] &&
//                     middle < (100-opts.zone[1]);
//
//             elm.classList.toggle(opts.markedClass, inViewport);
//
//             if( inViewport )
//                 found.push(elm);
//         }
//     };
// })(document.documentElement);
//
// document.getElementById("scenarioMain").addEventListener('scroll', f)
// // window.addEventListener('resize', f)
//
// function f(e){
//     getElementsInArea(e, {
//         elements    : document.querySelectorAll('.block'),
//         markedClass : 'top',
//         zone        : [0, 64] // percentage distance from top & bottom
//     });
//     getElementsInArea(e, {
//         elements    : document.querySelectorAll('.block'),
//         markedClass : 'middle',
//         zone        : [33, 33] // percentage distance from top & bottom
//     });
//
//     getElementsInArea(e, {
//         elements    : document.querySelectorAll('.block'),
//         markedClass : 'bottom',
//         zone        : [49, 49] // percentage distance from top & bottom
//     });
// }




// const blocks = document.querySelectorAll('.block');
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
// };
//
// const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//         const target = entry.target;
//
//         if (entry.isIntersecting) {
//             // Remove existing classes from all blocks
//             blocks.forEach((block) => {
//                 block.classList.remove('top', 'middle', 'bottom');
//             });
//
//             // Add appropriate classes to the current visible blocks
//             const visibleBlocks = Array.from(entries)
//                 .filter((entry) => entry.isIntersecting)
//                 .map((entry) => entry.target);
//
//             visibleBlocks.forEach((block, index) => {
//                 if (index === 0) {
//                     block.classList.add('top');
//                 } else if (index === visibleBlocks.length - 1) {
//                     block.classList.add('bottom');
//                 } else {
//                     block.classList.add('middle');
//                 }
//             });
//         }
//     });
// };
//
// const observer = new IntersectionObserver(observerCallback, observerOptions);
//
// blocks.forEach((block) => {
//     observer.observe(block);
// });


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
//todo
// function showHint(elementId) {
//     const elementToShow = document.getElementById('hint');
//     elementToShow.style.visibility = 'visible';
//     switch (elementId) {
//         case 's1p2':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Why would the teacher invite questions and then ‘hide’ in front of his computer?</p><p>What could he do differently to invite interaction with the students?<br>Is there anything in this opening scene that resonates with you and your practice?</p><p>Is this what you do?</p>',
//                     // inputAttributes: {
//                     //     id: "txt-note",
//                     //   },
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                     // confirmButtonText: 'Close'
//                 })
//             }
//             break;
//         case 's1p5':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Why is Sofia so upset here?</p><p>What do you think about Anna’s role as the local Scottish student?</p><p>As a teacher, how do you feel about the criticism here?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p6':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>Interesting peer learning going on here – does this surprise you?</p><p>Do you acknowledge this in your teaching?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p7':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>The student’s feeling of powerless, where does it come from?</p><p>What can you do to ensure that students feel able to feed back, to be heard, in your classes?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p9':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>What do these comments tell us about the curriculum?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p13':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>What do Anna’s comments here tell us about our approaches to teaching, in terms of our assumptions and knowledges?</p><p>How can we invite our students’ experiences and knowledge into our curriculum content? Would you want to?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's1p18':
//             elementToShow.onclick = function() {
//                 Swal.fire({
//                     // title: 'Error!',
//                     html: '<p>How would you describe the overall tone and language here?</p><p>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</p><p>Does Anna’s frustration make you feel sympathy towards Dr Aaron Pearson, given the context, or does it illicit a different emotion?</p>',
//                     showCloseButton: true,
//                     showConfirmButton: false,
//                 })
//             }
//             break;
//         case 's2p2':
//         elementToShow.onclick = function() {
//             Swal.fire({
//                 // title: 'Error!',
//                 text: 'And here pay attention to blablablabla here...',
//                 confirmButtonText: 'Cool'
//             })
//         }
//         break;
//         default:
//             break;
//     }
// }
// function hideHint() {
//     const elementToShow = document.getElementById('hint');
//     // elementToShow.style.display = 'none';
//     elementToShow.style.visibility = 'hidden';
// }
//
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// };
//
// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       const elementId = entry.target.id;
//       if (entry.isIntersecting) {
//         showHint(elementId);
//       } else {
//         hideHint();
//       }
//     });
// }
//
// if (window.location.href.includes('scenario1')) {
//     const idsToObserve = [
//         document.getElementById('s1p2'),
//         document.getElementById('s1p5'),
//         document.getElementById('s1p6'),
//         document.getElementById('s1p7'),
//         document.getElementById('s1p9'),
//         document.getElementById('s1p13'),
//         document.getElementById('s1p18'),
//         // document.getElementById('2section2'),
//     ];
//     const observer = new IntersectionObserver(handleIntersection, options);
//     idsToObserve.forEach(e => {
//         observer.observe(e);
//     });
// }
// if (window.location.href.includes('scenario2')) {
//     const idsToObserve = [
//         document.getElementById('s2p2'),
//     ];
//     const observer = new IntersectionObserver(handleIntersection, options);
//     idsToObserve.forEach(e => {
//         observer.observe(e);
//     });
// }
//todo












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
