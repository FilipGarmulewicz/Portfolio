const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const body = document.querySelector("#body");
const nav = ["HOME", "PROJECTS", "ABOUT", "CONTACT", "MESSAGES"];
const skills = [
  {
    name: "HTML",
    years: 4,
  },
  {
    name: "CSS",
    years: 4,
  },
  {
    name: "JavaScript",
    years: 2,
  },
  {
    name: "VS Code",
    years: 3,
  },
  {
    name: "Figma",
    years: 3,
  },
  {
    name: "Chrome",
    years: 5,
  },
  {
    name: "Git",
    years: 1,
  },
  {
    name: "GitHub",
    years: 1,
  },
];

const messages = [
  {
    Name: "Karol",
    Email: "karol@email.com",
    Message:
      "Hello, I've reviewed your impressive portfolio and I'm interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further.",
  },
  {
    Name: "Ernest",
    Email: "ernest@email.com",
    Message: "Hello, please call me at 351-152-555 to talk further.",
  },
  {
    Name: "Alex",
    Email: "alex@email.com",
    Message: "Hi Adam. You created a really nice project.",
  },
];

const projects = [
  {
    Title: "Projekt 1",
    Technologies: "html,css,js",
  },
  {
    Title: "Projekt 2",
    Technologies: "html,css,javascript",
  },
  {
    Title: "Projekt 3",
    Technologies: "html,js",
  },
  {
    Title: "Projekt 4",
    Technologies: "javascript",
  },
  {
    Title: "Projekt 5",
    Technologies: "html,css",
  },
];

function createMenu(ulName) {
  for (let i = 0; i < nav.length; i++) {
    const li = document.createElement("li");
    ulName.appendChild(li);
    li.innerText = nav[i];
    li.className = nav[i];
  }
}

function createHeader(firstLine, secondLine) {
  const headerDiv = document.createElement("div");
  header.appendChild(headerDiv);
  headerDiv.className = "header_div";
  const logoDiv = document.createElement("div");
  headerDiv.appendChild(logoDiv);
  logoDiv.className = "logo_div";
  const h1Logo1 = document.createElement("h1");
  logoDiv.appendChild(h1Logo1);
  h1Logo1.innerText = "ITP";
  const h1Logo2 = document.createElement("h1");
  logoDiv.appendChild(h1Logo2);
  h1Logo2.innerText = "ortfolio";

  const headerUl = document.createElement("ul");
  headerDiv.appendChild(headerUl);
  createMenu(headerUl);

  const headerTitle = document.createElement("div");
  header.appendChild(headerTitle);
  headerTitle.className = "header_title";
  const h2 = document.createElement("h2");
  headerTitle.appendChild(h2);
  h2.innerText = firstLine;
  const h3 = document.createElement("h3");
  headerTitle.appendChild(h3);
  h3.innerText = secondLine;

  const burgerLogo = document.createElement("img");
  burgerLogo.src = "Images/Vector.png";
  const burgerWrapper = document.createElement("div");
  headerDiv.appendChild(burgerWrapper);
  burgerWrapper.className = "burger_wrapper";
  burgerWrapper.appendChild(burgerLogo);
  burgerLogo.addEventListener("click", openBurger);
  let isClosed = true;

  function openBurger() {
    if (isClosed) {
      burgerUl.style.display = "flex";
      burgerLogo.src = "Images/Vector2.png";
      isClosed = false;
    } else {
      burgerUl.style.display = "none";
      burgerLogo.src = "Images/Vector.png";
      isClosed = true;
    }
  }

  const burgerUl = document.createElement("ul");
  burgerUl.className = "burger_ul";
  header.appendChild(burgerUl);
  createMenu(burgerUl);

  window.addEventListener("resize", closeBurger);

  function closeBurger() {
    if (window.innerWidth > 768) {
      burgerUl.style.display = "none";
    } else if (window.innerWidth < 768 && !isClosed) {
      burgerUl.style.display = "flex";
    }
  }

  document
    .querySelectorAll(".home")
    .forEach((el) => el.addEventListener("click", createHome));
  document
    .querySelectorAll(".about")
    .forEach((el) => el.addEventListener("click", createAbout));
  document
    .querySelectorAll(".contact")
    .forEach((el) => el.addEventListener("click", createContact));
  document
    .querySelectorAll(".messages")
    .forEach((el) => el.addEventListener("click", createMessages));
  document
    .querySelectorAll(".projects")
    .forEach((el) => el.addEventListener("click", createProjects));
}

