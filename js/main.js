'use strict';

const burgerButton = document.querySelector('.burger-button');
const mobileMenuCloseButton = document.querySelector('.mobile-menu__button');
const mobileMenu = document.querySelector('.mobile-menu');

if (burgerButton && mobileMenu) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active');
  });
}

if (mobileMenuCloseButton && mobileMenu) {
  mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
  });
}

const burgerButtonWb = document.querySelector('.burger-button-wb');
const mobileMenuCloseButtonWb = document.querySelector('.mobile-menu-wb__button');
const mobileMenuWb = document.querySelector('.mobile-menu-wb');

if (burgerButtonWb && mobileMenuWb) {
  burgerButtonWb.addEventListener('click', () => {
    mobileMenuWb.classList.add('mobile-menu-wb--active');
  });
};

if (mobileMenuCloseButtonWb && mobileMenuWb) {
  mobileMenuCloseButtonWb.addEventListener('click', () => {
    mobileMenuWb.classList.remove('mobile-menu-wb--active');
  });
}

const languageButtonsList = document.querySelectorAll(
  '.header-language-block__button'
);

languageButtonsList.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    languageButtonsList.forEach((item) => {
      if (item !== e.target) {
        item.classList.remove('header-language-block__button--active');
      }
    });
    e.target.classList.add('header-language-block__button--active');
  });
});

const languageButtonsListWb = document.querySelectorAll(
  '.header-language-block-wb__button'
);

languageButtonsListWb.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    languageButtonsListWb.forEach((item) => {
      if (item !== e.target) {
        item.classList.remove('header-language-block-wb__button--active');
      }
    });
    e.target.classList.add('header-language-block-wb__button--active');
  });
});

const agendaShowMoreBlock = document.querySelector('.show-more-block');
const agendaShowMoreButton = document.querySelector('#agendaShowMore');
const agendaMonthSectionList = document.querySelectorAll('.month');
const agendaMonthItemList = document.querySelectorAll('.month-news-item');

if (agendaShowMoreButton) {
  agendaShowMoreButton.addEventListener('click', () => {
    agendaMonthSectionList.forEach((section) => {
      section.classList.remove('month--hidden');
    });

    agendaMonthItemList.forEach((item) => {
      item.classList.remove('month-news-item--hidden');
    });
    agendaShowMoreBlock.classList.add('show-more-block--hidden');
  });
}

const projectsItemList = document.querySelectorAll('.projects-item');
const projectsShowMoreButton = document.querySelector(
  '#projectsShowMoreButton'
);
let projectsItemsNum = 4;
const projectsCounter = 4;

if (projectsShowMoreButton) {
  projectsItemList.forEach((item, index) => {
    if (index + 1 <= projectsItemsNum) {
      item.classList.add('projects-item--active');
    }
  });

  projectsItemsNum += projectsCounter;

  projectsShowMoreButton.addEventListener('click', () => {
    projectsItemList.forEach((item, index) => {
      if (index + 1 <= projectsItemsNum) {
        item.classList.add('projects-item--active');
      }
    });

    if (projectsItemsNum >= projectsItemList.length) {
      projectsShowMoreButton.classList.add(
        'projects-block__show-more-button--hidden'
      );
    }

    projectsItemsNum += projectsCounter;
  });
}

const projectsDetailsItemList = document.querySelectorAll(
  '.projects-details-item__figure'
);
const projectsDetailsShowMoreButton = document.querySelector(
  '#projectsDetailsShowMoreButton'
);
let projectsDetailsItemsNum = 2;
const projectsDetailsCounter = 2;

if (projectsDetailsShowMoreButton) {
  projectsDetailsItemList.forEach((item, index) => {
    if (index + 1 <= projectsDetailsItemsNum) {
      item.classList.add('projects-details-item__figure--active');
    }
  });

  projectsDetailsItemsNum += projectsDetailsCounter;

  projectsDetailsShowMoreButton.addEventListener('click', () => {
    projectsDetailsItemList.forEach((item, index) => {
      if (index + 1 <= projectsDetailsItemsNum) {
        item.classList.add('projects-details-item__figure--active');
      }
    });

    if (projectsDetailsItemsNum >= projectsDetailsItemList.length) {
      projectsDetailsShowMoreButton.classList.add(
        'projects-details__show-more-button--hidden'
      );
    }

    projectsDetailsItemsNum += projectsDetailsCounter;
  });
}

const resourcesItemList = document.querySelectorAll('.resources-item');
const resourcesShowMoreButton = document.querySelector(
  '#resourcesShowMoreButton'
);
let resourcesItemsNum = 2;
const resourcesCounter = 2;

