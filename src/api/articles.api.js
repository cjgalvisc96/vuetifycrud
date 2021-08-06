import axios from "axios";

const ARTICLES_API_URL = "http://localhost:8000/api/v1/articles/"


const getArticlesAPI = async () => {
    try {
        const response = await axios.get(ARTICLES_API_URL);
        const articles = response.data;
        return articles;
    } catch (error) {
        console.log(`getArticlesAPI() -> ${error}`);
        throw error
    }
}

const createArticleAPI = async body => {
    try {
        const response = await axios.post(
            ARTICLES_API_URL,
            body
        );
        const article = response.data;
        return article;
    } catch (error) {
        console.log(`createArticleAPI() -> ${error}`);
        throw error
    }
}

const getArticleByIdAPI = async _id => {
    try {
        const response = await axios.get(ARTICLES_API_URL + _id + '/');
        const article = response.data;
        return article;
    } catch (error) {
        console.log(`getArticleByIdAPI() -> ${error}`);
        throw error
    }
}


const updateArticleAPI = async (_id, body) => {
    try {
        const response = await axios.put(
            ARTICLES_API_URL + _id + '/',
            body
        );
        const article = response.data;
        return article;
    } catch (error) {
        console.log(`updateArticleAPI() -> ${error}`);
        throw error
    }
}

const partialUpdateArticleAPI = async (_id, body) => {
    try {
        const response = await axios.patch(
            ARTICLES_API_URL + _id + '/',
            body
        );
        const article = response.data;
        return article;
    } catch (error) {
        console.log(`partialUpdateArticleAPI() -> ${error}`);
        throw error
    }
}

const deleteArticleAPI = async _id => {
    try {
        const response = await axios.delete(ARTICLES_API_URL + _id + '/');
        const article = response.data;
        return article;
    } catch (error) {
        console.log(`deleteArticleAPI() -> ${error}`);
        throw error
    }
}


export {
    getArticlesAPI,
    getArticleByIdAPI,
    createArticleAPI,
    updateArticleAPI,
    partialUpdateArticleAPI,
    deleteArticleAPI
}