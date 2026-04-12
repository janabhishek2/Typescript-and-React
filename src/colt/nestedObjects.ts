type Song = {
    name: string,
    streams: number,
    writer: {
        primary: string,
        secondary?: string
        // making secondary artish optional
    }
};

const song: Song = {
    name: "Tu Jaane Na",
    streams: 1000,
    writer: {
        primary: "Subhash",
    }
};
