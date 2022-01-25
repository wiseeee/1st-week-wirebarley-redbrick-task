

// input => "CAD", "KRW"

// output => "102.47", "1200.01"

const data = {
    USDKRW: "1121.419945",
    USDJPY: "110.959498"
}

export default function caculating(input, target){
    const exchageRate = data["USD"+target];
    const output = (exchageRate*input).toFixed(2);
    return output;
};
