import config from "../config/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Get error at register user time>>", error);
      return false;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch {
      throw false;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch {
      return false;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch {
      return false;
    }
  }
}

const authService = new AuthService();

export default authService;
