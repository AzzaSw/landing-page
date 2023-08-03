/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sections=document.querySelectorAll("section");
const myLinks = document.querySelectorAll('a[href^="#"]');
const myLink = document.querySelectorAll('a');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// 
const navItems =document.querySelector("ul");




   
  
// function to build navigation 
function createNav(){
    // Access each section one by one and create link
    sections.forEach((sec) => {
        // create list item
        let listItem =document.createElement("li");
        // create anchor element inside a list item
        listItem.innerHTML =`<a class="menu__link" href="#${sec.id}">
        ${sec.dataset.nav}</a>`;
        //append each list item created to parent element ul
     navItems.appendChild(listItem);
       
      
    })

}

    // detect section position  and  check if section in the viewport 
function detectSectionPosition( section){
    let sectionPosition = section.getBoundingClientRect();

  return  ( sectionPosition.top  + window.scrollY) < window.scrollY 
     && window.scrollY < (sectionPosition.bottom +window.scrollY );
}

     



       
// function to add active class to section in the viewport
function activeState(){
   
    sections.forEach((section)=>{
       
         
        // if section in the viewport
        if(detectSectionPosition(section)){
        //add active class to section
            section.classList.add("your-active-class");
            document.querySelector(`a[href^="#${section.id}`).classList.add("active");
            
            
            

            

        }else{ 
              //remove active class from section if not in the viewport
                section.classList.remove("your-active-class");
                document.querySelector(`a[href^="#${section.id}`).classList.remove("active");
        }

}
);
}

// function scroll to anchor 
function scrollingsmooth(){
    // list of anchor elements
    const links = document.querySelectorAll("a");
//loop to add event listener to each anchor element
     for (let lnk of links){
    
    // add event listener
        lnk.addEventListener("click", function(event){
           event.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
            // assign smooth behavior 
            behavior: 'smooth'
        });

        });
    }}

        
     







    

    // build the nav

   createNav();

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll",activeState);




// Scroll to anchor ID using scrollTO event

scrollingsmooth();


// Scroll to section on link click


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
 
// Set sections as active

