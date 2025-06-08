
export { userService, articleService, commentService, BaseDataService } from './DataService';
export * from '../models';

// Centralized data management
export class DataManager {
  static async initialize() {
    console.log('DataManager initialized');
    // Future: Initialize MongoDB connection
  }

  static async migrate() {
    console.log('Running data migrations');
    // Future: Handle data migrations
  }

  static async seed() {
    console.log('Seeding initial data');
    // Future: Seed initial data
  }
}
