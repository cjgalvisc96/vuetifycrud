import axios from "axios";

const ARTICLES_API_URL = "http://127.0.0.1:8000/api/v1/articles"


const getArticles = async () => {
    try {
        const response = await axios.get(ARTICLES_API_URL);
        const articles = response.data
        return articles;
    } catch (error) {
        console.log(`getArticles() -> ${error}`);
        throw error
    }
}

const createArticle = async body => {
    try {
        const response = await axios.post(
            ARTICLES_API_URL,
            body
        );
        const article = response.data
        return article;
    } catch (error) {
        console.log(`createArticle() -> ${error}`);
        throw error
    }
}

const getArticleById = async _id => {
    try {
        const response = await axios.get(ARTICLES_API_URL + _id);
        const article = response.data
        return article;
    } catch (error) {
        console.log(`getArticleById() -> ${error}`);
        throw error
    }
}


const updateArticle = async (_id, body) => {
    try {
        const response = await axios.put(
            ARTICLES_API_URL + _id,
            body
        );
        const article = response.data
        return article;
    } catch (error) {
        console.log(`updateArticle() -> ${error}`);
        throw error
    }
}

const partialUpdateArticle = async (_id, body) => {
    try {
        const response = await axios.patch(
            ARTICLES_API_URL + _id,
            body
        );
        const article = response.data
        return article;
    } catch (error) {
        console.log(`updateArticle() -> ${error}`);
        throw error
    }
}

const deleteArticle = async _id => {
    try {
        const response = await axios.delete(ARTICLES_API_URL + _id);
        const article = response.data
        return article;
    } catch (error) {
        console.log(`getArticleById() -> ${error}`);
        throw error
    }
}


export {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    partialUpdateArticle,
    deleteArticle
}