createHeader("ADAM KOWALSKI", "WEB-DESIGNER");

function createFooter() {
  const footerUl = document.createElement("ul");
  footer.appendChild(footerUl);
  createMenu(footerUl);

  const footerDiv = document.createElement("div");
  footerDiv.className = "footer_div";
  footer.appendChild(footerDiv);
  const footerMail = document.createElement("span");
  const footerNumber = document.createElement("span");
  const footerH1 = document.createElement("div");
  footerH1.className = "footer_h1";
  footerDiv.appendChild(footerMail);
  footerDiv.appendChild(footerNumber);
  footerDiv.appendChild(footerH1);
  footerMail.innerText = "adam_kowalski@gmail.com";
  footerNumber.innerText = "123 456 789";
  footerH1.innerHTML = "<h1>ITP</h1><h1>ortfolio</h1><h1>&nbsp© 2025</h1>";

  document
    .querySelectorAll(".home")
    .forEach((el) => el.addEventListener("click", createHome));
  document
    .querySelectorAll(".about")
    .forEach((el) => el.addEventListener("click", createAbout));
  document
    .querySelectorAll(".contact")
    .forEach((el) => el.addEventListener("click", createContact));
  document
    .querySelectorAll(".messages")
    .forEach((el) => el.addEventListener("click", createMessages));
  document
    .querySelectorAll(".projects")
    .forEach((el) => el.addEventListener("click", createProjects));
}

createFooter();

