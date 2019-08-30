class Control {
    constructor (callbacks) {
      this.callbacks = callbacks;
    }
  
    setKeyBindings () {
      window.addEventListener('keydown', event => {
        const key = event.keyCode;
        if ([ 38 ].includes(key)) {
          event.preventDefault();
            this.callbacks.jump();
        }
      });
    }
}