import moment from "moment";

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    // Convert number to string to handle decimals
    const numStr = num.toString();
    const parts = numStr.split("."); // Split into integer and fractional parts

    let integerPart = parts[0];
    let fractionalPart = parts[1];

    // Regex for Indian numbering system
    // It handles the first three digits, then every two digits
    const lastThree = integerPart.substring(integerPart.length - 3);
    const otherNumbers = integerPart.substring(0, integerPart.length - 3);

    if (otherNumbers !== "") {
        // Apply comma after every two digits for the 'otherNumbers' part
        const formattedOtherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        integerPart = formattedOtherNumbers + "," + lastThree;
    } else {
        integerPart = lastThree; // No change if less than 4 digits
    }

    // Combine integer and fractional parts
    return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
};

export const prepareIncomeLineChartData = (data = []) => {
    const groupedByDate = data.reduce((acc, item) => {
        const dateKey = item.date;

        if (!acc[dateKey]) {
            acc[dateKey] = {
                date: dateKey,
                totalAmount: 0,
                items: [],
            };
        }

        acc[dateKey].totalAmount += Number(item.amount);
        acc[dateKey].items.push(item);
        return acc;
    }, {});

    const chartData = Object.values(groupedByDate);
    chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

    return chartData.map((entry) => ({
        ...entry,
        month: moment(entry.date).format("Do MMM"),
    }));
};

//For expense
export const prepareExpenseLineChartData = (data = []) => {
    const groupedByDate = data.reduce((acc, item) => {
        const dateKey = item.date;

        if (!acc[dateKey]) {
            acc[dateKey] = {
                date: dateKey,
                totalAmount: 0,
                items: [],
            };
        }

        acc[dateKey].totalAmount += Number(item.amount);
        acc[dateKey].items.push(item);
        return acc;
    }, {});

    const chartData = Object.values(groupedByDate);
    chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

    return chartData.map((entry) => ({
        ...entry,
        month: moment(entry.date).format("Do MMM"),
    }));
};