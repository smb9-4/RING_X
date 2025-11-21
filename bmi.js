function calculateBMI(weightKg, heightM) {
    if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0) {
        throw new Error("Invalid input. Weight must be a positive number in kg, and height must be a positive number in meters.");
    }
    return weightKg / (heightM * heightM);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

function main() {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
        console.log("------------------------------------------");
        console.log("Usage: node bmi_calculator.js <weight_kg> <height_m>");
        console.log("Example: node bmi_calculator.js 70 1.75");
        console.log("------------------------------------------");
        return;
    }

    const weightKg = parseFloat(args[0]);
    const heightM = parseFloat(args[1]);

    try {
        const bmi = calculateBMI(weightKg, heightM);
        const category = interpretBMI(bmi);

        console.log("\n==========================================");
        console.log("       Body Mass Index (BMI) Result");
        console.log("==========================================");
        console.log(`Weight: ${weightKg} kg`);
        console.log(`Height: ${heightM} m`);
        console.log(`\nYour BMI is: ${bmi.toFixed(2)}`);
        console.log(`Category: ${category}`);
        console.log("==========================================\n");

    } catch (error) {
        console.error(`\nERROR: ${error.message}\n`);
    }
}

main();