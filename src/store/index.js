// store.js
import {createStore} from 'vuex';

export default createStore({
    state: {
        questions: [],
        answers: {}
    },
    mutations: {
        setFormData(state, payload) {
            state.questions = payload.questions;
            state.answers = payload.answers;
        },
        resetState(state) {
            state.questions = [];  // Reset questions to initial state
            state.answers = {};    // Reset answers to initial state
        }
    },
});
