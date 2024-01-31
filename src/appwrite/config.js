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
            console.log("Appwrite serive :: createPost :: error", error);
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
            console.log("Appwrite serive :: updatePost :: error", error);
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
            console.log("Appwrite serive :: deletePost :: error", error);
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
            console.log("Appwrite serive :: getPost :: error", error);
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
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getBlogData(date){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBlogCollectionId,
                [
                    Query.equal("date", date)
                ]
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
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
            console.log("Appwrite serive :: createOrder :: error", error);
        }
    }

    // async getAddress({documentId}){
    //     try {
    //         return await this.databases.getDocument(
    //             conf.appwriteDatabaseId,

    //         )
    //     } catch (error) {
            
    //     }
    // }
}


const appwriteService = new Service()
export default appwriteService