function createHome() {
  main.innerHTML = "";
  const firstSection = document.createElement("div");
  firstSection.className = "first_section";
  main.appendChild(firstSection);

  const imgHome = document.createElement("img");
  imgHome.src = "Images/Home-img.png";
  imgHome.className = "home_img";
  firstSection.appendChild(imgHome);

  const imgSmall = document.createElement("img");
  imgSmall.src = "Images/Small-img.png";
  imgSmall.className = "small_img";
  firstSection.appendChild(imgSmall);

  const aboutMe = document.createElement("div");
  firstSection.appendChild(aboutMe);
  aboutMe.className = "about_me";
  const aboutMeTitle = document.createElement("h4");
  aboutMeTitle.innerText = "About Me";
  aboutMe.appendChild(aboutMeTitle);
  const aboutMeText = document.createElement("p");
  aboutMeText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui ligula, molestie a eros eget, facilisis venenatis massa. 
  Mauris quis urna mauris. Vestibulum semper dolor purus, malesuada rhoncus urna facilisis vel. Vestibulum lorem dui, molestie ultrices porttitor sodales.
  Nam rutrum, quam nec elementum posuere, sapien elit lobortis metus, in fringilla dolor tellus a risus. Sed pharetra dui sem, vitae rutrum dui porta sed. 
  Proin sollicitudin nec eros et tristique. Etiam lobortis ut sapien fermentum tincidunt. Maecenas augue est, molestie in porttitor sed, dapibus eget metus. 
  Aenean eu nunc vel ligula pretium posuere. Donec ac sagittis enim, sit amet sagittis nibh. Quisque aliquam sagittis neque, et efficitur neque imperdiet in. 
  Nunc mauris pellentesque. Proin efficitur interdum neque at congue.`;
  aboutMe.appendChild(aboutMeText);

  const mySkills = document.createElement("div");
  mySkills.className = "my_skills";
  firstSection.appendChild(mySkills);
  const mySkillsTitle = document.createElement("h4");
  mySkillsTitle.innerText = "My Skills";
  mySkills.appendChild(mySkillsTitle);
  const mySkillsList = document.createElement("div");
  mySkillsList.className = "my_skills_list";
  mySkills.appendChild(mySkillsList);

  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    mySkillsList.appendChild(skillDiv);
    skillDiv.className = "skill";
    const skillImg = document.createElement("img");
    skillImg.className = "skill_img";
    skillDiv.appendChild(skillImg);
    skillImg.src = `Images/Skills/${skill.name}.png`;
    const skillInfo = document.createElement("div");
    skillDiv.appendChild(skillInfo);
    skillInfo.className = "skill_info";
    const skillName = document.createElement("span");
    skillInfo.appendChild(skillName);
    skillName.innerText = skill.name;
    const skillDots = document.createElement("div");
    skillInfo.appendChild(skillDots);
    skillDots.className = "skill_dots";

    for (let i = 0; i < skill.years; i++) {
      const dot = document.createElement("div");
      skillDots.appendChild(dot);
      dot.className = "dot";
    }

    for (let i = 0; i < 5 - skill.years; i++) {
      const dot = document.createElement("div");
      skillDots.appendChild(dot);
      dot.className = "white_dot";
    }

    const skillYears = document.createElement("span");
    skillInfo.appendChild(skillYears);
    skillYears.className = "skill_years";
    if (skill.years === 1) {
      skillYears.innerText = `${skill.years} year`;
    } else {
      skillYears.innerText = `${skill.years} years`;
    }
  });

  const homeProjectsDiv = document.createElement("div");
  homeProjectsDiv.className = "home_projects_div";
  main.appendChild(homeProjectsDiv);

  projects.slice(0, 3).forEach((project) => {
    const newProject = document.createElement("div");
    homeProjectsDiv.appendChild(newProject);
    newProject.className = "project_home";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project_title";
    newProject.appendChild(projectTitle);
    projectTitle.innerText = project.Title;

    const projectTech = project.Technologies.split(",");
    for (const tech of projectTech) {
      const projectLi = document.createElement("li");
      projectLi.className = "project_li";
      newProject.appendChild(projectLi);
      projectLi.innerText = tech;
    }
  });

  const homeButtonsDiv = document.createElement("div");
  homeButtonsDiv.className = "home_buttons_div";
  main.appendChild(homeButtonsDiv);

  const leftBtn = document.createElement("button");
  leftBtn.className = "home_btn";
  homeButtonsDiv.appendChild(leftBtn);
  const leftArrow = document.createElement("img");
  leftArrow.src = "Images/Left-Icon.png";
  leftBtn.appendChild(leftArrow);

  const rightBtn = document.createElement("button");
  rightBtn.className = "home_btn";
  homeButtonsDiv.appendChild(rightBtn);
  const rightArrow = document.createElement("img");
  rightArrow.src = "Images/Right-Icon.png";
  rightBtn.appendChild(rightArrow);

  const upBtn = document.createElement("button");
  upBtn.className = "home_btn2";
  homeButtonsDiv.appendChild(upBtn);
  const upArrow = document.createElement("img");
  upArrow.src = "Images/Up-Icon.png";
  upBtn.appendChild(upArrow);

  const downBtn = document.createElement("button");
  downBtn.className = "home_btn2";
  homeButtonsDiv.appendChild(downBtn);
  const downArrow = document.createElement("img");
  downArrow.src = "Images/Down-Icon.png";
  downBtn.appendChild(downArrow);

  if (projects.length <= 3) {
    homeButtonsDiv.style.display = "none";
  }

  if (projects.length > 3) {
    homeButtonsDiv.style.display = "flex";
  }

  if (projects.length < 3) {
    homeProjectsDiv.style.display = "flex";
  }

  if (projects.length >= 3) {
    homeProjectsDiv.style.display = "grid";
  }

  header.innerHTML = "";
  footer.innerHTML = "";
  createHeader("ADAM KOWALSKI", "WEB-DESIGNER");
  createFooter();
  document
    .querySelectorAll(".home")
    .forEach((el) => (el.style.color = "#adb6c4"));
}

createHome();

function createAbout() {
  main.innerHTML = "";
  const aboutPage = document.createElement("div");
  aboutPage.className = "about_page";
  main.appendChild(aboutPage);

  const imgAbout = document.createElement("img");
  imgAbout.className = "home_img";
  imgAbout.src = "Images/Home-img.png";
  aboutPage.appendChild(imgAbout);

  const imgAboutSmall = document.createElement("img");
  imgAboutSmall.src = "Images/Small-img.png";
  imgAboutSmall.className = "small_img";
  aboutPage.appendChild(imgAboutSmall);

  const myBackground = document.createElement("div");
  aboutPage.appendChild(myBackground);
  myBackground.className = "about_me";
  const myBackgroundTitle = document.createElement("h4");
  myBackgroundTitle.innerText = "My Background";
  myBackground.appendChild(myBackgroundTitle);
  const myBackgroundText = document.createElement("p");
  myBackgroundText.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet augue in sem semper, et ultrices libero volutpat. Ut sollicitudin sagittis purus, a cursus sapien elementum non. 
  Phasellus fermentum enim non neque faucibus, nec blandit metus pellentesque. Nam ac tempus nisi, eget varius quam. Curabitur efficitur, enim quis varius tincidunt, urna nunc tempus justo, sagittis maximus lectus tellus et sem. 
  
  Suspendisse potenti. Curabitur a porta felis. Nulla porttitor erat ut sem tempus, non condimentum mi feugiat. Suspendisse condimentum lectus vitae sapien dapibus, vel efficitur dui accumsan. Nunc id rhoncus augue, ut tristique quam. Mauris a orci nec felis elementum venenatis at vel leo. Aliquam eget purus eget magna convallis placerat. Aliquam sit amet sollicitudin libero.

  Quisque malesuada suscipit cursus. Donec sit amet convallis quam. Praesent venenatis urna vitae nisi luctus, vitae ullamcorper enim vulputate. Cras leo arcu, ullamcorper a nunc in, viverra pretium ex. Duis id vestibulum purus. Integer in facilisis odio, eu interdum elit. Ut quis placerat sem. Aenean nisl justo, hendrerit id justo vitae, posuere scelerisque neque. Ut vel consequat magna. Donec tristique justo id sem laoreet tristique. Ut dapibus velit at nunc imperdiet, ac venenatis quam consequat.

  Integer aliquet nibh lacus, eu finibus diam rhoncus in. Nullam blandit tincidunt condimentum. In tempus molestie laoreet. Maecenas vitae enim eu lectus sollicitudin eleifend sed et ipsum.`;
  myBackground.appendChild(myBackgroundText);

  const myHobbies = document.createElement("div");
  aboutPage.appendChild(myHobbies);
  myHobbies.className = "about_me";
  const myHobiesTitle = document.createElement("h4");
  myHobiesTitle.innerText = "My hobies and interests";
  myHobbies.appendChild(myHobiesTitle);
  const myHobiesText = document.createElement("p");
  myHobiesText.innerText = `Etiam hendrerit enim ut lectus porta, semper imperdiet nibh tempor. In ullamcorper lobortis iaculis. Aliquam ut nisl pretium, dictum neque sit amet, iaculis odio. Aliquam semper commodo nisl, et ornare nunc finibus at. Nulla rutrum ipsum lorem, non iaculis metus suscipit ut. Nam aliquet fringilla dui nec lacinia. Ut ullamcorper dolor nisi, eget commodo diam luctus sit amet. Vestibulum et pulvinar eros. Morbi ac ligula id dui luctus luctus. Maecenas blandit dolor nunc, sit amet euismod tortor lobortis sed. Pellentesque aliquet ex eros, eu fringilla elit egestas non. Vivamus ut gravida turpis.

  Cras nulla dolor, dapibus non tellus quis, scelerisque consectetur lectus. Suspendisse posuere tortor ac lacus sollicitudin pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta, turpis sit amet pellentesque lacinia, augue ante sodales ante, nec volutpat augue nunc sed ante. Fusce fermentum dui in euismod laoreet. Nullam vitae interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

  Nunc placerat libero fermentum odio euismod varius in a orci. Suspendisse ornare at eros vel vulputate. Fusce malesuada, purus eu cursus tempus, ex sem accumsan magna, ac suscipit libero odio non dui. Sed non pharetra neque.`;
  myHobbies.appendChild(myHobiesText);

  const contactBtn = document.createElement("button");
  contactBtn.className = "contact_btn";
  aboutPage.appendChild(contactBtn);
  contactBtn.innerText = "Contact me";
  const arrowIcon = document.createElement("img");
  arrowIcon.className = "arrow_icon";
  arrowIcon.src = "Images/Arrow.png";
  contactBtn.appendChild(arrowIcon);

  header.innerHTML = "";
  footer.innerHTML = "";
  createHeader("ABOUT ME", "IT'S ME - ADAM!");
  createFooter();
  document
    .querySelectorAll(".about")
    .forEach((el) => (el.style.color = "#adb6c4"));
  document
    .querySelector(".contact_btn")
    .addEventListener("click", createContact);
}

