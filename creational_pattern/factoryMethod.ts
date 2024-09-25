interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    operation(): string {
        return "Product A의 동작";
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return "Product B의 동작";
    }
}

abstract class Creator {
    abstract factoryMethod(): Product;

    someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: ${product.operation()}`;
    }
}

class ConcreteCreatorA extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log("ConcreteCreatorA:");
clientCode(new ConcreteCreatorA());

console.log("ConcreteCreatorB:");
clientCode(new ConcreteCreatorB());