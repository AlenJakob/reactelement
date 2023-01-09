export const sizeConverter = (size: number) => {
	const BASE_CLASS = 'nt-icon__size';

	if (size === 1) {
		return `${BASE_CLASS}--small`;
	}
	if (size === 2) {
		return `${BASE_CLASS}--medium`;
	}
	if (size === 3) {
		return `${BASE_CLASS}--big`;
	}
};
