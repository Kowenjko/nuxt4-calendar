<script lang="ts" setup>
import { Trash2Icon } from 'lucide-vue-next'

const { isIcon = false, variant = 'destructive' } = defineProps<{ isIcon?: boolean; variant?: any }>()

const emit = defineEmits<{ deleted: [] }>()

const deleteEventSubmit = () => emit('deleted')
</script>

<template>
	<AlertDialog>
		<AlertDialogTrigger as-child>
			<Button class="cursor-pointer hover:scale-105 hover:bg-red-700" :variant="variant">
				<Trash2Icon v-if="isIcon" />
				<span v-else>Delete</span>
			</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone. This will permanently delete this event.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction class="bg-red-500 hover:bg-red-700 cursor-pointer" @click="deleteEventSubmit">
					Delete
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</template>
