window.onload = function () {
    fetch('https://my-json-server.typicode.com/Arielandriel30/web-cursos/cursos')
        .then(response => response.json() )
        .then(data => {
            data.forEach(element => {
                document.querySelector('.products-wrapper').innerHTML += `
                    
                    
                        <div class="cont-cursos ${element.type}">
                            <img src="assets/img/${element.image}" alt="${element.name}">
                            <h3 class="n-cursos">${element.name}</h3>
                            <p>$${element.price}</p>
                           </div>
                       
                `
            });
            /*====== Products filters ======*/
            let html = document.querySelectorAll('.html');
            let css = document.querySelectorAll('.css');
            let java = document.querySelectorAll('.java');
            let javascript = document.querySelectorAll('.js');
            let htmlList = document.querySelector('.html-list');
            let cssList = document.querySelector('.css-list');
            let javaList = document.querySelector('.java-list');
            let javascriptList = document.querySelector('.javascript-list');
             let quitFilter = document.querySelector('.quitFilter');

            htmlList.addEventListener('click', e => {

                htmlList.classList.add('bold');
                cssList.classList.remove('bold');
                javaList.classList.remove('bold');
                javascriptList.classList.remove('bold');

                quitFilter.classList.remove('reduce');

                html.forEach(y => {
                    y.classList.remove('reduce')
                })
                css.forEach(y => {
                    y.classList.add('reduce')
                })
                java.forEach(y => {
                    y.classList.add('reduce')
                })
                javascript.forEach(y => {
                    y.classList.add('reduce')
                })
            })

             cssList.addEventListener('click', e => {

                cssList.classList.add('bold');
                htmlList.classList.remove('bold');
                javaList.classList.remove('bold');
                javascriptList.classList.remove('bold');

                quitFilter.classList.remove('reduce');

                css.forEach(y => {
                    y.classList.remove('reduce')
                })
                html.forEach(y => {
                    y.classList.add('reduce')
                })
                java.forEach(y => {
                    y.classList.add('reduce')
                })
                javascript.forEach(y => {
                    y.classList.add('reduce')
                })
            })

             javaList.addEventListener('click', e => {

                javaList.classList.add('bold');
                cssList.classList.remove('bold');
                htmlList.classList.remove('bold');
                javascriptList.classList.remove('bold');

                quitFilter.classList.remove('reduce');

                java.forEach(y => {
                    y.classList.remove('reduce')
                })
                css.forEach(y => {
                    y.classList.add('reduce')
                })
                html.forEach(y => {
                    y.classList.add('reduce')
                })
                javascript.forEach(y => {
                    y.classList.add('reduce')
                })
            })

             javascriptList.addEventListener('click', e => {

                javascriptList.classList.add('bold');
                cssList.classList.remove('bold');
                javaList.classList.remove('bold');
                htmlList.classList.remove('bold');

                quitFilter.classList.remove('reduce');

                javascript.forEach(y => {
                    y.classList.remove('reduce')
                })
                css.forEach(y => {
                    y.classList.add('reduce')
                })
                java.forEach(y => {
                    y.classList.add('reduce')
                })
                html.forEach(y => {
                    y.classList.add('reduce')
                })
            })

            quitFilter.addEventListener('click', e => {

                htmlList.classList.remove('bold');
                cssList.classList.remove('bold');
                javaList.classList.remove('bold');
                javascriptList.classList.remove('bold');

                quitFilter.classList.add('reduce');


                html.forEach(y => {
                    y.classList.remove('reduce')
                })
                css.forEach(y => {
                    y.classList.remove('reduce')
                })
                java.forEach(y => {
                    y.classList.remove('reduce')
                })
                javascript.forEach(y => {
                    y.classList.remove('reduce')
                })
             })
          })
}

