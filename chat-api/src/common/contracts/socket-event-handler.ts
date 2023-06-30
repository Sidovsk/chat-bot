export type SocketPayload = Record<string, any>;

export interface SocketEventHandler {
  data: SocketPayload;
  emit: (event: string, data: any) => void;
}
