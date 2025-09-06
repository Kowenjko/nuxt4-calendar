<script lang="ts" setup>
import { useForm, useFieldArray } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import { Plus, X } from 'lucide-vue-next'

type Availability = {
	startTime: string
	endTime: string
	dayOfWeek: (typeof DAYS_OF_WEEK_IN_ORDER)[number]
}

interface ScheduleProps {
	schedule: { timezone: string; availabilities: Availability[] }
}

const { schedule } = defineProps<ScheduleProps>()

const timezones = computed(() => Intl.supportedValuesOf('timeZone'))

// Initialize form with validation schema and default values
const form = useForm({
	validationSchema: toTypedSchema(scheduleFormSchema),
	initialValues: {
		timezone: schedule?.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
		availabilities: schedule?.availabilities.toSorted((a, b) => {
			return timeToFloat(a.startTime) - timeToFloat(b.startTime)
		}),
	},
})

const {
	push: addAvailability,
	remove: removeAvailability,
	fields: availabilityFields,
} = useFieldArray('availabilities')

// Group availability fields by day of the week for UI rendering
const groupedAvailabilityFields = computed(() =>
	Object.groupBy(
		availabilityFields.value?.map((field: any, index: any) => ({ ...field.value, index })),
		(availability) => availability?.dayOfWeek!
	)
)

const onSubmit = form.handleSubmit(async (values) => {
	try {
		// await saveSchedule(values)
		toast('Schedule saved successfully.', {
			duration: 5000,
			class: '!rounded-3xl !py-8 !px-5 !justify-center !text-green-400 !font-black',
		})
	} catch (error: any) {
		toast.error(error?.message || 'An error occurred while saving the schedule.')
	}
})
</script>

<template>
	<form class="flex gap-6 flex-col" @submit="onSubmit">
		<!-- Timezone selection -->
		<FormField v-slot="{ componentField }" name="timezone">
			<FormItem>
				<FormLabel>Timezone</FormLabel>
				<Select v-bind="componentField">
					<SelectTrigger>
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup
							><SelectItem v-for="timezone in timezones" :key="timezone" :value="timezone">
								{{ timezone }}{{ ` (${formatTimezoneOffset(timezone)})` }}
							</SelectItem></SelectGroup
						>
					</SelectContent>
				</Select>
			</FormItem>
		</FormField>
		<!-- Availability form grid grouped by day -->
		<div class="grid grid-cols-[auto_auto] gap-y-6">
			<template v-for="dayOfWeek in DAYS_OF_WEEK_IN_ORDER" :key="dayOfWeek">
				<div class="capitalize text-sm font-semibold">
					{{ dayOfWeek.substring(0, 3) }}
				</div>
				<div class="flex flex-col gap-2">
					<Button
						type="button"
						class="size-6 p-1 cursor-pointer hover:scale-200"
						variant="outline"
						@click="() => addAvailability({ dayOfWeek, startTime: '09:00', endTime: '17:00' })"
					>
						<Plus color="red" />
					</Button>
				</div>
				<div
					class="flex flex-col gap-1"
					v-for="(field, labelIndex) in groupedAvailabilityFields[dayOfWeek]"
					:key="field.id"
				>
					<div class="flex gap-2 items-center">
						<!-- Start time input -->
						<FormField v-slot="{ componentField }" :name="`availabilities.${field.index}.startTime`">
							<FormItem>
								<FormControl>
									<Input
										class="w-24"
										v-bind="componentField"
										:aria-label="`${dayOfWeek} Start Time ${labelIndex + 1}`"
									/>
								</FormControl>
							</FormItem>
						</FormField>
						<!-- End time input -->
						<FormField v-slot="{ componentField }" :name="`availabilities.${field.index}.endTime`">
							<FormItem>
								<FormControl>
									<Input class="w-24" v-bind="componentField" :aria-label="`${dayOfWeek} End Time ${labelIndex + 1}`" />
								</FormControl>
							</FormItem>
						</FormField>
						<Button
							type="button"
							class="size-6 p-1 cursor-pointer hover:bg-red-900"
							variant="destructive"
							@click="removeAvailability(field.index)"
						>
							<X />
						</Button>
					</div>
					{{ form.errors.value.availabilities?.at?.(field.index) }}
				</div>
			</template>
		</div>
		<div class="flex gap-2 justify-start">
			<Button class="cursor-pointer hover:scale-105 bg-blue-400 hover:bg-blue-600" type="submit"> Save </Button>
		</div>
	</form>
</template>
