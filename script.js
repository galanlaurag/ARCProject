//changing & observing the styling of top, middle and bottom block
const blocks = document.querySelectorAll('.block');
let callback = (entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        const targetIndex = Array.from(blocks).indexOf(target);
        if (entry.isIntersecting) {
            blocks.forEach((block) => {
                block.classList.remove('hidden', 'top', 'middle', 'bottom', 'bottom2');
            });
            blocks[targetIndex - 3]?.classList.add('hidden');
            blocks[targetIndex - 2]?.classList.add('top');
            blocks[targetIndex - 1]?.classList.add('middle');
            blocks[targetIndex]?.classList.add('bottom');
        } else {
            // Remove existing classes from all blocks
            blocks.forEach((block) => {
                block.classList.remove('hidden', 'top', 'middle', 'bottom2', 'bottom');
            });
            // Add appropriate classes to the current visible blocks
            blocks[targetIndex - 4]?.classList.add('hidden');
            blocks[targetIndex - 3]?.classList.add('top');
            blocks[targetIndex - 2]?.classList.add('middle');
            blocks[targetIndex - 1]?.classList.add('bottom2');
            document.getElementById("arrowDown").style.visibility = "visible";
        }

    })
}
let observer = new IntersectionObserver(callback, {
    threshold: [0.5] // If 50% of the element is in the screen, we count it
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
            timeoutId = setTimeout(function () {
                checkClassesToDisplayPopup();
            }, 300);
        }
        prevScrollTop = currentScrollTop;

        //don't animate first blocks when scrolled
        document.querySelectorAll('.block:nth-child(1) .char, .block:nth-child(2) .char, .block:nth-child(3) .char, .block:nth-child(2) .backgroundTxt, .block:nth-child(3) .backgroundTxt').forEach(e => {
            e.style.opacity = "1";
            e.style.animation = "none";
        });
    })
}

//first alert
document.addEventListener('DOMContentLoaded', function() {
    //scrolling down functionality fix
    if (document.getElementById("scenarioMain")) {
        addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown") {
                scrollDown();
            } else if (event.key === "ArrowUp") {
                scrollUp();
            }
        });
    }
    const user = localStorage.getItem('user');
    if (!user) {
        Swal.fire({
            title: 'Are you Student or Teacher?',
            showDenyButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Student',
            denyButtonText: `Teacher`,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('user', 'student');
                if (document.getElementById("scenarioMain")) {
                }
            } else if (result.isDenied) {
                localStorage.setItem('user', 'teacher');
                if (document.getElementById("scenarioMain")) {
                }
            }
        })
        document.querySelector(".swal2-checkbox input").setAttribute("id", "swal2-checkbox");
    }
    //store & toggle user type in local storage
    if (user === 'student') {
        localStorage.setItem('user', 'student');
    } else if (user === 'teacher') {
        localStorage.setItem('user', 'teacher');
    }

    const shouldDisplayPopups = localStorage.getItem('popups');
    if (shouldDisplayPopups === "false") {
        localStorage.setItem('popups', 'false');
        if (document.getElementById("scenarioMain")) {
            document.getElementById('popups').textContent = 'Enable popups';
        }
    } else {
        localStorage.setItem('popups', 'true');
        if (document.getElementById("scenarioMain")) {
            document.getElementById('popups').textContent = 'Disable popups';
        }
    }
});

function scrollDown() {
    document.getElementById("scenarioMain").scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}
function scrollUp() {
    document.getElementById("scenarioMain").scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
    });
}
function togglePopups() {
    const shouldDisplayPopups = localStorage.getItem('popups');
    // Toggle popups and update local storage
    if (shouldDisplayPopups === 'true') {
        document.getElementById('popups').textContent = 'Enable popups';
        localStorage.setItem('popups', 'false');
    } else {
        document.getElementById('popups').textContent = 'Disable popups';
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
            } else if (result.isDenied) {
                localStorage.setItem('user', 'teacher');
            }
        })
        document.querySelector(".swal2-checkbox input").setAttribute("id", "swal2-checkbox");
    }
}

