<script setup lang="ts">
interface QuickStatus {
	checked_at: string;
	servers: {
		down: number;
		total: number;
		unknown: number;
		up: number;
	};
	status: (typeof valid)[number];
}

const status = ref<QuickStatus['status'] | 'unknown'>('unknown');
const valid = ['up', 'partial', 'down'] as const;

async function load(): Promise<void> {
	try {
		const response = await fetch('https://status.wilderzone.org/quick');
		const data = await response.json<QuickStatus>();
		if (valid.includes(data.status)) {
			status.value = data.status;
		} else {
			status.value = 'down';
		}
	} catch {
		status.value = 'down';
	}
}

onMounted(() => void load());
</script>

<template>
	<a
		href="https://status.wilderzone.org/"
		target="_blank"
		rel="noreferrer"
		class="status-link"
	>
		<span class="indicator" :class="status"></span>
		<span>Status</span>
	</a>
</template>

<style scoped>
.status-link {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--gap-s);
}

.indicator {
	display: inline-block;
	width: 1ch;
	height: 1ch;
	border-radius: 50%;

	&.up { background: #2ea043; }
	&.partial { background: #d9a520; }
	&.down { background: #d1424b; }
	&.unknown { background: #7f776c; }
}
</style>
