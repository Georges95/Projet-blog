import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore({
    id: 'post',

    state: () => ({
        post: null,
        posts: [],
        category: null,
        categories: [],
        errors: [],
        loading: false,
        posts_count: 0,

    }),
    getters: {
        getErrors: (state) => state.errors,
        getLoading: (state) => state.loading,
        getId: (state) => state.post.id,
    },

    actions: {
        async csrf() {
            await axios.get('/sanctum/csrf-cookie');
        },

        async getPosts() {
            this.loading = true;
            await axios.get('/posts').then((Response) => {
                this.loading = false;
                console.log(Response);
                if (Response.status == 200) {
                    this.posts = [];
                    this.posts = Response.data.posts;
                    this.posts_count = Response.data.posts_count;
                }
            })
                .catch(error => {
                    this.loading = false;
                    console.log(error);

            })
        }
    }
})