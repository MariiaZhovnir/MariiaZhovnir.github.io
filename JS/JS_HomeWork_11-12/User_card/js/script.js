(function() {
    'use strict';

    var menuData = {
            name: 'Жовнер Мария Сергеевна',
            photo: 'img/me.jpg',
            position: 'Инженер службы балансов электроенергии',
            reasons: {
                title: 'Хочу учить фронтенд, потому что:',
                items: ['Хочу освоить более интересную професию', 'Есть много свободного времени', 'Платят мало']
            },
            contacts: {
                mobileTitle: 'Мой контактный телефон:',
                mobile: '+38 (095) 749-49-54',
                linkTitle: 'Мой профиль, вконтакте:',
                link: 'vk.com/masha.zhovner'
            },
            mobile: '+38 (095) 749-49-54',
            link: '#',
            feedback: {
                title: 'Мой фидбек:',
                text: 'Если нужно, могу свести Вам фидерный баланс'
            }

            // title: 'Хочу учить фронтенд, потому что:',
            // items: ['Хочу освоить более интересную професию', 'Есть много свободного времени', 'Платят мало']
        },

        parent = document.getElementById('container');


    var source = document.getElementById('cv').textContent,
        template = _.template(source, {data: menuData});

    parent.innerHTML += template(menuData);

})();

