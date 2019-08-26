class Control {
    constructor (callbacks) {
      this.callbacks = callbacks;
    }
  
    setKeyBindings () {
      window.addEventListener('keydown', event => {
        const key = event.keyCode;
        if ([ 38, 32 ].includes(key)) {
          event.preventDefault();
          switch (key) {
            case 38:
              this.callbacks.jump();
              break;
            case 32:
              this.callbacks.throw();
              break;
          }
        }

      });
    }
}