function createContact() {
  main.innerHTML = "";
  const contactPage = document.createElement("div");
  contactPage.className = "contact_page";
  main.appendChild(contactPage);

  const form = document.createElement("form");
  contactPage.appendChild(form);
  form.className = "form";
  const contactTitle = document.createElement("h4");
  form.appendChild(contactTitle);
  contactTitle.innerText = "Contact me";
  contactTitle.className = "contact_h4";

  const formDiv1 = document.createElement("div");
  form.appendChild(formDiv1);
  formDiv1.className = "form_div1";

  const inputDiv1 = document.createElement("div");
  formDiv1.appendChild(inputDiv1);
  inputDiv1.className = "input_div";
  const label1 = document.createElement("label");
  inputDiv1.appendChild(label1);
  label1.innerText = "Name";
  const input1 = document.createElement("input");
  inputDiv1.appendChild(input1);
  input1.placeholder = "Your Name";
  const redText1 = document.createElement("span");
  inputDiv1.appendChild(redText1);
  redText1.innerText = "The name must be at least 3 characters long.";
  redText1.className = "red_text";

  const inputDiv2 = document.createElement("div");
  formDiv1.appendChild(inputDiv2);
  inputDiv2.className = "input_div";
  const label2 = document.createElement("label");
  inputDiv2.appendChild(label2);
  label2.innerText = "Email";
  const input2 = document.createElement("input");
  inputDiv2.appendChild(input2);
  input2.placeholder = "email@example.com";
  const redText2 = document.createElement("span");
  inputDiv2.appendChild(redText2);
  redText2.innerText = "Please enter a valid email address.";
  redText2.className = "red_text";

  const formDiv2 = document.createElement("div");
  form.appendChild(formDiv2);
  formDiv2.className = "form_div2";
  const label3 = document.createElement("label");
  formDiv2.appendChild(label3);
  label3.innerText = "Message";
  const input3 = document.createElement("input");
  formDiv2.appendChild(input3);
  input3.placeholder = "Hello, my name is...";
  const redText3 = document.createElement("span");
  formDiv2.appendChild(redText3);
  redText3.innerText = "The message cannot be empty.";
  redText3.className = "red_text";

  const messageBtn = document.createElement("button");
  messageBtn.className = "message_btn";
  contactPage.appendChild(messageBtn);
  messageBtn.innerText = "Send message";

  header.innerHTML = "";
  footer.innerHTML = "";
  createHeader("CONTACT ME", "SAY HELLO!");
  createFooter();
  document
    .querySelectorAll(".contact")
    .forEach((el) => (el.style.color = "#adb6c4"));

  messageBtn.addEventListener("click", sendMessage);

  input1.addEventListener("input", () => {
    if (input1.value.length >= 3) {
      redText1.style.visibility = "hidden";
      input1.style.borderBottomColor = "#1f2041";
    } else if (input1.value.length < 3) {
      redText1.innerText = "The name must be at least 3 characters long.";
      redText1.style.visibility = "visible";
      input1.style.borderBottomColor = "#af0808";
    }

    if (input1.value.length > 20) {
      redText1.innerText = "The name must not exceed 20 characters.";
      redText1.style.visibility = "visible";
      input1.style.borderBottomColor = "#af0808";
    }
  });

  input3.addEventListener("input", () => {
    if (input3.value.length > 0) {
      redText3.style.visibility = "hidden";
      input3.style.borderBottomColor = "#1f2041";
    } else if (input3.value.length === 0) {
      redText3.innerText = "The message cannot be empty.";
      redText3.style.visibility = "visible";
      input3.style.borderBottomColor = "#af0808";
    }

    if (input3.value.length > 100) {
      redText3.innerText = "The message must not exceed 100 characters.";
      redText3.style.visibility = "visible";
      input3.style.borderBottomColor = "#af0808";
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  input2.addEventListener("input", () => {
    if (emailRegex.test(input2.value)) {
      redText2.style.visibility = "hidden";
      input2.style.borderBottomColor = "#1f2041";
    } else {
      redText2.style.visibility = "visible";
      input2.style.borderBottomColor = "#af0808";
    }
  });

  function sendMessage() {
    if (input1.value.length < 3) {
      redText1.innerText = "The name must be at least 3 characters long.";
      redText1.style.visibility = "visible";
      input1.style.borderBottomColor = "#af0808";
    }

    if (input3.value.length === 0) {
      redText3.innerText = "The message cannot be empty.";
      redText3.style.visibility = "visible";
      input3.style.borderBottomColor = "#af0808";
    }

    if (!emailRegex.test(input2.value)) {
      redText2.style.visibility = "visible";
      input2.style.borderBottomColor = "#af0808";
    }

    if (
      input1.value.length >= 3 &&
      input1.value.length <= 20 &&
      input3.value.length > 0 &&
      input3.value.length <= 100 &&
      emailRegex.test(input2.value)
    ) {
      const myMessage = {
        Name: input1.value,
        Email: input2.value,
        Message: input3.value,
      };

      messages.push(myMessage);

      input1.value = "";
      input2.value = "";
      input3.value = "";
    }
  }
}

function createMessages() {
  main.innerHTML = "";
  const messagesPage = document.createElement("div");
  messagesPage.className = "messages_page";
  main.appendChild(messagesPage);

  messages.forEach((message) => {
    const newMessage = document.createElement("div");
    newMessage.className = "message_div";
    messagesPage.appendChild(newMessage);

    const span1 = document.createElement("span");
    newMessage.appendChild(span1);
    span1.innerText = `Name: ${message.Name}`;

    const span2 = document.createElement("span");
    newMessage.appendChild(span2);
    span2.innerText = `Email: ${message.Email}`;

    const span3 = document.createElement("span");
    newMessage.appendChild(span3);
    span3.innerText = `Message: ${message.Message}`;
  });

  header.innerHTML = "";
  footer.innerHTML = "";
  createHeader("MESSAGES", "YOUR MESSAGES");
  createFooter();
  document
    .querySelectorAll(".messages")
    .forEach((el) => (el.style.color = "#adb6c4"));
}

function createProjects() {
  main.innerHTML = "";
  const projectsPage = document.createElement("div");
  projectsPage.className = "projects_page";
  main.appendChild(projectsPage);

  const addBtn = document.createElement("button");
  addBtn.className = "add_btn";
  projectsPage.appendChild(addBtn);
  addBtn.innerText = "Add project";
  const plusIcon = document.createElement("img");
  plusIcon.className = "plus_icon";
  plusIcon.src = "Images/Plus.png";
  addBtn.appendChild(plusIcon);

  const modal = document.createElement("div");
  modal.className = "modal";
  main.appendChild(modal);
  const closeIcon = document.createElement("img");
  closeIcon.src = "Images/Frame.png";
  closeIcon.className = "close_icon";
  modal.appendChild(closeIcon);

  addBtn.addEventListener("click", () => {
    projectsPage.classList.add("active");
    header.classList.add("active");
    footer.classList.add("active");
    modal.classList.add("active");
    body.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", closeModal);

  function closeModal() {
    projectsPage.classList.remove("active");
    header.classList.remove("active");
    footer.classList.remove("active");
    modal.classList.remove("active");
    body.style.overflow = "visible";
    inputModal1.value = "";
    inputModal2.value = "";
    redModal1.style.visibility = "hidden";
    redModal2.style.visibility = "hidden";
    inputModal1.style.borderBottomColor = "#1f2041";
    inputModal2.style.borderBottomColor = "#1f2041";
  }

  const modalDiv1 = document.createElement("div");
  modal.appendChild(modalDiv1);
  modalDiv1.className = "modal_div";
  const labelModal1 = document.createElement("label");
  modalDiv1.appendChild(labelModal1);
  labelModal1.innerText = "Project title";
  const inputModal1 = document.createElement("input");
  modalDiv1.appendChild(inputModal1);
  inputModal1.placeholder = "Project title";
  const redModal1 = document.createElement("span");
  modalDiv1.appendChild(redModal1);
  redModal1.innerText = "The title must be at least 3 characters long.";
  redModal1.className = "red_text";

  const modalDiv2 = document.createElement("div");
  modal.appendChild(modalDiv2);
  modalDiv2.className = "modal_div";
  const labelModal2 = document.createElement("label");
  modalDiv2.appendChild(labelModal2);
  labelModal2.innerText = "Technologies";
  const inputModal2 = document.createElement("input");
  modalDiv2.appendChild(inputModal2);
  inputModal2.placeholder = "html,css,javascript";
  const redModal2 = document.createElement("span");
  modalDiv2.appendChild(redModal2);
  redModal2.innerText = "Please add some technologies.";
  redModal2.className = "red_text";

  const addBtn2 = document.createElement("button");
  addBtn2.className = "add_btn2";
  modal.appendChild(addBtn2);
  addBtn2.innerText = "Add project";
  const plusIcon2 = document.createElement("img");
  plusIcon2.className = "plus_icon";
  plusIcon2.src = "Images/Plus.png";
  addBtn2.appendChild(plusIcon2);

  addBtn2.addEventListener("click", addProject);

  inputModal1.addEventListener("input", () => {
    if (inputModal1.value.length >= 3) {
      redModal1.style.visibility = "hidden";
      inputModal1.style.borderBottomColor = "#1f2041";
    } else if (inputModal1.value.length < 3) {
      redModal1.innerText = "The title must be at least 3 characters long.";
      redModal1.style.visibility = "visible";
      inputModal1.style.borderBottomColor = "#af0808";
    }

    if (inputModal1.value.length > 30) {
      redModal1.innerText = "The title must not exceed 30 characters.";
      redModal1.style.visibility = "visible";
      inputModal1.style.borderBottomColor = "#af0808";
    }
  });

  inputModal2.addEventListener("input", () => {
    if (inputModal2.value.length > 0) {
      redModal2.style.visibility = "hidden";
      inputModal2.style.borderBottomColor = "#1f2041";
    } else if (inputModal2.value.length === 0) {
      redModal2.style.visibility = "visible";
      inputModal2.style.borderBottomColor = "#af0808";
    }
  });

  const projectsDiv = document.createElement("div");
  projectsPage.appendChild(projectsDiv);
  projectsDiv.className = "projects_div";

  projects.forEach((project) => {
    const newProject = document.createElement("div");
    projectsDiv.appendChild(newProject);
    newProject.className = "project";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project_title";
    newProject.appendChild(projectTitle);
    projectTitle.innerText = project.Title;

    const projectTech = project.Technologies.split(",");
    for (const tech of projectTech) {
      const projectLi = document.createElement("li");
      projectLi.className = "project_li";
      newProject.appendChild(projectLi);
      projectLi.innerText = tech;
    }

    const eraseIcon = document.createElement("div");
    eraseIcon.className = "erase_icon";
    newProject.appendChild(eraseIcon);
    const eraseImg = document.createElement("img");
    eraseImg.src = "Images/Vector3.png";
    eraseIcon.appendChild(eraseImg);

    eraseIcon.addEventListener("click", () => {
      newProject.remove();
      const index = projects.indexOf(project);
      projects.splice(index, 1);
      displayNoProjects();
      removeNoProjects();
      centerProjects();
    });
  });

  function addProject() {
    if (inputModal1.value.length < 3) {
      redModal1.innerText = "The title must be at least 3 characters long.";
      redModal1.style.visibility = "visible";
      inputModal1.style.borderBottomColor = "#af0808";
    }

    if (inputModal2.value.length === 0) {
      redModal2.style.visibility = "visible";
      inputModal2.style.borderBottomColor = "#af0808";
    }

    if (
      inputModal1.value.length >= 3 &&
      inputModal1.value.length <= 30 &&
      inputModal2.value.length > 0
    ) {
      const myProject = {
        Title: inputModal1.value,
        Technologies: inputModal2.value,
      };

      projects.push(myProject);

      createProjects();
      displayNoProjects();
      removeNoProjects();
      closeModal();
      centerProjects();
    }
  }

  const noProjects = document.createElement("h4");
  projectsPage.appendChild(noProjects);
  noProjects.className = "no_projects";
  noProjects.innerText = "There are no projects to display.";

  function displayNoProjects() {
    if (!projectsDiv.innerHTML.includes("</p>")) {
      noProjects.classList.remove("no_projects");
    }
  }

  function removeNoProjects() {
    if (projectsDiv.innerHTML.includes("</p>")) {
      noProjects.classList.add("no_projects");
    }
  }

  displayNoProjects();
  removeNoProjects();

  function centerProjects() {
    if (projects.length < 3) {
      projectsDiv.style.display = "flex";
    }

    if (projects.length >= 3) {
      projectsDiv.style.display = "grid";
    }
  }

  centerProjects();

  header.innerHTML = "";
  footer.innerHTML = "";
  createHeader("PROJECTS", "LEARN ABOUT MY WORK");
  createFooter();
  document
    .querySelectorAll(".projects")
    .forEach((el) => (el.style.color = "#adb6c4"));
}
