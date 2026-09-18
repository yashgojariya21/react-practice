import config from "../config/conf";

import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status },
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
      return true;
    } catch {
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
    } catch {
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,
      );
    } catch {
      return false;
    }
  }

  async getPostByUserId(userId) {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("userId", userId)],
      );
    } catch (error) {
      console.log("Get error at get post by user id:", error);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch {
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);

      return true;
    } catch {
      return false;
    }
  }

  // getFilePreview(fileId) {
  //   try {
  //     return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  //   } catch (error) {
  //     return false;
  //   }
  // }
  getFilePreview(fileId) {
    if (!fileId) return "";
    try {
      return this.bucket.getFileView(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      return "";
    }
  }
}

const service = new Service();

export default service;
