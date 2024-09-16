import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuid } from 'uuid';
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) {
      return;
    }

    projects.value.push({
      id: uuid(),
      name: name,
      tasks: [],
    });
  };

  return {
    //properties
    projects,

    //getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    //actions
    addProject,
  };
});
