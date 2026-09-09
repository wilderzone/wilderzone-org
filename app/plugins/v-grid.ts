/** Attach the host element to a given CSS grid area. */
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('grid', {
		beforeMount(element, binding) {
			if (binding.arg) {
				element.style.gridArea = binding.arg;
			}
		},
		updated(element, binding) {
			if (binding.arg) {
				element.style.gridArea = binding.arg;
			}
		}
	});
});