if (resourcesShowMoreButton && resourcesItemList.length > 0) {
  resourcesItemList.forEach((item, index) => {
    if (index + 1 <= resourcesItemsNum) {
      item.classList.add('resources-item--active');
    }
  });

  resourcesItemsNum += resourcesCounter;

  resourcesShowMoreButton.addEventListener('click', () => {
    resourcesItemList.forEach((item, index) => {
      if (index + 1 <= resourcesItemsNum) {
        item.classList.add('resources-item--active');
      }
    });

    if (resourcesItemsNum >= resourcesItemList.length) {
      resourcesShowMoreButton.classList.add(
        'resources-block__show-more-button--hidden'
      );
    }

    resourcesItemsNum += resourcesCounter;
  });
}

const bureauOctoberNovember1819MembersList = document.querySelectorAll('#bureauOctoberNovember1819 .office-committee-member-card');
const bureauOctoberNovember1819Button = document.querySelector('#bureauOctoberNovember1819 .office-committee-members__button');

const proSudListTogglerFuction = (list, button, sectionId) => {
  if (list.length > 0 && button) {
    button.addEventListener('click', () => {
      list.forEach(member => {
        member.classList.toggle('office-committee-member-card--hidden');
      });
      button.classList.toggle('office-committee-members__button--shown');

      const buttonShown = document.querySelector(`#${sectionId} .office-committee-members__button--shown`);

      button.innerHTML = 'Voir';

      if (buttonShown) {
        buttonShown.innerHTML = 'Cacher';
      }
    });
  }
};

proSudListTogglerFuction(
  bureauOctoberNovember1819MembersList,
  bureauOctoberNovember1819Button,
  'bureauOctoberNovember1819'
);

const committeeOctoberNovember1819MembersList = document
  .querySelectorAll('#committeeOctoberNovember1819 .office-committee-member-card');
const committeeOctoberNovember1819Button = document
  .querySelector('#committeeOctoberNovember1819 .office-committee-members__button');

proSudListTogglerFuction(
  committeeOctoberNovember1819MembersList,
  committeeOctoberNovember1819Button,
  'committeeOctoberNovember1819'
);

const committee1417MembersList = document
  .querySelectorAll('#committee1417 .office-committee-member-card');
const committee1417Button = document
  .querySelector('#committee1417 .office-committee-members__button');

proSudListTogglerFuction(
  committee1417MembersList,
  committee1417Button,
  'committee1417'
);

const proSudListTogglerFuctionWb = (list, button, sectionId) => {
  if (list.length > 0 && button) {
    button.addEventListener('click', () => {
      list.forEach(member => {
        member.classList.toggle('office-committee-member-card-wb--hidden');
      });
      button.classList.toggle('office-committee-members-wb__button--shown');

      const buttonShown = document.querySelector(`#${sectionId} .office-committee-members-wb__button--shown`);

      button.innerHTML = 'Voir';

      if (buttonShown) {
        buttonShown.innerHTML = 'Cacher';
      }
    });
  }
};

const bureauOctoberNovember1819MembersListWb = document
  .querySelectorAll('#bureauOctoberNovember1819wb .office-committee-member-card-wb');
const bureauOctoberNovember1819ButtonWb = document
  .querySelector('#bureauOctoberNovember1819wb .office-committee-members-wb__button');

proSudListTogglerFuctionWb(
  bureauOctoberNovember1819MembersListWb,
  bureauOctoberNovember1819ButtonWb,
  'bureauOctoberNovember1819wb'
);

const committeeOctoberNovember1819MembersListWb = document
  .querySelectorAll('#committeeOctoberNovember1819wb .office-committee-member-card-wb');
const committeeOctoberNovember1819ButtonWb = document
  .querySelector('#committeeOctoberNovember1819wb .office-committee-members-wb__button');

proSudListTogglerFuctionWb(
  committeeOctoberNovember1819MembersListWb,
  committeeOctoberNovember1819ButtonWb,
  'committeeOctoberNovember1819wb'
);

const committee1417MembersListWb = document
  .querySelectorAll('#committee1417wb .office-committee-member-card-wb');
const committee1417ButtonWb = document
  .querySelector('#committee1417wb .office-committee-members-wb__button');

proSudListTogglerFuctionWb(
  committee1417MembersListWb,
  committee1417ButtonWb,
  'committee1417'
);

const proSudTeam = document.querySelectorAll('.pro-sud-team-item');
const proSudTeamWrapper = document.querySelector('.pro-sud-team-list');

if (proSudTeam.length > 3 && window.innerWidth < '800') {
  proSudTeamWrapper.style.justifyContent = 'space-between';
} else if (proSudTeamWrapper) {
  proSudTeamWrapper.style.justifyContent = 'space-evenly';
}

