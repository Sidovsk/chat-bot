import { AuthorTypes } from '../../common/types';

export type ChatMessageProps = {
  author: AuthorTypes;
  message: string;
  createdAt?: Date;
};

export class ChatMessage {
  constructor(private readonly props: ChatMessageProps) {
    if (!props.author) throw new Error('Author is required');
    if (!props.message) throw new Error('Message is required');

    this.props.createdAt = this.props.createdAt || new Date();
  }

  getMessage() {
    return this.props.message;
  }
  getCreatedAt() {
    return this.props.createdAt;
  }

  getAuthor() {
    return this.props.author;
  }

  toObject() {
    return {
      author: this.getAuthor(),
      message: this.getMessage(),
      createdAt: this.getCreatedAt(),
    };
  }
}
