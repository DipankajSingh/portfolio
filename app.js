function $(selector = 'body') {
    const e = document.querySelectorAll(selector)
    if (e.length == 1) return e[0]
    if (e.length > 1) return e
}

const lengthOfSkills = $('.skillIcons').children.length

const watchHolderLeft = $('.watchHolder__left')
const watchHolderRight = $('.watchHolder__right')

/// the default selected skill is the first one
//  so we need to set the first one as selected
$('.skillIcons').children[0].dataset.selected = true

// so as we set the first one as selected
// then we need to store the index as 0 in a mutable variable 
let selectedSkillIndex = 0

// now we can use the watchHolderLeft and watchHolderRight
// to change the selected skill with the help of the selectedSkillIndex variable

watchHolderRight.addEventListener('click', () => {
    // here we need to increase the selectedSkillIndex on click and then
    // update the selected skill while insuring that the selectedSkillIndex not greater than lengthOfSkills
    $('.skillIcons').children[selectedSkillIndex].dataset.selected = false
    if (selectedSkillIndex < lengthOfSkills - 1) {
        selectedSkillIndex++
    }
    $('.skillIcons').children[selectedSkillIndex].dataset.selected = true
})
watchHolderLeft.addEventListener('click', () => {
    // here we need to decrease the selectedSkillIndex on click and then
    // update the selected skill while insuring that the selectedSkillIndex not less than 0
    $('.skillIcons').children[selectedSkillIndex].dataset.selected = false
    if (selectedSkillIndex > 0) {
        selectedSkillIndex--
    }
    $('.skillIcons').children[selectedSkillIndex].dataset.selected = true

})

// WATCH CONTROLS WITH DATA ATTRIBUTE 
const watchX = $('.watchX');

// turn on/off the watch with data attribute
const watchHolder__on = $('.watchHolder__on');

watchHolder__on.addEventListener('click', () => {
    if (watchX.dataset.watchOn == 'false') {
        watchHolder__on.style.backgroundColor = 'red'

        watchX.dataset.watchOn = 'true'
    } else {
        watchHolder__on.style.backgroundColor = 'green'

        watchX.dataset.watchOn = 'false'
    }
})

// INTERSECTION OBSERVER
let target = $('.watchContainer');
let Animated_lines = $('.Animated_lines');
// runs when element came in scene
function displayEntry(entry) {
    if (entry.isIntersecting) {
        watchX.dataset.watchOn = 'true'
    } else {
        watchX.dataset.watchOn = 'false'
    }
    if (entry.isIntersecting && entry.target == Animated_lines) {
        Animated_lines.style.setProperty('--animation-play-state', 'running');
    }
}

let callback = function (entries, observer) {
    entries.forEach(entry => {
        displayEntry(entry);
    });
};

let observer = new IntersectionObserver(callback, {
    threshold: .5
});

observer.observe(target);
observer.observe(Animated_lines);

// custom-cursor

const customCursor = $('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // get the position of the mouse
    // and then get client rect of the custom-cursor
    const { clientX, clientY } = e
    const { left, top, width, height } = customCursor.getBoundingClientRect()

    customCursor.style.transform = `translate(${clientX - (width / 2)}px, ${clientY - (height / 2)}px)`



})

