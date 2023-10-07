import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@tdticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
