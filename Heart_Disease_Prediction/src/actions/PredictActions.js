import { Alert } from 'react-native';
import PredictController from '../controllers/PredictController';
export const changeAge = age => {
    return {
        type:'CHANGE_AGE',
        age
    }
}

export const changeSex  = sex => {
    return {
        type:'CHANGE_SEX',
        sex
    }
}

export const changeChestPain = chestPain => {
    return {
        type:'CHANGE_CHESTPAIN',
        chestPain
    }
}

export const changeRestingBp = restingBp => {
    return {
        type:'CHANGE_RESTINGBP',
        restingBp
    }
}

export const changeCholestrol = cholestrol => {
    return {
        type:'CHANGE_CHOLESTROL',
        cholestrol
    }
}

export const changeBloodSugar = bloodSugar => {
    return {
        type:'CHANGE_BLOODSUGAR',
        bloodSugar
    }
}

export const changeRestEcg = restEcg => {
    return {
        type:'CHANGE_RESTECG',
        restEcg
    }
}

export const changeMaxHR = maxHR => {
    return {
        type:'CHANGE_MAXHR',
        maxHR
    }
}

export const changeAngina = angina => {
    return {
        type:'CHANGE_ANGINA',
        angina
    }
}

export const changeDepression = depression => {
    return {
        type:'CHANGE_DEPRESSION',
        depression
    }
}

export const changeSlope = slope => {
    return {
        type:'CHANGE_SLOPE',
        slope
    }
}

export const changeColoredVessel = coloredVessel => {
    return {
        type:'CHANGE_COLORED_VESSEL',
        coloredVessel
    }
}

export const changeThal = thal => {
    return {
        type:'CHANGE_THAL',
        thal
    }
}

export const saveData = data => {
    return {
        type: 'SAVE_DATA',
        data
    }
}
// action for predict funcionality
export const predict = inputDetails => async(dispatch) => {
    try {
        console.log(inputDetails)
        const response = await PredictController.predict(inputDetails);
        console.log('Here')
        console.log(response)
        let data = response.data
        if(response != null && response.success === false) {
            Alert.alert("Failure.")
        } else {
            dispatch(saveData(data)) //dispatches the data 
        }
    
    //   dispatch(registerSuccess(user));
    } catch (error) {
    //   dispatch(registerError(error.message));
    }
}