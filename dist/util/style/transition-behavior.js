export const normalizeTransitionBehavior = (transitionBehavior) => {
    if (!transitionBehavior) {
        return 'normal'; // Default value
    }
    return transitionBehavior;
};
