import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createUserInfo({name, address, email, phone, dob, starSign, gotro, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    name,
                    address,
                    email,
                    phone,
                    dob,
                    starSign,
                    gotro,
                    userId,
                }
            )
        } catch (error) {
            alert("Appwrite serive :: createPost :: error", error);
        }
    }

    async updateUserInfo(slug, {name, email, starSign, gotro}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    name,
                    email,
                    starSign,
                    gotro,
                }
            )
        } catch (error) {
            alert("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deleteUserInfo(postId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            )
            return true
        } catch (error) {
            alert("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getUserInfo(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            alert("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getUserData(phone){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("phone", phone)
                ]
            )
        } catch (error) {
            alert("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getBlogData(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBlogCollectionId,
                [
                    Query.orderDesc("date")
                ]
            )
        } catch (error) {
            alert("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async createOrder({name, address, email, phone, product, price}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOrdersId,
                ID.unique(),
                {
                    name,
                    address,
                    email,
                    phone,
                    product,
                    price
                }
            )
        } catch (error) {
            alert("Appwrite serive :: createOrder :: error", error);
        }
    }
}


const appwriteService = new Service()
export default appwriteService
