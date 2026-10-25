import type { MaybeRefOrGetter } from 'vue';
import type { ContentNavigationItem, PageCollections } from '@nuxt/content';
import { findPageBreadcrumb, findPageChildren } from '@nuxt/content/utils';

/** Navigation for one section of a collection (e.g. `/docs/ta-installer`), plus the pages around the current one. */
export function useSectionNavigation(collection: keyof PageCollections, root: MaybeRefOrGetter<string>) {
	const route = useRoute();
	// Same key in every component, so the tree is only fetched once per collection.
	const { data: tree } = useAsyncData(`navigation:${collection}`, () => queryCollectionNavigation(collection));

	const title = computed(() => findPageBreadcrumb(tree.value ?? [], toValue(root), { current: true }).at(-1)?.title);
	const items = computed(() => findPageChildren(tree.value ?? [], toValue(root), { indexAsChild: true }));
	const pages = computed(() => flatten(items.value));
	const index = computed(() => pages.value.findIndex(page => page.path === route.path));
	const prev = computed(() => index.value > 0 ? pages.value[index.value - 1] : undefined);
	const next = computed(() => index.value === -1 ? undefined : pages.value[index.value + 1]);

	return { title, items, prev, next };
}

/** Pages in sidebar order. Folders are skipped in favour of their index page. */
function flatten(items: ContentNavigationItem[]): ContentNavigationItem[] {
	return items.flatMap(item => [
		...(item.page === false || item.children?.some(child => child.path === item.path) ? [] : [item]),
		...flatten(item.children ?? []),
	]);
}
