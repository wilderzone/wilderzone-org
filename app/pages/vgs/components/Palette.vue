<script setup lang="ts">
import type { VGSMatch } from '@wilderzone/vgs';
import { vgsPacks } from '~/data/vgs';

defineProps<{
	options: VGSMatch[];
	pressed: string;
	timeout: number;
}>();

const pack = defineModel<string>({ required: true });

const emit = defineEmits<{
	select: [string];
}>();
</script>

<template>
	<section class="palette" aria-labelledby="palette-heading">
		<label for="voice-pack">
			<h3 id="palette-heading">Pack</h3>
			<select name="voice-pack" id="voice-pack" v-model="pack">
				<option
					v-for="pack of vgsPacks"
					:key="pack.pack"
					:value="pack.pack"
				>{{ pack.name }}</option>
			</select>
		</label>
		<ul class="input" aria-label="Commands">
			<li
				v-for="option of options"
				:key="option.command"
				:aria-label="option.key"
			>
				<button
					:class="{ active: pressed === option.key.toLowerCase() }"
					@click="emit('select', option.key)"
				>
					<span>{{ option.key }}: </span>
					<span>{{ option.name }}</span>
				</button>
			</li>
		</ul>
		<slot></slot>
	</section>
</template>

<style scoped>
section.palette {
	background: var(--color-card-metal);
	border: 1px solid var(--color-border);
	box-shadow: 0 0 14px -6px #0002;

	& label {
		display: flex;
		align-items: center;
		gap: var(--gap-s);
		width: 100%;
	}

	& select {
		width: 100%;
		padding: var(--gap-xs) var(--gap-s);
		font-family: inherit;
		font-size: var(--font-size-m);
		border-radius: var(--border-radius-s);
	}

	& .input {
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		margin: 0;
		padding: var(--gap-s);
		list-style: none;
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-s);
		user-select: none;

		& button {
			all: unset;
			box-sizing: border-box;
			width: 100%;
			padding: var(--gap-xs) var(--gap-s);
			cursor: pointer;

			&.active {
				color: var(--color-orange);
			}

			&:is(:focus-visible, :hover) {
				color: var(--color-orange);
				background: #8882;
			}
		}

		& span:nth-of-type(1) {
			font-weight: bold;
		}
	}
}
</style>