const proSudTeamWb = document.querySelectorAll('.pro-sud-team-item-wb');
const proSudTeamWrapperWb = document.querySelector('.pro-sud-team-list-wb');

if (proSudTeamWb.length > 3 && window.innerWidth < '800') {
  proSudTeamWrapperWb.style.justifyContent = 'space-between';
} else if (proSudTeamWrapperWb) {
  proSudTeamWrapperWb.style.justifyContent = 'space-evenly';
}

const agendaJune2020List = document
  .querySelectorAll('#agendaJune2020 .month-news-item-wb');
const agendaJune2020Button = document.querySelector(
  '#agendaJune2020 .month-wb__button'
);
let agendaJune2020Num = 3;
const agendaJune2020Counter = 3;

if (agendaJune2020Button) {
  agendaJune2020List.forEach((item, index) => {
    if (index + 1 <= agendaJune2020Num) {
      item.classList.add('month-news-item-wb--active');
    }
  });

  agendaJune2020Num += agendaJune2020Counter;

  agendaJune2020Button.addEventListener('click', () => {
    agendaJune2020List.forEach((item, index) => {
      if (index + 1 <= agendaJune2020Num) {
        item.classList.add('month-news-item-wb--active');
      }
    });

    if (agendaJune2020Num >= agendaJune2020List.length) {
      agendaJune2020Button.classList.add(
        'month-wb__button--hidden'
      );
    }

    agendaJune2020Num += agendaJune2020Counter;
  });
}

const agendaJuly2020List = document
  .querySelectorAll('#agendaJuly2020 .month-news-item-wb');
const agendaJuly2020Button = document.querySelector(
  '#agendaJuly2020 .month-wb__button'
);
let agendaJuly2020Num = 3;
const agendaJuly2020Counter = 3;

if (agendaJuly2020Button) {
  agendaJuly2020List.forEach((item, index) => {
    if (index + 1 <= agendaJuly2020Num) {
      item.classList.add('month-news-item-wb--active');
    }
  });

  agendaJuly2020Num += agendaJuly2020Counter;

  agendaJuly2020Button.addEventListener('click', () => {
    agendaJuly2020List.forEach((item, index) => {
      if (index + 1 <= agendaJuly2020Num) {
        item.classList.add('month-news-item-wb--active');
      }
    });

    if (agendaJuly2020Num >= agendaJuly2020List.length) {
      agendaJuly2020Button.classList.add(
        'month-wb__button--hidden'
      );
    }

    agendaJuly2020Num += agendaJuly2020Counter;
  });
}

const projectsItemListWb = document
  .querySelectorAll('.projects-item-wb');
const projectsItemButtonWb = document.querySelector(
  '#projectsShowMoreButtonWb'
);
let projectsItemWbNum = 5;
const projectsItemWbCounter = 5;

if (projectsItemButtonWb) {
  projectsItemListWb.forEach((item, index) => {
    if (index + 1 <= projectsItemWbNum) {
      item.classList.add('projects-item-wb--active');
    }
  });

  projectsItemWbNum += projectsItemWbCounter;

  projectsItemButtonWb.addEventListener('click', () => {
    projectsItemListWb.forEach((item, index) => {
      if (index + 1 <= projectsItemWbNum) {
        item.classList.add('projects-item-wb--active');
      }
    });

    if (projectsItemWbNum >= projectsItemListWb.length) {
      projectsItemButtonWb.classList.add(
        'projects-block-wb__show-more-button--hidden'
      );
    }

    projectsItemWbNum += projectsItemWbCounter;
  });
}

const resourcesItemListWb = document
  .querySelectorAll('.resources-item-wb');
const resourcesItemButtonWb = document.querySelector(
  '#resourcesShowMoreButtonWb'
);
let resourcesItemWbNum = 5;
const resourcesItemWbCounter = 5;

if (resourcesItemButtonWb) {
  resourcesItemListWb.forEach((item, index) => {
    if (index + 1 <= resourcesItemWbNum) {
      item.classList.add('resources-item-wb--active');
    }
  });

  resourcesItemWbNum += resourcesItemWbCounter;

  resourcesItemButtonWb.addEventListener('click', () => {
    resourcesItemListWb.forEach((item, index) => {
      if (index + 1 <= resourcesItemWbNum) {
        item.classList.add('resources-item-wb--active');
      }
    });

    if (resourcesItemWbNum >= resourcesItemListWb.length) {
      resourcesItemButtonWb.classList.add(
        'resources-block-wb__show-more-button--hidden'
      );
    }

    resourcesItemWbNum += resourcesItemWbCounter;
  });
}
