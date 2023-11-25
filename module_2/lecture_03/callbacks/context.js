

function hello(){
    const another = function(){
        this.name = "John";
    }

    another();

    console.log(this.name);
}

hello(); 