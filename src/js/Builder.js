export default class Builder {
  constructor() {
    this.body = document.querySelector('.body');
    this.widjet = document.querySelector('.widjet');
    this.button = document.querySelector('.button');
    this.popTarget = '';
  }

  init() {
    this.button.addEventListener('click', (event) => {
      this.togglePopover(event.target, {
        title: 'Заголовок',
        description: 'Текст сообщения, который будет выводиться, как доп.информация',
      });
    });
  }

  togglePopover(target, objContent) {
    const pop = document.getElementById('pop');
    if (pop) {
      pop.remove();
      if (this.popTarget === target) return;
    }
    this.popTarget = target;
    const popEl = Builder.addElement('div', 'popover');
    popEl.setAttribute('id', 'pop');
    popEl.appendChild(Builder.addElement('div', 'title', objContent.title));
    popEl.appendChild(Builder.addElement('div', 'desc', objContent.description));

    this.body.appendChild(popEl);
    Builder.horCenterOnTarget(popEl, target);
  }

  static addElement(tag, classname, content = '') {
    const el = document.createElement(tag);
    el.classList.add(classname);
    el.textContent = content;
    return el;
  }

  // Центрирует элемент popover относительно target
  static horCenterOnTarget(el, target) {
    const { top, left } = target.getBoundingClientRect();
    el.style.left = `${window.scrollX + left
      - (Math.abs(el.offsetWidth - target.offsetWidth) / 2)}px`;
    el.style.top = `${window.scrollY + top - el.offsetHeight - 5}px`;
  }
}
