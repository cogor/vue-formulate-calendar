import VueFormulateCalendar from "./VueFormulateCalendar.vue";

export default function VueFormulateCalendarPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      VueFormulateCalendar,
    },
    library: {
      calendar: {
        classification: "date",
        component: "VueFormulateCalendar",
      },
    },
  });
}
