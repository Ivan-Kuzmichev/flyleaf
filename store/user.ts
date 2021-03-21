import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { MUTATION_AUTH, QUERY_USER } from '~/gql';

export interface IAuthTokens {
    accessToken: string | undefined;
    refreshToken: string | undefined;
}

export interface IUser {
    email: string | undefined;
}

export interface IUserState {
    auth: IAuthTokens;
    user: IUser;
}

export const state = (): IUserState => ({
    auth: {
        accessToken: undefined, // TODO: Need it?
        refreshToken: undefined,
    },
    user: {
        email: undefined,
    },
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
    user: (state: RootState) => state.user,
};

export const mutations: MutationTree<RootState> = {
    SET_TOKEN: (state, auth: any) => (state.auth = auth),
    SET_USER: (state, user: any) => (state.user = user),
};

export const actions: ActionTree<RootState, RootState> = {
    async auth({ commit }, form: any): Promise<boolean> {
        const { email, password } = form;
        const $apollo = this.app.apolloProvider.defaultClient;
        let result = false;

        try {
            const { data } = await $apollo.mutate({
                mutation: MUTATION_AUTH,
                variables: {
                    email,
                    password,
                },
            });

            if (data?.auth) {
                commit('SET_TOKEN', {
                    accessToken: data.auth.accessToken,
                    refreshToken: data.auth.refreshToken,
                });

                result = true;
            }
        } catch (error) {
            document.dispatchEvent(
                new CustomEvent('UNSUCCESSFUL_AUTHORIZATION', {
                    bubbles: true,
                    detail: {
                        user: { email, password },
                        error,
                    },
                })
            );
        }

        return result;
    },
    async getUser({ commit }) {
        const $apollo = this.app.apolloProvider.defaultClient;

        try {
            const { data } = await $apollo.query({
                mutation: QUERY_USER,
            });

            if (data?.user) {
                commit('SET_USER', {
                    email: data.user.email,
                });
            }
        } catch (error) {}
    },
};
