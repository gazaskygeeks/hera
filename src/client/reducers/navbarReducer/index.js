import { NAVBAR_COLLAPSE, NAVBAR_REVEAL } from '../../constants/actionTypes';

const initialState = { isCollapsed: true };

export default (state = initialState, {type, isCollapsed}) => {
    switch (type) {
        case NAVBAR_COLLAPSE: return { isCollapsed: true };
        case NAVBAR_REVEAL: return { isCollapsed: false };
        default: return { isCollapsed: !isCollapsed };
    }
}