//displaying popups
function checkClassesToDisplayPopup() {
    if ((localStorage.getItem('popups') === 'false') || isPopupInProgress) {
        //still hide arrow at the bottom of the page when popups disabled
        if ((window.location.href.includes('scenario1') && (document.querySelectorAll('.popup7.top').length === 1))
            || ((window.location.href.includes('scenario2') && document.querySelectorAll('.popup5.top').length === 1))
            || ((window.location.href.includes('scenario3') && document.querySelectorAll('.popup6.top').length === 1))) {
            document.getElementById("arrowDown").style.visibility = "hidden";
        } else {
            document.getElementById("arrowDown").style.visibility = "visible";
        }
        return;
    }
    isPopupInProgress = true;
    document.getElementById("arrowDown").style.visibility = "visible";
    const user = localStorage.getItem('user');
    if (window.location.href.includes('scenario1')) {
        if (document.querySelectorAll('.popup1.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>Why would the teacher invite questions and then ‘hide’ in front of his computer?</h3><h3>What could he do differently to invite interaction with the students?</h3><h3>Is there anything in this opening scene that resonates with you and your practice?</h3><h3>Is this what you do?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>Why do you think the teacher invites questions but then doesn’t encourage interaction?</h3><h3>Is this familiar to you?</h3><h3>As students, what kind of interaction would you like here? What would make you approach the teacher?</h3><h3>What could he do differently to invite interaction with the students?</h3><h3>Is there anything in this opening scene that resonates with you and your practice?</h3><h3>Is this what you do?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>Why is Sofia so upset here?</h3><h3>What do you think about Anna’s role as the local Scottish student?</h3><h3>As a teacher, how do you feel about the criticism here?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>As a student, does Sofia and/or Anna’s response resonate?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>Interesting peer learning going on here – does this surprise you? Do you acknowledge this in your teaching?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>The student’s feeling of powerless, where does it come from?</h3><h3>What can you do to ensure that students feel able to feed back, to be heard, in your classes?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>Does this powerless surprise you?</h3><h3>Are there ways in which you could influence/feedback to staff?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>What do these comments tell us about the curriculum?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>What do these comments tells us about the formal materials you are taught?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup6.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>What do Anna’s comments here tell us about our approaches to teaching, in terms of our assumptions and knowledges?</h3><h3>How can we invite our students’ experiences and knowledge into our curriculum content?</h3><h3>Would you want to?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>Anna’s frustration here is clear, how does that make you feel, as a student? Is she right do you think and if so, why?</h3><h3>How can we invite our students’ experiences and knowledge into our curriculum content?</h3><h3>Would you want to?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup7.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>How would you describe the overall tone and language here?</h3><h3>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</h3><h3>Does Anna’s frustration make you feel sympathy towards Dr Aaron Pearson, given the context, or does it illicit a different emotion?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>How would you describe the overall tone and language here?</h3><h3>Is there anything that surprises you in this last section, from a staff or student perspective, or that makes you uncomfortable?</h3>',
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
                    html: '<h3>What do you think is going on here?</h3><h3>What does it tell you about some of the group dynamics at play here?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>What is the point of this anecdote here, do you think?</h3><h3>It is clear that students relate their extracurricular life to their expectations of groupwork, and also how they interact as a result. What do you do as a lecturer/teacher to scaffold groupwork?</h3><h3>How do you think about your role and its position of authority, of power? What are the ways in which you enact it in your teaching, and how do you acknowledge it?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>How does this scenario so far relate to your experiences of groupwork, both in the university context and beyond?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>There are some interesting reflections here on staff-student dynamics, what surprises you about this dialogue?</h3><h3>What expectations do you have about student behaviour and/or engagement and how do you manage those in the classroom setting?</h3><h3>There is explicit reference here to the unease of a colleague when a student talks about racism – why do you think the teacher would have responded in this way? What message does that send out to the students and what would you do differently?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>It feels like there are a lot of assumptions going on here, both from the students’ perspectives but also in the way they describe the staff responses.</h3><h3>What ideas do you have about how we can:</h3><h3><ul><li>Demonstrate ‘respect’ both as staff members and as students?</li><li>Convince our students that we care (or do we?)</li></ul></h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>It feels like there are a lot of assumptions going on here, both from the students’ perspectives but also in the way they describe the staff responses.</h3><h3>What ideas do you have about how we can:</h3><h3><ul><li>Demonstrate ‘respect’ both as staff members and as students?</li><li>Explore our assumptions and differences together?</li></ul></h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>There is an important link established here between the curriculum and student agency, their sense of (not) being heard and their experiences (not) valued.</h3><h3>What do you do already in your context to try and make this link explicit? Is there anything you could be doing differently?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>Is there anything in this part that resonates and if so, what?</h3><h3>Do you offer feedback when offered through formal and informal mechanisms?</h3>',
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
                    html: '<h3>How does this opening resonate with you?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>Does this opening surprise you?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup2.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>While it is great that Hana can call out her colleague here, what do you feel about his assumptions and inability to see that he has been racist?</h3><h3>What do you think about Hana having to share her personal story to make her point?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup3.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>How does this part make you feel in terms of what it says about staff perspectives on inclusion?</h3><h3>There are some interesting reflections on academic freedom here, a very contentious topic. What do you make of Hana’s approach to teaching?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>How does this part make you feel in terms of what it says about staff perspectives on inclusion?</h3><h3>How do you feel about some of the wider conversations on academic freedom and cancel culture?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup4.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>What do you think about Mary’s realisation that our university culture and practices are in fact colonial and that our students can enlighten us?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>What do you think about Mary’s realisation that our university culture and practices are in fact colonial and that our students can enlighten us?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup5.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>What, if anything, are you learning from this dialogue about our own approaches to teaching and how we listen to our students?</h3><h3>What do you make of Aaron Pearson’s response to his colleague’s insights?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>As a student, how do you respond to this part?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
        } else if (document.querySelectorAll('.popup6.top').length === 1) {
            if (user === 'teacher') {
                Swal.fire({
                    html: '<h3>How would you describe the overall tone and language here?</h3><h3>Is there anything in this dialogue that makes you feel uncomfortable? If so, why?</h3><h3>How do you feel about the changing landscape of higher education (is it?)</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            } else {
                Swal.fire({
                    html: '<h3>How would you describe the overall tone and language here?</h3><h3>Is there anything in this dialogue that makes you feel uncomfortable? If so, why?</h3><h3>What, for you, is the purpose of higher education?</h3>',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
            }
            document.getElementById("arrowDown").style.visibility = "hidden";
        }
    }
    if (document.querySelector(".swal2-checkbox input")) {
        document.querySelector(".swal2-checkbox input").setAttribute("id", "swal2-checkbox");
    }
    isPopupInProgress = false;
}
