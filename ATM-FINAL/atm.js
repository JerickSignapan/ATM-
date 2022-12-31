
//drag
let el = document.getElementById('img-to-drag');
let draggie = new Draggabilly(el)


//pincode
const nums = document.querySelectorAll('.num')
const form = document.querySelector('form')

nums.forEach((num, index) => {
    num.dataset.id = index
    
    num.addEventListener('keyup', () => {
        if (num.value.length == 1) {
            if (nums[nums.length - 1].value.length == 1) form.submit()
            nums[parseInt(num.dataset.id) + 1].focus()
        }
    })
})

