<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr class="hover" v-for="(project, index) in projectsStore.projectList" :key="project.id">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td><progress class="progress progress-primary w-56" value="40" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal
    :open="modalOpen"
    @value="projectsStore.addProject"
    @close="modalOpen = false"
    placeholder="Ingrese nombre del proyecto"
    titulo="Alta de proyecto"
    subtitulo="Indique el nombre para el nuevo proyecto"
  ></InputModal>

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Título del modal</h1>
    </template>

    <template #body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tempora veniam nesciunt
        eligendi, similique, incidunt atque dolores non officia laborum ipsam tenetur nisi
        voluptatum ex expedita enim eum esse praesentium.
      </p>
    </template>

    <template #acciones>
      <div class="flex justify-end">
        <button class="btn mr-4" @click="customModalOpen = false">Close</button>
        <button class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <FabButton position="bottom-right" @click="modalOpen = true">
    <AddCircle></AddCircle>
  </FabButton>

  <FabButton position="bottom-left" @click="customModalOpen = true">
    <PawIcon></PawIcon>
  </FabButton>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import PawIcon from '@/modules/common/icons/PawIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
