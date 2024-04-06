export enum AnimationDirection {
    LEFT_TO_RIGHT,
    RIGHT_TO_LEFT,
}

export function flipIn(node: any, direction: AnimationDirection) {
    const rotateY = direction === AnimationDirection.LEFT_TO_RIGHT ? 180 : -180;
    return {
        duration: 500,
        css: (timer: number) => {
            return `
            transform: rotateY(${rotateY * (1 - timer)}deg);
            opacity: ${timer <= 0.5 ? 0 : 1};
        `;
        },
    };
}

export function flipOut(node: any, direction: AnimationDirection) {
    const rotateY = direction === AnimationDirection.LEFT_TO_RIGHT ? 180 : -180;
    return {
        duration: 500,
        css: (timer: number) => `
            transform: rotateY(${rotateY * (1 - timer)}deg);
            opacity: ${timer <= 0.5 ? 0 : 1};
            `,
    };
}