import { defineEmits } from 'vue';
const emit = defineEmits<{
    (event: 'emit1'): void;
    (event: 'emit2'): void;
  }>();

  export function emit2() {
    emit('emit2');
  }