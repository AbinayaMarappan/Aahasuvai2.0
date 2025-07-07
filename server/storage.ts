export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  timestamp: Date;
}

export interface IStorage {
  saveContactSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 0;
  }

  async saveContactSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): Promise<ContactSubmission> {
    const id = ++this.currentId;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      timestamp: new Date()
    };
    
    this.contacts.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();