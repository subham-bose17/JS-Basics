let btn = document.querySelectorAll('.button')
let body = document.querySelector('body')
let h = document.querySelector('h1')
let con = document.querySelector('.container')
let b = document.getElementsByClassName('button')

console.log(con);
btn.forEach((b) => {
    b.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.id === '#3a86ff') {
            body.style.backgroundColor = e.target.id
            h.style.color = '#3a86ff'
            con.style.border = '4px solid #80b1ffff'
            b.style.backgroundColor = '#3a86ff'

            b.addEventListener('mouseover', () => {
                b.style.backgroundColor = '#4f90f8ff'
            });

            b.addEventListener('mouseout', () => {
                b.style.backgroundColor = '#3a86ff'
            })


        }
        if (e.target.id === '#b0bec5') {
            body.style.backgroundColor = e.target.id
            h.style.color = '#b0bec5'
            con.style.border = '4px solid #edf0f2ff'
            b.style.backgroundColor = '#b0bec5'

             b.addEventListener('mouseover', () => {
                b.style.backgroundColor = '#c1d0d7ff'
            });

            b.addEventListener('mouseout', () => {
                b.style.backgroundColor = '#b0bec5'
            })
        }
        if (e.target.id === '#2e8b57') {
            body.style.backgroundColor = e.target.id
            h.style.color = '#2e8b57'
            con.style.border = '4px solid #beebd1ff'
            b.style.backgroundColor = '#2e8b57'

             b.addEventListener('mouseover', () => {
                b.style.backgroundColor = '#3fa86dff'
            });

            b.addEventListener('mouseout', () => {
                b.style.backgroundColor = '#2e8b57'
            })
        }
        if (e.target.id === '#8a2be2') {
            body.style.backgroundColor = e.target.id
            h.style.color = '#8a2be2'
            con.style.border = '4px solid #dabdf6ff'
            b.style.backgroundColor = '#8a2be2'

            b.addEventListener('mouseover', () => {
                b.style.backgroundColor = '#a651f5ff'
            });

            b.addEventListener('mouseout', () => {
                b.style.backgroundColor = '#8a2be2'
            })
        }

    })

})