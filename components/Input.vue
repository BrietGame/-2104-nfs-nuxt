<template>
  <div class="mb-6">
    <label :for="input.type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
    <input :type="input.type" :id="input.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="input.placeholder" :required="input.required">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    input: {
      type: Object,
      name: String,
      placeholder: String,
      required: true,
    }
  }
}
</script>
