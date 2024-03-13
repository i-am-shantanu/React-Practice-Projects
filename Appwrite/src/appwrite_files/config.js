import conf from '../conf/conf.js'
import { Client, Databases,Storage,Query } from "appwrite";



export class Service{

    client = new Client();
    databases;
    buckets;

    constructor(){

        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)

        this.databases= new Databases(this.client);
        this.buckets=new Storage(this.client)
    }

    async getPost(slug){

        try {
            
            return await this.databases.getDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,slug)

        } catch (error) {
            console.log("Appwrite Services :: getPost() ::" , error);
            return false;
        }
    }

    async getPosts(query = [Query.equal("status","active")]){

        try {

            return await this.databases
            .listDocuments(conf.appWriteDatabaseId,conf.appWriteCollectionId,query);            

        } catch (error) {
            
            console.log("Appwrite Services :: getPosts() ::" , error);
            return false;
        }

    }

    async createPost({title,slug,content,featuredImage,status,userId}){

        try {
            
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId
                }
            )

        } catch (error) {
            console.log("Appwrite Services :: createPost() ::" , error);
            return false;
        }
    }

    async updatePost({title,content,featuredImage,status},slug){

        try {
            
            return await this.databases.updateDocument(conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {title,content,featuredImage,status})

        } catch (error) {
            
            console.log("Appwrite Services :: updatePost() ::" , error);
            return false;

        }
    }

    async deletePost(slug){

        try {
            
                await this.databases.deleteDocument(conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug)

            return true
        } catch (error) {
            
            console.log("Appwrite Services :: deletePost() ::" , error);
            return false;

        }
    }
}
