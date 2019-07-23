import * as countActions from './count.actions';

export function counterReducer( state: number = 10, action: countActions.actions ): number {
    switch ( action.type ) {
        case countActions.INCREMENT:
            return state + 1;
        case countActions.DECREMENT:
            return state - 1;
        case countActions.MULTIPLY:
            return state * action.payload;
        case countActions.DIVIDE:
            return state / action.payload;
        case countActions.RESET:
            return 0;
        default:
            return state;
    }
}
