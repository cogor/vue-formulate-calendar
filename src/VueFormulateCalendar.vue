<template>
  <v-date-picker
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
    v-model="context.model"
    :options="context.options"
    v-bind="context.attributes"
  />
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "VueFormulateCalendar",
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  components: { "v-date-picker": DatePicker },
};
</script>
