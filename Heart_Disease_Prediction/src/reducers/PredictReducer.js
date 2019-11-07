const initialState = {
    age:'',
    sex:'',
    chestPain:'',
    restingBp:'',
    cholestrol:'',
    bloodSugar:'',
    restEcg:'',
    maxHR:'',
    angina:'',
    depression:'',
    slope:'',
    coloredVessel:'',
    thal:'',
    data:{},

}

const predictreducer = (state = initialState, action) => {
    switch(action.type) {
            
        case 'CHANGE_AGE':
            return {...state, age:action.age};

        case 'CHANGE_SEX':
            return {...state, sex:action.sex};

        case 'CHANGE_CHESTPAIN':
            return {...state, chestPain:action.chestPain};

        case 'CHANGE_RESTINGBP':
            return {...state, restingBp:action.restingBp};
        
        case 'CHANGE_CHOLESTROL':
            return {...state, cholestrol:action.cholestrol};
        
        case 'CHANGE_BLOODSUGAR':
            return {...state, bloodSugar:action.bloodSugar};
        
        case 'CHANGE_RESTECG':
            return {...state, restEcg:action.restEcg};

        case 'CHANGE_MAXHR':
            return {...state, maxHR:action.maxHR};

        case 'CHANGE_ANGINA':
            return {...state, angina:action.angina};
        
        case 'CHANGE_DEPRESSION':
            return {...state, depression:action.depression};
        
        case 'CHANGE_SLOPE':
            return {...state, slope:action.slope};
        
        case 'CHANGE_COLORED_VESSEL':
            return {...state, coloredVessel:action.coloredVessel};
        
        case 'CHANGE_THAL':
            return {...state, thal:action.thal};
        
        case 'SAVE_DATA':
            return {...state, data:action.data};

        default:
            return state;
    }
}

export default predictreducer;