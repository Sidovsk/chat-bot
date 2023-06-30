export interface ISocketClient {
  on(event: string, callback: (data: any) => void): void;
  off(event: string): void;
  emit(event: string, data: any): void;
  disconnect(): void;
}
