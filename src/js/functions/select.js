;(function () {
  function selectStyle(wrapper) {
    const parent = wrapper ? wrapper : document;
    const selects = parent.querySelectorAll('.js-select');
    const changePhoneAnchors = document.querySelectorAll('.js-change-phone-anchor');

    if (selects.length) {
      selects.forEach(select => {
        const trigger = select.querySelector('.js-select-trigger');
        const dropdown = select.querySelector('.js-select-dropdown');
        const changeOptions =  select.querySelectorAll('.js-default-checked-change-select');
        const selected = select.querySelector('.js-default-checked-select');

        if(dropdown.clientHeight > 200) {
          const ps = new PerfectScrollbar(dropdown, {
            wheelPropagation: false,
          });
          dropdown.style.height = dropdown.scrollHeight + 'px';
          dropdown.style.overflow = 'hidden';
        }

        trigger.onclick = function () {
          triggerInit()
        }

        function triggerInit() {
          if (select.classList.contains('active')) {
            select.classList.remove('active');
          }else {
            selects.forEach(function (el) {el.classList.remove('active')});
            select.classList.add('active');
          }
        }

        if(changeOptions.length) {
          changeOptions.forEach(function (changeOption) {
            changeOption.addEventListener('click', function () {
              const html = changeOption.querySelector('span').innerHTML.trim();
              changeOptions.forEach(function (el) {el.classList.remove('selected')});
              changeOption.classList.add('selected');
              selected.value = html;
              select.classList.remove('active');

              const updatedPhone = changeOption.dataset.changePhone;

              if (updatedPhone) {
                for (const changePhoneAnchor of changePhoneAnchors) {
                  changePhoneAnchor.innerText = updatedPhone;
                  changePhoneAnchor.href = "tel:" + updatedPhone;
                }
              }
            })
          })
        }

        document.addEventListener('click', function (evt) {
          if (evt.target.contains(select)) {
            select.classList.remove('active');
          }
        })
      });
    }
  }

  window.selectStyled = {
    styling: selectStyle,
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.selectStyled.styling();
  });
})()
