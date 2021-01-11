const keyboard = {
    elements:{
        main: null,
        keysContainer: null,
        keys: []
    },
    props:{
        textAreas: [],
        currentTextArea: null,
        value: "",
        caps: false
    },
    init() {
        _this = this;
        //create main div's
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        //setup main elements
        this.elements.main.classList.add('keyboard', 'keyboard--close');
        this.elements.keysContainer.classList.add('keyboard__keys');
        
        //Add to DOM
        document.body.appendChild(this.elements.main);
        this.elements.main.appendChild(this.elements.keysContainer);

        //fill keyboard buttons
        this.createKeys()

        this.elements.keys = document.querySelectorAll('.keyboard__key');

        _this.props.textAreas = document.querySelectorAll('.keyboard-input');

        _this.props.textAreas.forEach(function(element){
            element.addEventListener('focus', function(event){
                _this.props.currentTextArea = event.target;
                _this.elements.main.classList.remove('keyboard--close');
            })
        })
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
                    keyBtn.addEventListener('click', function(){
                       
                        _this.props.value = _this.props.value.substring(0, _this.props.value.length-1);
                        _this.fillTextArea();
                    })
                    break;

                case 'caps':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('keyboard_capslock'));
                    keyBtn.classList.add('keyboard__key--wide', 'keyboard__key-switch');
                    keyBtn.addEventListener('click', function(){
                        keyBtn.classList.toggle('keyboard__key-switch--active');
                        _this.toggleCaps()});
                    break;

                case 'enter':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('keyboard_return'));    
                    keyBtn.classList.add('keyboard__key--wide');
                    keyBtn.addEventListener('click', function(){
                        _this.props.value += '\n';
                        _this.fillTextArea();
                    })
                    break;

                case 'done':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('check_circle'));    
                    keyBtn.classList.add('keyboard__key--wide');
                    keyBtn.addEventListener('click', function(){
                        _this.elements.main.classList.add('keyboard--close');
                    })
                    break;
                
                case 'space':
                    keyBtn.insertAdjacentHTML('afterbegin', _this.createIcon('space_bar'));    
                    keyBtn.classList.add('keyboard__key--extra-wide');
                    keyBtn.addEventListener('click', function(){
                        _this.props.value += ' ';
                        _this.fillTextArea();
                    })
                    break;

                default:
                    keyBtn.textContent = key;
                    keyBtn.addEventListener('click', function(){
                        _this.props.value += keyBtn.textContent;
                        _this.fillTextArea();
                    })
            }

        })
    },

    createIcon(key){
        return icon = `<i class="material-icons">${key}</i>`;
    },
    toggleCaps(){
        _this.props.caps = !_this.props.caps

        for (const key of _this.elements.keys){
            if (key.childElementCount===0){
            key.textContent = _this.props.caps ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
        }
    },
    fillTextArea(){ 
       _this.props.currentTextArea.value = _this.props.value;
    }

}



window.addEventListener("DOMContentLoaded", function () {
    keyboard.init();
});
























