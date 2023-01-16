const modalAnimationVariants = {
	hidden: {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%) scale(0)',
		opacity: 0,
		transition: {
			delay: 0.3,
		},
	},
	visible: {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%) scale(1)',
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	},
	exit: {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%) scale(0)',
		opacity: 0,
		transition: {
			duration: 0.4,
		},
	},
};

export { modalAnimationVariants };
