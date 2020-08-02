export const Types = {
    AUTH_LOGIN: 'login/AUTH_LOGIN'
}

export const INITIAL_STATE = {
    username: '',
    bio: '',
    avatar: '',
    name: '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.AUTH_LOGIN:
            return {
                ...state,
                    username: action.payload.username,
                    bio: action.payload.bio,
                    avatar: action.payload.avatar,
                    name: action.payload.name,
                }
        default:
            return state;
    }
}

export const Creators = {
    auth: ({ username, bio, avatar, name }) => ({
        type: Types.AUTH_LOGIN,
        payload: {
            username,
            bio,
            avatar,
            name
        }
    }),
};

export default loginReducer;