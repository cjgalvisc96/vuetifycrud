<template>
    <v-app>
        <v-container>
            <v-row class="text-center">
                <v-col class="mb-4">
                    <h2 class="display-2 font-weight-bold mb-3">
                        Articles List
                    </h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="mb-1">
                    <v-btn :to="{name:'CreateArticle'}" class="mx-2" fab dark color="indigo">
                        <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-simple-table fixed-header class="elevation-3">
                        <template>
                            <thead>
                                <tr>
                                    <th class="text-center">ID</th>
                                    <th class="text-center">Description</th>
                                    <th class="text-center">Price</th>
                                    <th class="text-center">Stock</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr v-for="article in articles" :key="article._id">
                                        <td>{{article._id}}</td>
                                        <td>{{article.description}}</td>
                                        <td>{{article.price}}</td>
                                        <td>{{article.stock}}</td>
                                        <td>
                                            <v-btn :to="{name: 'UpdateArticle', params:{id: article._id}}" fab small color="primary">
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                            <v-btn @click.stop="dialog=true" @click="id=article._id" fab small color="error">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
            
            <v-dialog v-model="dialog" max-width="350">
                <v-card>
                    <v-card-title class="headline">Do you want remove this Article?</v-card-title>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn @click="dialog = false">Cancel</v-btn>
                        <v-btn @click="confirmDelete(id)" color="error">Confirm</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            
            <v-snackbar v-model="snackbar" color="success">{{textsnack}}
                <template v-slot:action="{attrs}">
                    <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                </template>
            </v-snackbar>
        </v-container>
    </v-app>
</template>

<script>
import {getArticlesAPI, deleteArticleAPI} from '../api/articles.api.js';

export default {
    name: 'ListArticles',
    mounted(){
        this.getArticles();
    },
    data(){
        return{
            dialog: false,
            articles:null,
            id:null,
            snackbar:false,
            textsnack: "Article removed!"
        }
    },
    methods:{
        async getArticles(){
            const articles = await getArticlesAPI();
            this.articles = articles.results;
        },
        async confirmDelete(id){  // "id" is used because "_id" is reserved word
            await deleteArticleAPI(id);
            this.getArticles();
            this.dialog = false;
            this.snackbar = true;
        }
    }
}
</script>

<style>

</style>