<script lang="ts" setup>
import { CopyIcon } from 'lucide-vue-next'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'

interface CopyEventButtonProps {
	eventId: string
	clerkUserId: string
}

const { eventId, clerkUserId } = defineProps<CopyEventButtonProps>()

const url = computed(() => `${location.origin}/book/${clerkUserId}/${eventId}`)

const { copy, copied, isSupported } = useClipboard()

const notifyCopySuccess = () => {
	copy(url.value)
	toast.success('Event link copied to clipboard!')
}
</script>

<template>
	<Button @click="notifyCopySuccess" :disabled="!isSupported">
		<CopyIcon class="size-4 mr-2" />
		{{ copied ? 'Copied' : 'Copy Link' }}
	</Button>
</template>
