export default function reducer(state = "", action) {
    switch (action.payload) {
        case "GRE":
            {
                return "GRE";
            }
        case "SAT":
            {
                return "SAT";
            }
    }

    return state;
}