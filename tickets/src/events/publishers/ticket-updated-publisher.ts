import { Publisher, Subjects, TicketUpdatedEvent } from "@tdticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
