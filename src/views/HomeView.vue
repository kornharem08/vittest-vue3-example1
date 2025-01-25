<template>
  <div class="p-4">
    <button @click="openModal('modal1')" class="px-4 py-2 bg-blue-500 text-white rounded">
      Open Modal 1
    </button>
    <button @click="openModal('modal2')" class="ml-2 px-4 py-2 bg-green-500 text-white rounded">
      Open Modal 2
    </button>

    <button @click="openModal('modalRef3')" class="ml-2 px-4 py-2 bg-green-500 text-white rounded">
      Open Modal 3
    </button>

    <button @click="navigateToAbout" class="ml-2 px-4 py-2 bg-green-500 text-white rounded">
      Open Modal 3
    </button>


    <BaseModal id="modal1">
      <h2 class="text-xl font-bold">Modal 1</h2>
      <p>This is the content of Modal 1.</p>
    </BaseModal>

    <BaseModal id="modal2">
      <CreateUserModal />
      <button @click="openModal('modal4')" class="ml-2 px-4 py-2 bg-green-500 text-white rounded">
      Open Modal 3
    </button>

    </BaseModal>

    <BaseModal id="modal4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis accusamus optio totam quas consequuntur. Dolorum nam harum, id perspiciatis quaerat et nesciunt culpa nulla aspernatur similique cumque dignissimos aliquam.
      <CreateUserModal />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import BaseModal from '../components/BaseModal.vue';
import CreateUserModal from '../components/CreateUserModal.vue';
import { openModal, navigateToAbout } from './HomeView';

</script>