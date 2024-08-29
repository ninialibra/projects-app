<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ titulo }}</h3>
      <p class="py-4" v-if="subtitulo">{{ subtitulo }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            name=""
            id=""
            :placeholder="placeholder ?? 'Ingrese un valor para el campo'"
            v-model="inputValue"
            class="input input-bordered input-primary w-full flex-1"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="btn mr-4">Close</button>
            <button class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { Prop, ref } from 'vue';

interface Props {
  open: boolean;
  titulo: string;
  subtitulo?: string;
  placeholder?: string;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  console.log(inputValue.value);

  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>
