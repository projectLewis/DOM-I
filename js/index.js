const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "append": "Append",
    "prepend": "Prepend",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Nav Section
// TODO refactor with loops
// navbar classes
const navbar = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');
const navItem1 = navItems[0];
navItem1.className = ('nav-item-1');
const navItem2 = navItems[1];
navItem2.className = ('nav-item-2');
const navItem3 = navItems[2];
navItem3.className = ('nav-item-3');
const navItem4 = navItems[3];
navItem4.className = ('nav-item-4');
const navItem5 = navItems[4];
navItem5.className = ('nav-item-5');
const navItem6 = navItems[5];
navItem6.className = ('nav-item-6');
// navbar text
navItem1.textContent = siteContent["nav"]["nav-item-1"];
navItem2.textContent = siteContent["nav"]["nav-item-2"];
navItem3.textContent = siteContent["nav"]["nav-item-3"];
navItem4.textContent = siteContent["nav"]["nav-item-4"];
navItem5.textContent = siteContent["nav"]["nav-item-5"];
navItem6.textContent = siteContent["nav"]["nav-item-6"];
// logo, included with source javascript
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// Task 3 adding new content to Navbar
const navAppend = document.createElement('a');
navAppend.href = "#";
navAppend.textContent = siteContent["nav"]["append"];
navbar.appendChild(navAppend);
const navPrepend = document.createElement('a');
navPrepend.href = "#";
navPrepend.textContent = siteContent["nav"]["prepend"];
navbar.prepend(navPrepend);
const childrenArray = document.querySelectorAll('nav a');
childrenArray.forEach((anchor) => {
  return anchor.style.color = "green";
});

// cta
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent["cta"]["h1"];
const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent["cta"]["button"];
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content Section
// Top Content
const mainTopContent = document.querySelector('.top-content');
const topContents = mainTopContent.children;
const featuresContent = topContents[0];
const featuresContentH4 = featuresContent.querySelector('.text-content h4');
const featuresContentP = featuresContent.querySelector('.text-content p');
featuresContentH4.textContent = siteContent["main-content"]["features-h4"];
featuresContentP.textContent = siteContent["main-content"]["features-content"];
const aboutContent = topContents[1];
const aboutContentH4 = aboutContent.querySelector('.text-content h4');
const aboutContentP = aboutContent.querySelector('.text-content p');
aboutContentH4.textContent = siteContent["main-content"]["about-h4"];
aboutContentP.textContent = siteContent["main-content"]["about-content"];

// middle images
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
const mainBottomContent = document.querySelector('.bottom-content');
const bottomContents = mainBottomContent.children;
const servicesContent = bottomContents[0];
const servicesContentH4 = servicesContent.querySelector('.text-content h4');
const servicesContentP = servicesContent.querySelector('.text-content p');
servicesContentH4.textContent = siteContent["main-content"]["services-h4"];
servicesContentP.textContent = siteContent["main-content"]["services-content"];
const productContent = bottomContents[1];
const productContentH4 = productContent.querySelector('.text-content h4');
const productContentP = productContent.querySelector('.text-content p');
productContentH4.textContent = siteContent["main-content"]["product-h4"];
productContentP.textContent = siteContent["main-content"]["product-content"];
const visionContent = bottomContents[2];
const visionContentH4 = visionContent.querySelector('.text-content h4');
const visionContentP = visionContent.querySelector('.text-content p');
visionContentH4.textContent = siteContent["main-content"]["vision-h4"];
visionContentP.textContent = siteContent["main-content"]["vision-content"];

// Contact Section
const contactSection = document.querySelector('.contact');
const contactChildren = contactSection.children;
const contactH4 = contactChildren[0];
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactAddress = contactChildren[1];
contactAddress.textContent = siteContent["contact"]["address"];
const contactPhone = contactChildren[2];
contactPhone.textContent = siteContent["contact"]["phone"];
const contactEmail = contactChildren[3];
contactEmail.textContent = siteContent["contact"]["email"];

// Footer Section
const footer = document.querySelector('footer');
const footerP = footer.querySelector('p');
footerP.textContent = siteContent["footer"]["copyright"];