import { API_URL } from "@/shared/config";
import { error } from "console";

export class ApiClient {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async handleResponse<TResult>(response: Response): Promise<TResult> {
    if (!response.ok) {
      let message: string;
      try {
        const errMsg = await response.json();
        message = `Server error: ${errMsg.message}`;
      } catch (error) {
        message = `HTTP error! Status: ${response.status}`;
      }
      throw new Error(message);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error("Error parsing JSON response");
    }
  }

  public async get<TResult = unknown>(
    endpoint: string,
    queryParams?: Record<string, string | number>,
    token?: string | null
  ): Promise<TResult> {
    const url = new URL(endpoint, this.baseUrl);
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(url.toString(), {
      method: "GET",
      headers,
    });

    return this.handleResponse<TResult>(response);
  }

  public async post<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    body: TData,
    token?: string
  ): Promise<TResult> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      mode: "cors",
    });

    return this.handleResponse<TResult>(response);
  }
}

export const apiClient = new ApiClient(API_URL);
