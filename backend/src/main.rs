fn main() {
    println!("Hello, world!");
    let a = HelloWorld().sup();
}

struct HelloWorld {
    txt: &str 
}

impl HelloWorld {
    pub fn sup(self) {
        println!("HELLO WORLD!");
    }
}
