import Event from "./model/Event";
import Guest from "./model/Guest";

import complementaryEvent from "./functions/complementary/complementaryEvent";
import complementaryGuest from "./functions/complementary/complementaryGuest";
import createEmptyEvent from "./functions/create/createEmptyEvent";
import createEmptyGuest from "./functions/create/createEmptyGuest";

export type { Event, Guest };

export {
  complementaryEvent,
  complementaryGuest,
  createEmptyEvent,
  createEmptyGuest,
};
