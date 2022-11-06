
import * as actions from '../actions/Actions';

const initialStateObj = {
    firstSegment:'UAT',
    secondSegment: 'E2E',
    thirdSegment: 'Contract Testing',
    fourthSegment: 'Integration Testing',
    fifthSegment: 'System Testing',
    sixthSegment: 'Unit Testng'
}

const HomePyramidReducer = (state ={initialStateObj}, action ) =>{
    if(action.type === actions.RENDER_HOME_PYRAMID){
        return state;
    }
    else{
        return state;
    }
}

export default HomePyramidReducer;