import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    // bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        //this.bucket = new Storage(this.client);
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

    // async getPosts(queries = [Query.equal("status", "active")]){
    //     try {
    //         return await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             queries,
                

    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: getPosts :: error", error);
    //         return false
    //     }
    // }

    // file upload service

    // async uploadFile(file){
    //     try {
    //         return await this.bucket.createFile(
    //             conf.appwriteBucketId,
    //             ID.unique(),
    //             file
    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: uploadFile :: error", error);
    //         return false
    //     }
    // }

    // async deleteFile(fileId){
    //     try {
    //         await this.bucket.deleteFile(
    //             conf.appwriteBucketId,
    //             fileId
    //         )
    //         return true
    //     } catch (error) {
    //         console.log("Appwrite serive :: deleteFile :: error", error);
    //         return false
    //     }
    // }

    // getFilePreview(fileId){
    //     return this.bucket.getFilePreview(
    //         conf.appwriteBucketId,
    //         fileId
    //     )
    // }
}


const appwriteService = new Service()
export default appwriteService