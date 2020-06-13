/*
 * a module returns an object
 */

function Hello() {
    return {
        name: '',
        setName:(newName) => {
            this.name = newName;
        },
        sayHello:() => {
            return 'Hello ' + this.name;
        }
    }
}

export default Hello;