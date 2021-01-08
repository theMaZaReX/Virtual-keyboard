const keyboard = {
    elements:{
        main: null,
        keysContainer: null,
        keys: null
    },

    init() {
        //create main div's
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        //setup main elements
        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        

        //Add to DOM
        document.body.appendChild(this.elements.main);
        this.elements.main.appendChild(this.elements.keysContainer);

        this.createKeys()
    },

    createKeys() {
        _this = this;
        
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];
        keyLayout.forEach(function(key){
            const keyBtn = document.createElement('button');
            const insertLineBreak = ['backspace', "p", "enter", "?"].indexOf(key) !== -1;
            keyBtn.classList.add('keyboard__key');
            _this.elements.keysContainer.appendChild(keyBtn);
            
            if (insertLineBreak){
                _this.elements.keysContainer.appendChild(document.createElement('br'));  
            }

            switch(key){
                case 'backspace':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('backspace'));
                    keyBtn.classList.add('keyboard__key--wide');
                    break;

                case 'caps':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('keyboard_capslock'));
                    keyBtn.classList.add('keyboard__key--wide');
                    break;

                case 'enter':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('keyboard_return'));    
                    keyBtn.classList.add('keyboard__key--wide');
                    break;

                case 'done':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('check_circle'));    
                    keyBtn.classList.add('keyboard__key--wide');
                    break;
                
                case 'space':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('space_bar'));    
                    keyBtn.classList.add('keyboard__key--extra-wide');
                    break;

                default:
                    keyBtn.textContent = key;
            }

        })
    },

    createIcon(key){
        return icon = `<i class="material-icons">${key}</i>`;
    }

}



window.addEventListener("DOMContentLoaded", function () {
    keyboard.init();
});