


        // 1. Define Practice
        function printHeart() {
            console.log("<3");
        }
        console.log("printHeart():");
        printHeart();

        // 2. Return Value Practice
        const multiply = (a, b) => a * b;
        console.log("\nmultiply():");
        console.log("multiply(5,3) =", multiply(5,3));  // 15
        console.log("multiply(7,8) =", multiply(7,8));  // 56
        console.log("multiply(5,7) =", multiply(5,7));  // 35

        // 3. Scope Practice
        // A.
        let animal = "Giant Pacific Octopus";
        function observe() {
            let animal = "Pajama Squid";
            console.log(animal);
        }
        console.log("\nExercise 3A - Scope:");
        observe();  // Prints: "Pajama Squid"

        // B.
        let deadlyAnimal = "Blue-Ringed Octopus";
        function handleAnimal() {
            let deadlyAnimal = "Scorpionfish";
            console.log(deadlyAnimal);
        }
        console.log("\nExercise 3B - Scope:");
        handleAnimal();  // Prints: "Scorpionfish"
        console.log(deadlyAnimal);  // Prints: "Blue-Ringed Octopus"

        // 4. Arrow Function Exercise
        const sayHello = name => `Hello ${name}!`;
        console.log("\nExercise 4 - Arrow Function:");
        console.log(sayHello("Magrid"));  // "Hello Magrid!"
        console.log(sayHello("Luna"));    // "Hello Luna!"
