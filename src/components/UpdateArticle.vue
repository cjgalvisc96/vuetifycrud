<template>
    <v-app>
        <v-container>
            <v-row class="text-center">
                <v-col class="mb-4">
                    <h1 class="display-2 font-weight-bold mb-3">
                        Update Article Form
                    </h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <form v-on:submit.prevent="saveArticle()">
                        <v-text-field v-model="article.description" label="Description" placeholder="Description" solo required/>
                        <v-text-field v-model="article.price" label="Price" placeholder="Price" type="number" prefix="$" solo required/>
                        <v-text-field v-model="article.stock" label="Stock" placeholder="Stock" solo required/>
                        <v-card-actions>
                            <v-btn class="mr-4" color="warning" type="submit">Update</v-btn>
                        </v-card-actions>

                    </form>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import {getArticleByIdAPI, updateArticleAPI} from '../api/articles.api.js';
export default {
    name: "UpdateArticle",
    async mounted(){
        this.id = this.$route.params.id;
        const articleToUpdate = await getArticleByIdAPI(this.id);
        this.article = articleToUpdate
    },
    data(){
        return{
            id:null,
            article: {
                description: '',
                price: '',
                stock: ''
            }
        }
    },
    methods:{
        async saveArticle(){
            let router = this.$router;
            let body = {
                description: this.article.description,
                price: this.article.price,
                stock: this.article.stock
            }
            await updateArticleAPI(this.id, body);
            router.push('/articles');
        }
    }
}
</script>
