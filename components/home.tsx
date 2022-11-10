import React from 'react'

const home = () => {
    const[selected, setSelected] = useState(undefined)
    const buttonHandler = (e, id, i) => {
        e.currentTarget.classList.toggle('active')
        if (id !== selected) {
            const button = document.querySelectorAll('.faq-button')
            button.forEach((btn, index) => {
            if (index !== i) {
                btn.classList.remove('active');
            }
            });
            setSelected(id);
        } else {
            const button = document.querySelectorAll('.faq-button')
            button.forEach((btn) => {
            btn.classList.remove('active')
            });
            setSelected(undefined)
        }
        }
  return (
    <div>
      
    </div>
  )
}

export default home
