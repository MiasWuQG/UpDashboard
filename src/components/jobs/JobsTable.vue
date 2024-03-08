<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import FailIcon from '@/components/icons/FailIcon.vue';
import Paginator from 'primevue/paginator';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const currentPage = ref(1);

const rowsPerPage = ref(10);
const totalRecords = ref();
const dataTable = ref(null);
const tableData = ref();

onMounted(() => {
    totalRecords.value = props.data.length;
    tableData.value = props.data;
    calculateTotalPages();
});

const calculateTotalPages = () => {
  return Math.ceil(totalRecords.value / rowsPerPage.value);
};
</script>

<template>
  <div class="font-[Jakarta]">
    <DataTable
      ref="dataTable"
      :rows="rowsPerPage"
      :value="tableData"
      paginator
      paginator-template="PrevPageLink NextPageLink"
      unstyled
      :table-class="'rounded-xl w-full p-10 min-w-[700px] overflow-x-scroll border border-white/20'"
      class="rounded-md font-[Jakarta] "
      :pt="{
        root: { class: ' w-full font-[Jakarta]' },
        table	: { class: 'bg-white/5' },
        thead: { class: 'bg-white/10 text-left px-4 font-[Jakarta]' },
        tbody: { class: 'mx-10 p-10'},
        column	: {class: 'px-10'},
        bodyRow: {class: 'h-[38px] text-[12px] capitalize border-b border-white/5 [&:last-child]:border-none'},
        wrapper: {class: 'rounded-md'},
        paginator: {class: '!bg-black w-full'}
      }"
    >
      <Column
        field="id"
        header="JOB ID"
        :pt="{
          headerCell: {class: 'pl-5 py-[10px] text-[11px] uppercase w-[35%]'}
        }"
      />
      <Column
        field="startDate"
        header="Start Date"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[25%]'}
        }"
      />
      <Column
        field="status"
        header="Status"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[23%]'}
        }"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <CheckIcon v-if="data.status === 'completed'" />
            <FailIcon v-if="data.status === 'failed'" />
            <div
              v-if="data.status === 'running'"
              class="w-[6px] h-[6px] rounded-full bg-[#34D399]"
            />
            <span>{{ data.status }}</span>
          </div>
        </template>
      </Column>
      <Column
        field="log"
        header="Log"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[10%]'}
        }"
      >
        <template #body>
          <button class="w-[30px] h-[15px] bg-[#D1FAE5] flex items-center justify-center rounded-lg">
            <ArrowIcon class="w-[13px] text-[#065F46] transform rotate-90" />
          </button>
        </template>
      </Column>
      <Column
        field="action"
        header="Action"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[10%] pr-5'}
        }"
      >
        <template #body="{ data }">
          <button
            class="px-2 rounded-xl text-[11px] font-medium"
            :class="{'bg-[#FEE2E2] text-[#991B1B]': data.action === 'stop', 'bg-[#D1FAE5] text-[#065F46]': data.action === 'adjust'}"
          >
            {{ data.action }}
          </button>
        </template>
      </Column>
      <template #paginatorprevpagelinkicon />
      <template #paginatornextpagelinkicon />
      <template #footer>
        <div class="w-full flex justify-between items-center mt-5 px-5">
          <span class="block text-[12px] font-[Jakarta] text-white/75">
            Page {{ currentPage }} / {{ calculateTotalPages() }}  
          </span>
          <Paginator
            unstyled
            template="PrevPageLink NextPageLink"
            :pt="{
              previousPageButton: {class: 'w-[48px] h-[29px] rounded-md bg-white/30 mr-2'},
              nextPageButton: {class: 'w-[48px] h-[29px] rounded-md bg-white/30'}
            }"
          />
        </div>
      </template>
    </DataTable>
  </div>
</template>

<style>
tr {
    padding: 10px !important;
  }
  tbody tr td:nth-child(1) {
    padding: 14px 20px;
  }
  
</style>