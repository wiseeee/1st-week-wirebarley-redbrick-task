// input => "CAD", "KRW"

// output => "102.47", "1200.01"

export const data = {
    USDKRW: "1121.419945",
    USDJPY: "110.959498",
    USDPHP: "51.300504"
}

export default function caculating(input, target){
    const exchageRate = data["USD"+target];
    const output = (exchageRate*input).toFixed(2);
    return output.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
