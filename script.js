//changing & observing the styling of top, middle and bottom block
const blocks = document.querySelectorAll('.block');
let callback = (entries) => {
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
            document.getElementById("arrowDown").style.visibility = "visible";
        }

    })
}
let observer = new IntersectionObserver(callback, {
    threshold: [0.5] // If 50% of the element is in the screen, we count it!
});

let isPopupInProgress = false;
let timeoutId = null;
let prevScrollTop = 0;
if (document.getElementById("scenarioMain")) {
    //onscroll observer & popup management
    document.getElementById("scenarioMain").addEventListener("scroll", function (event) {
        blocks.forEach((block) => {
            observer.observe(block);
        });
        //display popups only on scrolls down
        const currentScrollTop = event.target.scrollTop;
        if (currentScrollTop > prevScrollTop && !isPopupInProgress) {
            clearTimeout(timeoutId);
            // if (document.querySelectorAll('.popup7.top').length === 1) {
            //     timeoutId = setTimeout(function () {
            //         checkClassesToDisplayPopup();
            //     }, 10000);
            // } else {
            timeoutId = setTimeout(function () {
                checkClassesToDisplayPopup();
            }, 100);
            // }
        }
        prevScrollTop = currentScrollTop;

        //dont animate first blocks when scrolled
        document.querySelectorAll('.block:nth-child(1) .char, .block:nth-child(2) .char, .block:nth-child(3) .char').forEach(e => {
            e.style.transform = "translateX(0)";
            e.style.animation = "none";
        });
        document.querySelectorAll('.block:nth-child(1) .charTxt, .block:nth-child(2) .charTxt, .block:nth-child(3) .charTxt').forEach(e => {
            e.style.opacity = "1";
            e.style.animation = "none";
        });
    })

    //store & toggle user type in local storage
    // window.onload = function() {
    //     const user = localStorage.getItem('user');
    //     if (user === 'student') {
    //         localStorage.setItem('user', 'student');
    //         // document.getElementById('userType').textContent = 'Change to teacher view';
    //     } else if (user === 'teacher') {
    //         localStorage.setItem('user', 'teacher');
    //         // document.getElementById('userType').textContent = 'Change to student view';
    //     }
    //
    //     const shouldDisplayPopups = localStorage.getItem('popups');
    //     if (shouldDisplayPopups === "false") {
    //         localStorage.setItem('popups', 'false');
    //         document.getElementById('popups').textContent = 'Enable popups';
    //         // document.getElementById('userType').style.visibility = "hidden";
    //     } else {
    //         localStorage.setItem('popups', 'true');
    //         document.getElementById('popups').textContent = 'Disable popups';
    //         // document.getElementById('userType').style.visibility = "visible";
    //     }
    // };
}

//first alert
document.addEventListener('DOMContentLoaded', function() {
    //scrolling down functionality fix
    if (document.getElementById("scenarioMain")) {
        addEventListener("keydown", (event) => {
            scrollDown();
        });
    }
    const user = localStorage.getItem('user');
    if (!user) {
        // Display the alert
        Swal.fire({
            title: 'Are you Student or Teacher?',
            showDenyButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Student',
            denyButtonText: `Teacher`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.setItem('user', 'student');
                if (document.getElementById("scenarioMain")) {
                    // document.getElementById('userType').textContent = 'Change to teacher view';
                }
            } else if (result.isDenied) {
                localStorage.setItem('user', 'teacher');
                if (document.getElementById("scenarioMain")) {
                    // document.getElementById('userType').textContent = 'Change to student view';
                }
            }
        })
    }
    //store & toggle user type in local storage
    if (user === 'student') {
        localStorage.setItem('user', 'student');
        // document.getElementById('userType').textContent = 'Change to teacher view';
    } else if (user === 'teacher') {
        localStorage.setItem('user', 'teacher');
        // document.getElementById('userType').textContent = 'Change to student view';
    }

    const shouldDisplayPopups = localStorage.getItem('popups');
    if (shouldDisplayPopups === "false") {
        localStorage.setItem('popups', 'false');
        if (document.getElementById("scenarioMain")) {
            document.getElementById('popups').textContent = 'Enable popups';
        }
        // document.getElementById('userType').style.visibility = "hidden";
    } else {
        localStorage.setItem('popups', 'true');
        if (document.getElementById("scenarioMain")) {
            document.getElementById('popups').textContent = 'Disable popups';
        }
        // document.getElementById('userType').style.visibility = "visible";
    }
});

// //toggling user types and popups
// function toggleUser() {
//     const user = localStorage.getItem('user');
//     // Toggle users and update local storage
//     if (user === 'teacher') {
//         document.getElementById('userType').textContent = 'Change to teacher view';
//         localStorage.setItem('user', 'student');
//     } else {
//         document.getElementById('userType').textContent = 'Change to student view';
//         localStorage.setItem('user', 'teacher');
//     }
// }

function scrollDown() {
    document.getElementById("scenarioMain").scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}
function togglePopups() {
    const shouldDisplayPopups = localStorage.getItem('popups');
    // Toggle popups and update local storage
    if (shouldDisplayPopups === 'true') {
        document.getElementById('popups').textContent = 'Enable popups';
        // document.getElementById('userType').style.visibility = "hidden";
        localStorage.setItem('popups', 'false');
    } else {
        document.getElementById('popups').textContent = 'Disable popups';
        // document.getElementById('userType').style.visibility = "visible";
        localStorage.setItem('popups', 'true');
        Swal.fire({
            title: 'Are you Student or Teacher?',
            showDenyButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Student',
            denyButtonText: `Teacher`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.setItem('user', 'student');
                if (document.getElementById("scenarioMain")) {
                    // document.getElementById('userType').textContent = 'Change to teacher view';
                }
            } else if (result.isDenied) {
                localStorage.setItem('user', 'teacher');
                if (document.getElementById("scenarioMain")) {
                    // document.getElementById('userType').textContent = 'Change to student view';
                }
            }
        })
    }
}

//displaying popups
function checkClassesToDisplayPopup() {
    if (localStorage.getItem('popups') === 'false') {
        return;
    }
    if (isPopupInProgress) {
        return;
    }
    isPopupInProgress = true;
    document.getElementById("arrowDown").style.visibility = "visible";
    const user = localStorage.getItem('user');
    if (window.location.href.includes('scenario1')) {
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
            document.getElementById("arrowDown").style.visibility = "hidden";
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
            document.getElementById("arrowDown").style.visibility = "hidden";
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
            document.getElementById("arrowDown").style.visibility = "hidden";
        }
    }
    isPopupInProgress = false;
}



// function hideHint() {
//     const elementToShow = document.getElementById('hint');
//     // elementToShow.style.display = 'none';
//     elementToShow.style.visibility = 'hidden';
// }


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
